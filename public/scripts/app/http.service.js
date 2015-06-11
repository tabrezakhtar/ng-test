serviceModule.service('httpService', ['$http', '$q', function ($http, $q) {
    return {
        get: function (url) {
            var deferred = $q.defer();

            $http({ method: 'GET', url: url }).
				success(function (data, status, headers, config) {
				    deferred.resolve(data);
				}).
				error(function (data, status, headers, config) {
				    deferred.reject(data);
				});

            return deferred.promise;
        },
        post: function (url, data) {
            var deferred = $q.defer();

            $http({ method: 'POST', url: url, msg: data }).
                success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function (data, status, headers, config) {
                    deferred.reject(data);
                });

            return deferred.promise;
        },
        delete: function (url) {
            var deferred = $q.defer();

            $http({ method: 'DELETE', url: url}).
                success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function (data, status, headers, config) {
                    deferred.reject(data);
                });

            return deferred.promise;
        }
    };
}]);