Angular uiTyping
===
## Usage
``` html
<link rel="stylesheet" href="./bower_components/angular-ui-typing/uiTyping.css">
<script src="./bower_components/angular-ui-typing/uiTyping.js"></script>
```

## Example
``` js
// app.js
angular.module("myApp", ["uiTyping"]);
angular.module("myApp").controller("myCtrl", function($scope) {
    $scope.typeOfNouns = [
        "Proper Nouns",
        "Material Nouns",
        "Compound Nouns",
        "Countable Nouns"
    ];
});
```
``` html
<!-- index.html -->
<h1 ui-typing="typeOfNouns" looping="true"></h1>
```
