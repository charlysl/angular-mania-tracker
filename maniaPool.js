(function(angular) {
    'use strict';

var ManiaPoolController = function () {
    var ctrl = this;
    ctrl.slots = [];
    ctrl.getSlots = getSlots;
    ctrl.select = select;
    ctrl.spend = spend;
    ctrl.bind = bind;
    ctrl.regain = regain;

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

    function spend (slots) {
        slots.filter(slot => slot.selected)
             .map(slot => slot.state = "empty");
    }

    function bind (slots) {
        slots.filter(slot => slot.selected)
             .map(slot => slot.state = "bound");
    }

    function regain (slots) {
        slots.filter(slot => slot.selected)
             .map(slot => slot.state = "unbound");
    }
};

ManiaPoolController.$inject = [ '$scope' ];

angular.module('app').component('maniaPool', {
    templateUrl: 'maniaPool.html',
    controller: ManiaPoolController
});

})(window.angular);
