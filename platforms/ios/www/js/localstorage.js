if(typeof(Storage) != "undefined") {
    localStorage.setItem("firstname", "Nic");
    localStorage.setItem("lastname", "Raboy");
    alert(localStorage.getItem("firstname") + " " + localStorage.getItem("lastname"));
} else {
    alert("Sorry, your browser does not support Web Storage...");
}

myApp.controller('Login', function($scope) {
    $scope.login = function(username, password) {
        window.localStorage.setItem("username", username);
        window.localStorage.setItem("password", password);
    };
 
    $scope.isLoggedIn = function() {
        if(window.localStorage.getItem("username") !== undefined && window.localStorage.getItem("password") !== undefined) {
            return true;
        } else {
            return false;
        }
    };
 
    $scope.logout = function() {
        window.localStorage.removeItem("username");
        window.localStorage.removeItem("password");
    };
});

myApp.controller('Profile', function($scope, $http) {
    $http.get("https://api.example.com/profile", { params: { "api_key": "some_key_here" } })
        .success(function(data) {
            $scope.profile = data;
            window.localStorage.setItem("profile", JSON.stringify(data));
        })
        .error(function(data) {
            if(window.localStorage.getItem("profile") !== undefined) {
                $scope.profile = JSON.parse(window.localStorage.getItem("profile"));
            }
        });
});