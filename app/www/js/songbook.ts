var appVersion = "0.0.0";
var Songbook = angular.module("songbook", ['ionic', /*'ionic.service.core', 'ionic.service.analytics',*/ 'ui.router', 'ngCordova', 'ngStorage', 'hmTouchEvents']);

interface Cordova {
  getAppVersion(callback: Function): Function;
}

Songbook.run(function ($ionicPlatform/*, $ionicAnalytics*/) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        $ionicPlatform.onHardwareBackButton(function() {
            angular.element(document.querySelectorAll('body')).removeClass('rondo-fullscreen');
        });
        $ionicPlatform.on("resume", function(event) {
            angular.element(document.querySelectorAll('body')).removeClass('rondo-fullscreen');
        });
        if (window.cordova){
            cordova.getAppVersion(function(version) {
                appVersion = version;
                //$ionicAnalytics.setGlobalProperties({
                //  app_version: version,
                //});
            });
        }
        //$ionicAnalytics.register();
    });
})

.config(function ($stateProvider, $urlRouterProvider) {

      // Ionic uses AngularUI Router which uses the concept of states
      // Learn more here: https://github.com/angular-ui/ui-router
      // Set up the various states which the app can be in.
      $stateProvider.state("search", {
        url: "/",
        templateUrl: "templates/song-list.html",
        controller: "SongListController"
      });

      $stateProvider.state("song", {
        url: "/song/:songId",
        templateUrl: "templates/song-detail.html",
        controller: "SongDetailController"
      });

      $stateProvider.state("chords", {
        url: "/song/:songId/chords",
        templateUrl: "templates/chord-list.html",
        controller: "ChordListController"
      });

      $stateProvider.state("about", {
        url: "/about",
        templateUrl: "templates/about.html",
        controller: "AboutController"
      });

      $stateProvider.state("notes", {
        url: "/song/:songId/notes",
        templateUrl: "templates/notes.html",
        controller: "NotesController"
      });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/');
});
