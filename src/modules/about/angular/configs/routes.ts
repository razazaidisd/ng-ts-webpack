config.$inject = ["$routeProvider"];
export function config($routeProvider: ng.route.IRouteProvider): void {
    $routeProvider.when("/about", {
        template: "<page-abouts></page-abouts>"
    });
}