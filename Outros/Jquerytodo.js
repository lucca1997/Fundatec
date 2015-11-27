angular.module('Todo', []).controller('todoCtrl', function ($scope) {
    Parse.initialize("Kg4XL2Lxp2bfn1soY46q84FLw9m8wtGw5a9HJX3m", "DXFAjwHEjcihuMpOo4H2EInXdWvWhDD7ybZJEIBV");

    var Todo = Parse.Object.extend("todo");

    var query = new Parse.Query(Todo);

    query.find().then(function (data) {
        $scope.todos = _.map(data, function (todo) {
            var ret = {
                id: todo.id,
                text: todo.get('text'),
                done: todo.get('done')


            };
            return ret;
        });
        if (!$scope.$$phase)
            $scope.$apply();
    });



    $scope.adicionar = function () {
        var newTodo = new Todo();
        newTodo.set('text', $scope.task);
        newTodo.set('done', false);
        newTodo.save().then(function (todo) {
            $scope.todos.push({
                id: todo.id,
                text: todo.get('text'),
                done: todo.get('done')
            });
            $scope.task = "";
            if (!$scope.$$phase)
                $scope.$apply();
        });


    }

    $scope.atualiza = function (todo) {
        var query = new Parse.Query(Todo);
        query.get(todo.id).then(function (upTodo) {
            upTodo.set('done', todo.done);
            upTodo.save();
        });


    }

    $scope.clear = function () {
        var query = new Parse.Query(Todo);
        $scope.todos = _.filter($scope.todos, function (todo) {
            if (todo.done) {
                query.get(todo.id).then(function (upTodo) {
                    upTodo.destroy();
                });
            }
            return !todo.done;
        });
    }
});