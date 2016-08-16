var app = angular.module('myApp', []);
app.controller('myController', function ($scope) {

    $scope.showDataItems = function () {
        $scope.saved = localStorage.getItem('allItems');
        $scope.items = (localStorage.getItem('allItems')!==null) ? JSON.parse($scope.saved) :
            [{
                name: 'First item with custom name',
                comments: [{
                    img: '',
                    text: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s'
                }]
            }, {
                name: 'Second  item is active',
                comments: [{
                    img: '',
                    text: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s'
                }, {
                    img: '',
                    text: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s'
                }, {
                    img: '',
                    text: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980sA variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980sA variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s'
                }]
            }];
        localStorage.setItem('allItems', JSON.stringify($scope.items));
    $scope.selected = 1;

    $scope.select = function (index) {
        $scope.selected = index;
    };

    $scope.addItemField = function () {
        $scope.items.push({
            name: $scope.newName,
            comments: []
        });
        localStorage.setItem('allItems', JSON.stringify($scope.items));

    };
    $scope.removeItem = function (index) {
        $scope.items.splice(index, 1);
        localStorage.setItem('allItems', JSON.stringify($scope.items));
    };

    $scope.onClickInputField = function ($event) {
        $event.target.select();
    };

    $scope.addComment = function (element) {
        if (event.keyCode == 13) {
            event.preventDefault();
            $scope.items[element].comments.push({
                img: '',
                text: $scope.newComment
            });
            $scope.newComment = '';
        }
        localStorage.setItem('allItems', JSON.stringify($scope.items));
    };


    };
});
