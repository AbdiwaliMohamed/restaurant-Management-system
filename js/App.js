angular.module("myApp",["ngMaterial","ui.router","mds"])
    .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state("app",{
                url:"/app",
                views:{
                    main:{
                        templateUrl:"template/main.html",
                        controller:"appCtrl"
                    }
                }
            })
            .state("app.home",{
                url:"/home",
                views:{
                    sub:{
                        templateUrl:"template/home.html",
                        controller:"appCtrl"
                    }
                }
            })
            .state("app.rest",{
                url:"/rest",
                views:{
                    sub:{
                        templateUrl:"template/rest.html",
                        controller:"restCtrl"
                    }
                }
            })
            .state("app.books",{
                url:"/books",
                views:{
                    sub:{
                        templateUrl:"template/books.html",
                        controller:"booksCtrl"
                    }
                }
            })
            .state("app.cust",{
                url:"/cust",
                views:{
                    sub:{
                        templateUrl:"template/register_Cust.html",
                        controller:"custCtrl"
                    }
                }
            })
            .state("app.account",{
                url:"/account",
                views:{
                    sub:{
                        templateUrl:"template/account.html",
                        controller:"accountCtrl"
                    }
                }
            })

        $urlRouterProvider.otherwise("/app/home")
    })








