angular.module("myApp")
.controller("appCtrl",function ($mdDialog,$scope,$rootScope,$state,$timeout,$interval) {
    $scope.meals=[
        {name:"Pizza",price:1000,quan:12,img:"images/p1.jpg",
            desc:"We to blue theme being inherited to the dialog and any component inside "},
        {name:"Pasta",price:200,quan:12,img:"images/1.jpg",
            desc:"We to blue theme being inherited to the dialog and any component inside "},
        {name:"salad",price:300,quan:12,img:"images/s.jpg",
            desc:"We to blue theme being inherited to the dialog and any component inside "},
        {name:"chips",price:500,quan:12,img:"images/j.jpg",
            desc:"We to blue theme being inherited to the dialog and any component inside "},
        {name:"meat",price:900,quan:12,img:"images/2.jpg",
            desc:"We to blue theme being inherited to the dialog and any component inside "},
        {name:"hamburger",price:100,quan:12,img:"images/h.jpg",
            desc:"We to blue theme being inherited to the dialog and any component inside "},
        {name:"eggs",price:200,quan:12,img:"images/eggs.jpg",
            desc:"We to blue theme being inherited to the dialog and any component inside "},
        {name:"red Meal",price:700,quan:12,img:"images/red.jpg",
            desc:"We to blue theme being inherited to the dialog and any component inside "},
        {name:"sweets ",price:100,quan:12,img:"images/sw.jpg",
            desc:"We to blue theme being inherited to the dialog and any component inside "},
        {name:"special",price:900,quan:12,img:"images/b.jpg",
            desc:"We to blue theme being inherited to the dialog and any component inside "},
        {name:"hamburger",price:600,quan:12,img:"images/ch.jpg",
            desc:"We to blue theme being inherited to the dialog and any component inside "},
        {name:"tomato",price:200,quan:12,img:"images/t.jpg",
            desc:"We to blue theme being inherited to the dialog and any component inside "},

    ];
    $scope.customers=[
        {number:40,name:"Abdiwali",phone:0127638689,id_card:633663,img:"img/male.jpg",addr:"khartoum"},
        {number:70,name:"Abdallah",phone:0133762762,id_card:737223,img:"img/male.png",addr:"mogadishu"}

    ]
    $scope.basket=[];
    $scope.buy=function (meal) {
        var x = prompt("Enter the quantity of " + meal.name)
        if (x) {
            x = parseFloat(x)
           $scope.basket.push({
                name: meal.name,
                price: meal.price,
                qty: x,
                img: meal.img

        })
            swal("Added To Cart", "", "success")

        }
    }
})
    .controller("booksCtrl",function ($scope,$rootScope) {

    })
       .controller("restCtrl",function ($scope,$rootScope,$state,$timeout,$interval) {

       })

.controller("custCtrl",function ($scope,$rootScope,$mdDialog,$interval) {





})
