(function(angular) {
    'use strict';

var ManiaPoolController = function () {
    var ctrl = this;
    ctrl.slots = [];
    ctrl.getSlots = getSlots;
    ctrl.select = select;

    activate();

    function activate () {
        ctrl.slots = getSlots();
    };

    // load this from the database eventually
    function getSlots () {
        return [
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
    };

    function select (slot) {
        slot.selected = !slot.selected;
    }

ManiaPoolController.$inject = [ '$scope' ];

angular.module('app').component('maniaPool', {
    templateUrl: 'maniaPool.html',
    controller: ManiaPoolController
});

})(window.angular);
