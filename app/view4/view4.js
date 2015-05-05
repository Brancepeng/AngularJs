/**
 * Created by Administrator on 2015/4/3 0003.
 */
$('#plateNo').keydown(function(event){
    if(event.keyCode===13){
        $scope.query();
    }
});

$scope.statusClick = function(stat){

    $scope.flag = true;
    console.log($scope.cur_layer.status);
    $scope.page = 1;
    var arr = [];
    for(i=0; i<$scope.cur_layer.status.length; i++) {
        console.log($scope.cur_layer.status[i].t);
        if (($scope.cur_layer.status[i].statusCode != stat.statusCode && $scope.cur_layer.status[i].t) || ($scope.cur_layer.status[i].statusCode == stat.statusCode && !$scope.cur_layer.status[i].t)) {
            arr.push($scope.cur_layer.status[i].statusCode);
        }
    }
    console.log(arr);
    $rootScope.$broadcast('statusFilter', stat ? arr : null);
    //$scope.stat = stat?arr:null;
};

$Scope.$watch('cur_layer.status',function(status){
    console.log(status);
})
//利用模态对话框完成条件查询导出;

$scope.Download= function(){

    var modalInstance = Modal('exportData', {status:$scope.stat, text:$scope.filter});

    modalInstance.result.then(function(data){
        console.log(data);
    });
};