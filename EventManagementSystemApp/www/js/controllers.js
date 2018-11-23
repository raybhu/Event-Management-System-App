angular.module('app.controllers', [])
  .controller('homeCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $http, ) {
      $scope.fetchData = function (isReload) {
        $http.get("http://localhost:1337/")
          .then(function (response) {
            $scope.items = response.data;
          }).finally(function () {
            if (isReload) {
              $scope.$broadcast('scroll.refreshComplete');
            }
          });
      }
      $scope.fetchData();
    }
  ])
  .controller('organizerCtrl', ['$scope', '$stateParams', '$http', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $http, $ionicPopup) {
      $http.get("http://localhost:1337/search", {
          params: {
            organizerList: '1'
          }
        })
        .then(function (response) {
            $scope.items = [...new Set(response.data.map(x => x.organizer))];
          },
          function (response) {
            var alertPopup = $ionicPopup.alert({
              title: response.data,
              template: 'Load Data failed. Please try again.'
            });
            alertPopup.then(function (res) {
              $ionicHistory.goBack();
            });
          }
        ).finally(function () {});
    }
  ])
  .controller('venueCtrl', ['$scope', '$stateParams', 'venueService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, venueService) {
      $scope.items = venueService.venueData;
    }
  ])
  .controller('personCtrl', ['$scope', '$stateParams', 'session', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, session, $state) {
      $scope.$on("$ionicView.beforeEnter", function () {
        $scope.login = function () {
          if (session.getSession) {
            session.getSession = null;
            $state.reload();
          } else {
            $state.go('tabsController.login');
          }
        }
        if (session.getSession) {
          $scope.loginButtonLabel = 'Logout';
          $scope.usernameLabel = session.getSession.username;
          $scope.avatarUrl = '././img/avatar_login.jpg';
          $scope.isLogin = true;
          //  $scope.LoginStatus = 'ng-click="logout()"';
        } else {
          $scope.loginButtonLabel = 'Login';
          $scope.usernameLabel = 'User Name';
          $scope.avatarUrl = '././img/avatar_not_login.png';
          $scope.isLogin = false;
          // $scope.LoginStatus = 'ui-sref="tabsController.login()"';
        }
      })
    }
  ])
  .controller('detailsCtrl', ['$scope', '$stateParams', '$http', '$ionicPopup', '$ionicHistory', 'session', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $http, $ionicPopup, $ionicHistory, session, $state) {
      $scope.generatedRegistederButtonEvent = function () {
        $scope.register = function () {
          var isRegister = true;
          if ($scope.registerButtonLabel === 'Cancel') {
            isRegister = false;
          }
          $http.post("http://localhost:1337/user/event/", {
            session: session.getSession,
            eventId: $stateParams.id,
            isRegister: isRegister
          }).then(function (response) {
              $state.reload();
            },
            function (response) {
              var alertPopup = $ionicPopup.alert({
                title: response.data,
                template: 'Load Data failed. Please try again.'
              });
            }
          ).finally(function () {});
        }
      }
      $scope.checkRegisteredStatus = function () {
        if (session.getSession) {
          $http.post("http://localhost:1337/ionic/check-registration-status", {
            session: session.getSession,
            eventId: $stateParams.id
          }).then(function (response) {
              if (response.data) {
                if (response.data.isRegistered) {
                  $scope.registerButtonLabel = 'Cancel';
                } else {
                  $scope.registerButtonLabel = 'Register';
                }
                $scope.generatedRegistederButtonEvent();
              }
            },
            function (response) {
              var alertPopup = $ionicPopup.alert({
                title: response.data,
                template: 'Load Data failed. Please try again.'
              });
            }
          ).finally(function () {});
        } else {
          $scope.registerButtonLabel = 'Register';
          $scope.register = function () {
            var alertPopup = $ionicPopup.alert({
              title: 'Please Login your account first'
            });
          }
        }
      }
      $scope.$on("$ionicView.beforeEnter", function () {
        $http.get("http://localhost:1337/search", {
            params: {
              id: $stateParams.id
            }
          })
          .then(function (response) {
              if (response.data) {
                $scope.item = response.data;
                $scope.checkRegisteredStatus();
              } else {
                var alertPopup = $ionicPopup.alert({
                  title: 'Load Event Failed',
                  template: 'Specified Event has maybe deleted or modified! Please Go back to previous page and refresh.'
                });
                alertPopup.then(function (res) {
                  $ionicHistory.goBack();
                });
              }
            },
            function (response) {
              var alertPopup = $ionicPopup.alert({
                title: response.data,
                template: 'Load Data failed. Please try again.'
              });
            }
          ).finally(function () {});
      })
    }
  ])
  .controller('locationCtrl', ['$scope', '$stateParams', 'venueService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, venueService) {
      var venueModel = venueService.getVenue($stateParams.venueId);
      var map = L.map('map').setView([venueModel.Latitude, venueModel.Longitude], 17);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      L.marker([venueModel.Latitude, venueModel.Longitude]).addTo(map)
        .bindPopup(venueModel.VenueName);
    }
  ])
  .controller('eventsByOrganizerCtrl', ['$scope', '$stateParams', '$http', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $http, $ionicPopup) {
      $http.get("http://localhost:1337/search", {
          params: {
            organizer: $stateParams.organizer
          }
        })
        .then(function (response) {
            $scope.items = response.data;
          },
          function (response) {
            var alertPopup = $ionicPopup.alert({
              title: response.data,
              template: 'Load Data failed. Please try again.'
            });
            alertPopup.then(function (res) {
              $ionicHistory.goBack();
            });
          }
        ).finally(function () {});
    }
  ])
  .controller('eventsByVenueCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $http) {
      $http.get("http://localhost:1337/search", {
          params: {
            venueId: $stateParams.venueId
          }
        })
        .then(function (response) {
            $scope.items = response.data;
          },
          function (response) {
            var alertPopup = $ionicPopup.alert({
              title: response.data,
              template: 'Load Data failed. Please try again.'
            });
            alertPopup.then(function (res) {
              $ionicHistory.goBack();
            });
          }
        ).finally(function () {});
    }
  ])
  .controller('loginCtrl', ['$scope', '$stateParams', '$http', '$ionicPopup', '$ionicHistory', 'session', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $http, $ionicPopup, $ionicHistory, session) {
      // test environment
      $scope.data = {
        username: 'student1',
        password: '123456'
      };
      // $scope.data = {};
      $scope.login = function () {
        $http.post("http://localhost:1337/login", {
            username: $scope.data.username,
            password: $scope.data.password
          })
          .then(function (response) {
              session.getSession = response.data;
              $ionicHistory.goBack();
            },
            function (response) {
              var alertPopup = $ionicPopup.alert({
                title: response.data,
                template: 'Username or Password is not correct. Please try again.'
              });
              alertPopup.then(function (res) {
                //$ionicHistory.goBack();
              });
            }
          ).finally(function () {});
      }
    }
  ])
  .controller('registeredPageCtrl', ['$scope', '$stateParams', 'session', '$http', '$ionicPopup', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, session, $http, $ionicPopup, $state) {
      $scope.$on("$ionicView.beforeEnter", function () {
        if (session.getSession) {
          $http.post("http://localhost:1337/my-registered-events", {
              session: session.getSession
            })
            .then(function (response) {
                $scope.items = response.data[0].registered;
              },
              function (response) {
                var alertPopup = $ionicPopup.alert({
                  title: response.data,
                  template: 'Load data failed. Please try again.'
                });
                alertPopup.then(function (res) {
                  //$ionicHistory.goBack();
                });
              }
            ).finally(function () {});
        }
      })
    }
  ])
