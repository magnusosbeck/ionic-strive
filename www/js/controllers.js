angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {

      $scope.route = {
          "results": [
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Saint-Jean-Pied-de-Port",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.23811000000001,
                      "longitude": 43.163141
                  },
                  "DistanceFromPreviousPointMeters": 0,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 0,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:47:59.712Z",
                  "objectId": "bcLsVNWKE6",
                  "updatedAt": "2015-05-14T05:47:59.712Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "French/Spanish border",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.269908,
                      "longitude": 43.1185826
                  },
                  "DistanceFromPreviousPointMeters": 6100,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 6100,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:28.972Z",
                  "objectId": "7WScAudxnc",
                  "updatedAt": "2015-05-14T05:48:28.972Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Arneguy",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.282014,
                      "longitude": 43.108739
                  },
                  "DistanceFromPreviousPointMeters": 1700,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 7800,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:29.510Z",
                  "objectId": "dnlnWy1UKJ",
                  "updatedAt": "2015-05-14T05:48:29.510Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Valcarlos",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.30174520000003,
                      "longitude": 43.0916034
                  },
                  "DistanceFromPreviousPointMeters": 2600,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 10400,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:30.018Z",
                  "objectId": "IgiorptMDY",
                  "updatedAt": "2015-05-14T05:48:30.018Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Regata Cainekoleta river",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.311729,
                      "longitude": 43.0545665
                  },
                  "DistanceFromPreviousPointMeters": 4400,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 14800,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:30.561Z",
                  "objectId": "2NTohjgGBD",
                  "updatedAt": "2015-05-14T05:48:30.561Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Zumazoko",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.3428212,
                      "longitude": 43.0332626
                  },
                  "DistanceFromPreviousPointMeters": 3700,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 18500,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:31.099Z",
                  "objectId": "ku2EvZfNcW",
                  "updatedAt": "2015-05-14T05:48:31.099Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Roncesvalles",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.31951000000004,
                      "longitude": 43.0091774
                  },
                  "DistanceFromPreviousPointMeters": 4000,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 22500,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:31.632Z",
                  "objectId": "chk7BdHWpw",
                  "updatedAt": "2015-05-14T05:48:31.632Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Burguete",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.3354746,
                      "longitude": 42.9904668
                  },
                  "DistanceFromPreviousPointMeters": 2700,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 25200,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:32.154Z",
                  "objectId": "Ylpe8FzSZ3",
                  "updatedAt": "2015-05-14T05:48:32.154Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Espinal",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.367257,
                      "longitude": 42.9787204
                  },
                  "DistanceFromPreviousPointMeters": 3600,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 28800,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:32.691Z",
                  "objectId": "JW9CQ9lUdY",
                  "updatedAt": "2015-05-14T05:48:32.691Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Viscarret-Guerendiain",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.41780300000005,
                      "longitude": 42.9673005
                  },
                  "DistanceFromPreviousPointMeters": 5400,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 34200,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:33.227Z",
                  "objectId": "1VtvXLZjKF",
                  "updatedAt": "2015-05-14T05:48:33.227Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Lintzoain",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.43712660000006,
                      "longitude": 42.9628056
                  },
                  "DistanceFromPreviousPointMeters": 2000,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 36200,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:33.741Z",
                  "objectId": "jW7R5UdR6c",
                  "updatedAt": "2015-05-14T05:48:33.741Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Erro",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.45011450000004,
                      "longitude": 42.9416676
                  },
                  "DistanceFromPreviousPointMeters": 3400,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 39600,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:34.252Z",
                  "objectId": "QyTbnUKo0N",
                  "updatedAt": "2015-05-14T05:48:34.252Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Zubiri",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.50463709999997,
                      "longitude": 42.9304266
                  },
                  "DistanceFromPreviousPointMeters": 7200,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 46800,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:34.761Z",
                  "objectId": "YlXXZ96oVP",
                  "updatedAt": "2015-05-14T05:48:34.761Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Urdaniz",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.5241264,
                      "longitude": 42.9122239
                  },
                  "DistanceFromPreviousPointMeters": 2700,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 49500,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:35.293Z",
                  "objectId": "5hY7o8wl7c",
                  "updatedAt": "2015-05-14T05:48:35.293Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Larrasoana",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.54295090000005,
                      "longitude": 42.9011096
                  },
                  "DistanceFromPreviousPointMeters": 2000,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 51500,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:35.800Z",
                  "objectId": "xWvSy9P4XL",
                  "updatedAt": "2015-05-14T05:48:35.800Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Zuriain",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.56582090000006,
                      "longitude": 42.8797603
                  },
                  "DistanceFromPreviousPointMeters": 3200,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 54700,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:36.327Z",
                  "objectId": "7XBpLEoPMB",
                  "updatedAt": "2015-05-14T05:48:36.327Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Antxoritz",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.57289270000001,
                      "longitude": 42.8720739
                  },
                  "DistanceFromPreviousPointMeters": 1200,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 55900,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:36.852Z",
                  "objectId": "veHszqN1sA",
                  "updatedAt": "2015-05-14T05:48:36.852Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Zabaldika",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.58248409999999,
                      "longitude": 42.8560876
                  },
                  "DistanceFromPreviousPointMeters": 2200,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 58100,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:37.373Z",
                  "objectId": "yS0f2XcmXY",
                  "updatedAt": "2015-05-14T05:48:37.373Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Olloki",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.58252370000002,
                      "longitude": 42.8405852
                  },
                  "DistanceFromPreviousPointMeters": 2000,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 60100,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:37.861Z",
                  "objectId": "Yyl8jW6uu3",
                  "updatedAt": "2015-05-14T05:48:37.861Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Burlada",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.61562609999999,
                      "longitude": 42.8264759
                  },
                  "DistanceFromPreviousPointMeters": 3800,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 63900,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:38.374Z",
                  "objectId": "YSrU4dK6CN",
                  "updatedAt": "2015-05-14T05:48:38.374Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Pamplona",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.64577450000002,
                      "longitude": 42.812526
                  },
                  "DistanceFromPreviousPointMeters": 3100,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 67000,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:39.340Z",
                  "objectId": "5LKfbinHFg",
                  "updatedAt": "2015-05-14T05:48:39.340Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Zizur Mayor",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.68821809999997,
                      "longitude": 42.7855575
                  },
                  "DistanceFromPreviousPointMeters": 5700,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 72700,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:39.903Z",
                  "objectId": "MUHa3oEpy6",
                  "updatedAt": "2015-05-14T05:48:39.903Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Astrain",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.74055599999997,
                      "longitude": 42.756667
                  },
                  "DistanceFromPreviousPointMeters": 5900,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 78600,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:40.418Z",
                  "objectId": "2bxAgL2uuK",
                  "updatedAt": "2015-05-14T05:48:40.418Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Legarda",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.77183479999997,
                      "longitude": 42.7119748
                  },
                  "DistanceFromPreviousPointMeters": 6200,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 84800,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:40.972Z",
                  "objectId": "FqhYydv8Qr",
                  "updatedAt": "2015-05-14T05:48:40.972Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Puente la Reina",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.81359429999998,
                      "longitude": 42.6723037
                  },
                  "DistanceFromPreviousPointMeters": 5600,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 90400,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:41.482Z",
                  "objectId": "ZiplLbFNei",
                  "updatedAt": "2015-05-14T05:48:41.482Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Maneru",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.86232100000007,
                      "longitude": 42.6693018
                  },
                  "DistanceFromPreviousPointMeters": 4300,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 94700,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:42.289Z",
                  "objectId": "MVfoFxNCoF",
                  "updatedAt": "2015-05-14T05:48:42.289Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Cirauqui",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.891076,
                      "longitude": 42.6755802
                  },
                  "DistanceFromPreviousPointMeters": 2500,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 97200,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:42.900Z",
                  "objectId": "kRKGw1AJER",
                  "updatedAt": "2015-05-14T05:48:42.900Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Lorca",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.94504860000006,
                      "longitude": 42.6719044
                  },
                  "DistanceFromPreviousPointMeters": 5100,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 102300,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:43.457Z",
                  "objectId": "ZPNoUfe2vJ",
                  "updatedAt": "2015-05-14T05:48:43.457Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Villatuerta",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -1.99182310000003,
                      "longitude": 42.659795
                  },
                  "DistanceFromPreviousPointMeters": 4300,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 106600,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:43.991Z",
                  "objectId": "8wRP0I1Py0",
                  "updatedAt": "2015-05-14T05:48:43.991Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Estella",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -2.03245240000001,
                      "longitude": 42.6720856
                  },
                  "DistanceFromPreviousPointMeters": 4100,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 110700,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:44.489Z",
                  "objectId": "7aMAfT7sg0",
                  "updatedAt": "2015-05-14T05:48:44.489Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Irache",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -2.05781879999995,
                      "longitude": 42.6469074
                  },
                  "DistanceFromPreviousPointMeters": 4200,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 114900,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:45.007Z",
                  "objectId": "CEyFHdOHlu",
                  "updatedAt": "2015-05-14T05:48:45.007Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Azqueta",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -2.08704979999993,
                      "longitude": 42.6358602
                  },
                  "DistanceFromPreviousPointMeters": 4800,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 119700,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:45.542Z",
                  "objectId": "6WFzmKOYKh",
                  "updatedAt": "2015-05-14T05:48:45.542Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Urbiola",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -2.10517700000003,
                      "longitude": 42.6158997
                  },
                  "DistanceFromPreviousPointMeters": 2800,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 122500,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:46.101Z",
                  "objectId": "1fkToUK3cg",
                  "updatedAt": "2015-05-14T05:48:46.101Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Los Arcos",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -2.19165420000002,
                      "longitude": 42.5684868
                  },
                  "DistanceFromPreviousPointMeters": 9400,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 131900,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:46.688Z",
                  "objectId": "h3GKxSuedB",
                  "updatedAt": "2015-05-14T05:48:46.688Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Torres del Rio",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -2.2661167,
                      "longitude": 42.5537488
                  },
                  "DistanceFromPreviousPointMeters": 6300,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 138200,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:47.255Z",
                  "objectId": "U2S1JujNpP",
                  "updatedAt": "2015-05-14T05:48:47.255Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Viana",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -2.37272400000006,
                      "longitude": 42.5154477
                  },
                  "DistanceFromPreviousPointMeters": 10600,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 148800,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:47.767Z",
                  "objectId": "lnz6zBKi69",
                  "updatedAt": "2015-05-14T05:48:47.767Z"
              },
              {
                  "ACL": {
                      "*": {
                          "read": true
                      }
                  },
                  "CityName": "Logrono",
                  "Coordinates": {
                      "__type": "GeoPoint",
                      "latitude": -2.44498520000002,
                      "longitude": 42.4627195
                  },
                  "DistanceFromPreviousPointMeters": 9100,
                  "ImageUrl": "test",
                  "Route": {
                      "__type": "Pointer",
                      "className": "routes",
                      "objectId": "mYXvSFlca3"
                  },
                  "TotalDistanceMeters": 157900,
                  "WikiText": "test",
                  "createdAt": "2015-05-14T05:48:48.303Z",
                  "objectId": "4MW4X6gP1w",
                  "updatedAt": "2015-05-14T05:48:48.303Z"
              }
          ]
      };

      for (var i in $scope.route.results) {
          $scope.route.results[i].ImageUrl = faker.image.image();
      }


  })

  .controller('ChatsCtrl', function ($scope, routeService, healthKitService) {


      routeService.getRoutsBasedOnUserId('L4tOQcuyXc').then(function (results) {
          $scope.result = results;
          console.log(results);

      });


      //routeService.getUserHasRoutes().then(function (response) {
      //    $scope.UserHasRoutesResponse =  response.results;
      //});
      //healthKitService.getValue().then(function(response){
      //    $scope.healthKit = response;
      //});

  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
      $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope, accountService) {
      $scope.settings = {
          enableFriends: true
      };


      $scope.loginInfo = {};
      $scope.loginByUsername = function () {
          accountService.login($scope.loginInfo.username, $scope.loginInfo.password).then(function (response) {
              $scope.loginResult = response;
          });
      };


  });
