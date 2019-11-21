define([
    'ko',
    'underscore',
    'mageUtils',
    'uiElement'
], function (ko, _, utils, Element) {
    'use strict';

    var mixin = {
        defaults: {
            template: 'SK_BackendUiHideCustomPerPage/grid/paging/sizes',
            excludedOptions: ['200'],
        },
        
        initialize: function () {
            this._super();

            this.excludedOptions.forEach(function (exclusion) {
                delete this.options[exclusion];
            }, this);

            this.updateArray();

            return this;
        }
    };

    return function (target) {
        return target.extend(mixin);
    };
});
