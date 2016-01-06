'use strict';

angular.module('Commit.services')
  .provider('books', function() {
      this.$get = function(constants) {
        var appName = constants.APP_TITLE;
        var appDesc = constants.APP_DESCRIPTION;

        return {
          appName: appName,
          appDesc: appDesc
        };
      };
  });
/*
angular.module('Commit.services')
  .config(function($provide) {
    $provide.provider('booksProvider', function() {
      this.$get = function(){

        var appName = 'Book Logger';
        var appDesc = 'Track which books you read.';

        var version = '1.0';
        if(includeVersionInTitle) {
          appName += ' ' + version;
        }

        return {
          appName: appName,
          appDesc: appDesc
        };
      };

      var includeVersionInTitle = false;
      this.setIncludeVersionInTitle = function(value){
        includeVersionInTitle = value;
      };
      console.log(this);
    });
  });
*/
