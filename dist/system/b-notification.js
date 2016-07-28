'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var customElement, containerless, bindable, _dec, _dec2, _class, _class2, _temp, BNotification;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      containerless = _aureliaFramework.containerless;
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      _export('BNotification', BNotification = (_dec = customElement('b-notification'), _dec2 = containerless(), _dec(_class = _dec2(_class = (_temp = _class2 = function BNotification(element) {
        _classCallCheck(this, BNotification);

        this.element = element;
      }, _class2.inject = [Element], _temp)) || _class) || _class));

      _export('BNotification', BNotification);
    }
  };
});