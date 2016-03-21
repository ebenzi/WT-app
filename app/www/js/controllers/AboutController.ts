/**
 * View controller for the (modal) about view.
 */
Songbook.controller("AboutController", function($scope, SettingsService) {
  $scope.app_version = appVersion;
  
  $scope.launchBrowser = function (url:string) {
    window.open(url, '_system');
  }
});
