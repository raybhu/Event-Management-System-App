angular.module('app.routes', ['ionicUIRouter'])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider


      .state('tabsController.home', {
        url: '/page2',
        views: {
          'tab1': {
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
          }
        }
      })

      .state('tabsController.organizer', {
        url: '/page3',
        views: {
          'tab2': {
            templateUrl: 'templates/organizer.html',
            controller: 'organizerCtrl'
          }
        }
      })

      .state('tabsController.venue', {
        url: '/page4',
        views: {
          'tab3': {
            templateUrl: 'templates/venue.html',
            controller: 'venueCtrl'
          }
        }
      })

      .state('tabsController', {
        url: '/page1',
        templateUrl: 'templates/tabsController.html',
        abstract: true
      })

      .state('tabsController.person', {
        url: '/page5',
        views: {
          'tab4': {
            templateUrl: 'templates/person.html',
            controller: 'personCtrl'
          }
        }
      })

      /* 
        The IonicUIRouter.js UI-Router Modification is being used for this route.
        To navigate to this route, do NOT use a URL. Instead use one of the following:
          1) Using the ui-sref HTML attribute:
            ui-sref='tabsController.details'
          2) Using $state.go programatically:
            $state.go('tabsController.details');
        This allows your app to figure out which Tab to open this page in on the fly.
        If you're setting a Tabs default page or modifying the .otherwise for your app and
        must use a URL, use one of the following:
          /page1/tab1/page6
          /page1/tab2/page6
          /page1/tab3/page6
          /page1/tab4/page6
      */
      .state('tabsController.details', {
        url: '/page6/:id',
        views: {
          'tab1': {
            templateUrl: 'templates/details.html',
            controller: 'detailsCtrl'
          },
          'tab2': {
            templateUrl: 'templates/details.html',
            controller: 'detailsCtrl'
          },
          'tab3': {
            templateUrl: 'templates/details.html',
            controller: 'detailsCtrl'
          },
          'tab4': {
            templateUrl: 'templates/details.html',
            controller: 'detailsCtrl'
          }
        }
      })

      /* 
        The IonicUIRouter.js UI-Router Modification is being used for this route.
        To navigate to this route, do NOT use a URL. Instead use one of the following:
          1) Using the ui-sref HTML attribute:
            ui-sref='tabsController.location'
          2) Using $state.go programatically:
            $state.go('tabsController.location');
        This allows your app to figure out which Tab to open this page in on the fly.
        If you're setting a Tabs default page or modifying the .otherwise for your app and
        must use a URL, use one of the following:
          /page1/tab1/page7
          /page1/tab2/page7
          /page1/tab3/page7
          /page1/tab4/page7
      */
      .state('tabsController.location', {
        url: '/page7/:venueId',
        views: {
          'tab1': {
            templateUrl: 'templates/location.html',
            controller: 'locationCtrl'
          },
          'tab2': {
            templateUrl: 'templates/location.html',
            controller: 'locationCtrl'
          },
          'tab3': {
            templateUrl: 'templates/location.html',
            controller: 'locationCtrl'
          },
          'tab4': {
            templateUrl: 'templates/location.html',
            controller: 'locationCtrl'
          }
        }
      })

      .state('tabsController.eventsByOrganizer', {
        url: '/page8',
        views: {
          'tab2': {
            templateUrl: 'templates/eventsByOrganizer.html',
            controller: 'eventsByOrganizerCtrl'
          }
        }
      })

      .state('tabsController.eventsByVenue', {
        url: '/page9',
        views: {
          'tab3': {
            templateUrl: 'templates/eventsByVenue.html',
            controller: 'eventsByVenueCtrl'
          }
        }
      })

      .state('tabsController.login', {
        url: '/page11',
        views: {
          'tab4': {
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl'
          }
        }
      })

      .state('tabsController.registeredPage', {
        url: '/page12',
        views: {
          'tab4': {
            templateUrl: 'templates/registeredPage.html',
            controller: 'registeredPageCtrl'
          }
        }
      })

    $urlRouterProvider.otherwise('/page1/page2')


  });
