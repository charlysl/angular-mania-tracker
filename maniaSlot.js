(function(angular) {
    'use strict';

var ManiaSlotController = function () {
    var ctrl = this;

    ctrl.slotIcon = function () {
        switch (this.slot.state) {
            case "empty":
                return "battery-empty";
            case "unbound":
                return "bolt";
            case "bound":
                return "flask";
            default:
                return "cog";
        }
    }
}

angular.module('app').component('maniaSlot', {
    templateUrl: 'maniaSlot.html',
    controller: ManiaSlotController,
    bindings: {
        slot: '<'
    }
});

})(window.angular);
