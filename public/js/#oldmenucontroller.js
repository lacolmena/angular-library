app.controller('MenuController', function ($scope) {

    $scope.books = [
        {
            id: 0,
            title: "Doctor Faustus",
            author: "Thomas Mann",
            genre: "Fiction",
            country: "Germany",
            img: "img/0.jpg"
        },
        {
            id: 1,
            title: "Gargoyles",
            author: "Thomas Bernhard",
            genre: "Fiction",
            country: "Austria",
            img: "img/1.jpg"
        },
        {
            id: 2,
            title: "Perfume",
            author: "Patrick Suskind",
            genre: "Fiction",
            country: "Germany",
            img: "img/2.jpg"
        }
    ]
});
