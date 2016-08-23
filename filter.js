/// <reference path="angular.js" />
/// <reference path="controller.js" />

//Create a filter tokenize
myApp.filter("tokenize", function () {
    return function (content, defualt, delim) {
        if (angular.isString(content)) {
            var noSpace, output, delimiter;
            //remove the speace from a string
            noSpace = content.replace(/ +/g, "");
            if (defualt) {
                //defualt filter
                return output = noSpace.split('').join(',') + " (Default)";
            } else {
                //fillter with option
                delimiter = delim;
                return output = noSpace.split('').join(delimiter) + "(With option)";
            }
        } else {
            return content;
        }
        };
});
