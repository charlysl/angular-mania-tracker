(function(angular) {
    'use strict';

var ManiaPoolController = function () {
    var ctrl = this;
    ctrl.slots = [];
    ctrl.catalyze = catalyze;
    ctrl.catalyzed = false;
    ctrl.createSlots = createSlots;
    ctrl.select = select;
    ctrl.spend = spend;
    ctrl.bind = bind;
    ctrl.regain = regain;
    ctrl.clearSelection = clearSelection;

    function catalyze () {
        _(10).times(function () {
            ctrl.slots.push({
                state: 'unbound'
            });
        });

        ctrl.catalyzed = true;
    }

    // activate();

    function activate () {
        ctrl.slots = createSlots();
    };

    // load this from the database eventually
    function createSlots () {
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

    function clearSelection () {
        ctrl.slots.map(slot => slot.selected = false);
    }
};

ManiaPoolController.$inject = [ '$scope' ];

angular.module('app').component('maniaPool', {
    templateUrl: 'maniaPool.html',
    controller: ManiaPoolController
});

})(window.angular);
