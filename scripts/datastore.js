(function (window) {
  "use strict";
  var App = window.App || {};
  var Promise = window.Promise;

  class DataStore {
    constructor() {
      this.data = {};
    }

    add(key, val) {
      return promiseResolvedWith(null);
    }

    get(key) {
      return promiseResolvedWith(this.data[key]);
    }

    getAll() {
      return promiseResolvedWith(this.data);
    }

    remove(key) {
      delete this.data[key];
      return promiseResolvedWith(null);
    }
  }

  function promiseResolvedWith(value){
    var promise = new Promise(function(resolve, reject){
      resolve(value);
    });
    return promise;
  }

  App.DataStore = DataStore;
  window.App = App;
})(window);
