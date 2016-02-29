config.$inject = ["$routeProvider"];
export function config($routeProvider: ng.route.IRouteProvider): void {
    $routeProvider.when("/contact", {
        template: "<page-contact></page-contact>"
    });
}