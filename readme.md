grunt-analyze-angular
=====================

In big AngularJS projects where multiple teams work together on different modules namespacing becomes important. AngularJS has the facility to work with different modules but when the application is bootstraped all controllers services modules are loaded in the same namespace. This can lead to conflicts when the application got intergrated.

This grunt plugin helps to give insight into the names wich are used in the application. Base on phantomjs all the sources loaded and analyzed by instrumenting the code. There are different analyzers availible which will be discussed in more detail.

global
------
The global analyzer will check wich global variables are add to the window scope. In big applicatoins you dont want every team to create global variables. These variables can cause conflicts during integration. All global variables are listed in an array in the analyze/global.json file

angular
-------
The angular analyzer will the angular source files and wil list all the used module, provider, factory, service, value, constant, animation, filter, controller and directive. The output is availible in the analyze/angular.json