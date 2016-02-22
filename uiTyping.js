angular.module("uiTyping", []);
angular.module("uiTyping").directive("uiTyping", ["$interval",
    function($interval) {
        var link = function($scope, $element, attr) {
            var changeNow = true,
                index = 0,
                interval;

            function initConfig() {
                $element.addClass("ui-typing")

                if (!angular.isDefined($scope.looping)) {
                    $scope.looping = false;
                }
            }

            function animationConfig() {
                if (index < $scope.values.length) {
                    resolveAnimation();
                } else {
                    if ($scope.looping) {
                        index = 0;
                        resolveAnimation();
                    } else {
                        $interval.cancel(interval);
                    }
                }
            }

            function resolveAnimation() {
                swipeCssClasses(changeNow);
                if (changeNow) {
                    $scope.value = $scope.values[index++];
                }
                changeNow = !changeNow;
            }

            function swipeCssClasses(isWrite) {
                var cssClassWrite = "ui-typing-write",
                    cssClassDelete = "ui-typing-delete";
                if (isWrite) {
                    addAndRemove(cssClassWrite, cssClassDelete);
                } else {
                    addAndRemove(cssClassDelete, cssClassWrite);
                }
            }

            function addAndRemove(add, remove) {
                $element.addClass(add);
                $element.removeClass(remove);
            }

            initConfig();
            animationConfig();
            interval = $interval(animationConfig, 2500);
        };

        return {
            template: "{{value}}",
            restrict: "A",
            scope: {
                values: "=uiTyping",
                looping: "=?"
            },
            link: link
        }
    }
]);
