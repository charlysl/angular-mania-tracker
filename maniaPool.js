(function(angular) {
'use strict';

var ManiaPoolController = function () {
    var ctrl = this;

    // load this from the database eventually
    ctrl.slots = [
        {
            state: 'empty'
        },
        {
            state: 'empty'
        },
        {
            state: 'empty'
        },
        {
            state: 'unbound'
        },
        {
            state: 'unbound'
        },
        {
            state: 'bound',
            binding: 'death ray'
        },
        {
            state: 'bound',
            binding: 'death ray'
        },
        {
            state: 'bound',
            binding: 'death ray'
        }
    ];

    ctrl.bindings = [];
}

angular.module('app', []).component('maniaPool', {
    templateUrl: 'maniaPool.html',
    controller: ManiaPoolController
});

})(window.angular);
