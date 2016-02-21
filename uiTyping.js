angular.module("uiTyping", []);
angular.module("uiTyping").directive("uiTyping", ["$interval",
    function($interval) {
        function resolveAnimate(config, callback) {
            this.index = 0;
            this.values = config.values;
            this.length = this.values.length;
            this.looping = config.looping;
            this.callback = callback;

            var changeCurrentText = function() {
                if (this.index < this.length) {
                    this.callback(values[this.index++]);
                    if (this.index === this.length && this.looping){
                        this.index = 0;
                    }
                } else {
                    $interval.cancel(this.interval);
                }
            }.bind(this);

            changeCurrentText();
            this.interval = $interval(changeCurrentText, 5000);
        }
        return {
            template: '<div class="ui-typing">{{value}}</div>',
            restrict: "E",
            scope: {
                values: "=",
                looping: "=?"
            },
            link: function($scope, $element, attr) {
                var config = {
                    values: $scope.values,
                    looping: !!$scope.looping
                }
                resolveAnimate(config, function(value) {
                    $scope.value = value;
                });
            }
        }
    }
]);
