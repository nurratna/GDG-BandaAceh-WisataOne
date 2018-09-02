var app = angular.module('LoginController', ["firebase"]);

app.controller('LoginController', function($scope, $firebaseArray, $firebaseObject) {
    $scope.nama;
    $scope.hp;
    $scope.tanggal;
    $scope.alamat;

    $scope.ref = firebase.database().ref().child("anggota");

    $scope.items = $firebaseArray($scope.ref);
    console.log($scope.items);

    $scope.simpan = function(){
        // alert('hai ' + $scope.$id);
        $scope.items.$add({
            "nama":$scope.nama,
            "hp":$scope.hp,
            "tanggal":$scope.tanggal,
            "alamat":$scope.alamat,
        }).then(function(){
            alert('tersimpan');
        }).catch(function(error){
            console.log("ERRROR",error);
        });
    }

    $scope.hapus = function(id){
        // alert('hai ' + id);
        $scope.anggota = $firebaseObject($scope.ref.child(id));
        $scope.anggota.$remove().then(function(ref) {
          alert('terhapus');
        }, function(error) {
          console.log("Error:", error);
        });
    }

    $scope.ubah = function(id){
        $scope.anggota = $firebaseObject($scope.ref.child(id));
        $scope.anggota.$loaded().then(function(x) {
            // console.log(x.nama); // Example, you can do what you want with your 'data' now as the data has loaded
            $scope.nama = x.nama;
            $scope.hp = x.hp;
            $scope.alamat = x.alamat;
            $scope.tanggal = x.tanggal;
        }).catch(function(error) {
            console.log("Error:", error);
        });
        // console.log($scope.anggota.key());
        // // console.log($scope.anggota.hp);
        // $scope.nama = $scope.anggota.$id;
        // $scope.hp = $scope.anggota.hp;
    }

    $scope.update = function(){
        // alert('hai ' + $scope.$id);
        $scope.items.$save({
            "nama":$scope.nama,
            "hp":$scope.hp,
            "tanggal":$scope.tanggal,
            "alamat":$scope.alamat,
        }).then(function(){
            alert('tersimpan');
        }).catch(function(error){
            console.log("ERRROR",error);
        });
    }
});
