angular.module("uiTyping", []);
angular.module("uiTyping").directive("uiTyping", ["$interval",
    function($interval) {
        return {
            template: '<div ng-class="currentAnimation" class="ui-typing">{{value}}</div>',
            restrict: "E",
            scope: {
                values: "=",
                looping: "=?"
            },
            link: function($scope, $element, attr) {
                $scope.currentAnimation = "ui-typing-write";
                if (!angular.isDefined($scope.looping)) {
                    $scope.looping = false;
                }
                var changeNow = true,
                    index = 0,
                    interval;

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
                    if (changeNow) {
                        $scope.currentAnimation = "ui-typing-write";
                        $scope.value = $scope.values[index++];
                    } else {
                        $scope.currentAnimation = "ui-typing-delete";
                    }
                    changeNow = !changeNow;
                }

                animationConfig();
                interval = $interval(animationConfig, 2500);
            }
        }
    }
]);
