angular.module('myApp')
  .directive('myDir', function() {

    return {
      restrict: 'E',
      templateUrl: 'directive/myDirTmpl.html',
      scope: {
      },
      link: function(scope, element, attribute) {

              $("#typing-text").typed({
                strings: ["HI MIKAYDA", "YOU'RE MY LOVE!"],
                typeSpeed: 0
              });

      }
    }
  });
  //restrict with A,E, or AE
