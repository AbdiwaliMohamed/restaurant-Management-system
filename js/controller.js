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
        {number:40,name:"Abdiwali mohamed mursal",phone:0127638689,id_card:633663,img:"img/male.jpg",addr:"khartoum"},
        {number:70,name:"Abdallah mohamed Ali",phone:0133762762,id_card:737223,img:"img/male.png",addr:"mogadishu"},
        {number:80,name:"Mohamed Jamac nor",phone:0133762762,id_card:737223,img:"img/male.png",addr:"mogadishu"},
        {number:45,name:"Omar ali farah",phone:0127638689,id_card:633663,img:"img/male.jpg",addr:"khartoum"},
        {number:55,name:"Ahmed nor ahmed",phone:0127638689,id_card:633663,img:"img/male.jpg",addr:"khartoum"},

    ]
   $scope.basket=[];
    $scope.books=[
       {name:"Ahmed nor ahmed",number:35,order_price:77,date:"12/12/1990",total:5000}
    ];
    $scope.buy=function (meal) {
        var x = prompt("Enter the quantity of " + meal.name)
        if (x>=1) {
            x = parseFloat(x)
           $scope.basket.push({
                name: meal.name,
                price: meal.price,
                qty: x,
                img: meal.img

        })
            swal("Added To Cart", "", "success")

        }
        else {
            swal("Please Enter the quantity of Order", "", "info")

        }
    }
    $scope.addBook=function (item) {
        $scope.customers.forEach(function (num) {
            if (num.number==num.number) {
                $scope.books.push({
                    number: num.number,
                    name:$scope.customers[0].name,
                    order_price:$scope.basket[0].price,
                    total:$scope.basket[0].price*$scope.basket[0].qty
                })
                $scope.basket=[]
                $scope.modal="modal"
                swal("Added To Customer Book", "", "success")

            }
            else {
                $scope.modal=""
                swal("not your customers", "", "info")

            }
        })

    }
    $scope.CustChanged = function(){
        $scope.books = $scope.books.filter(x=>x.Name==$scope.books.trim())
    }

        $scope.delete=function (index) {
          $scope.basket.splice(index,1)
            swal("deleted", "", "success");
         $scope.$apply()
        }
//     $scope.custName;
// $scope.searchedbook = [];
//     $scope.bookChanged = function(){
//         $scope.searchedbook = $scope.books.filter(x=>x.name==$scope.custName.trim());
//     }
})
    .controller("booksCtrl",function ($scope,$rootScope) {

    })
       .controller("restCtrl",function ($scope,$rootScope,$state,$timeout,$interval) {

       })

.controller("custCtrl",function ($scope,$rootScope,$mdDialog,$interval) {





})


