'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var customElement, containerless, bindable, _dec, _dec2, _class, _class2, _temp, BRadio;

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
      _export('BRadio', BRadio = (_dec = customElement('b-radio-group'), _dec2 = containerless(), _dec(_class = _dec2(_class = (_temp = _class2 = function BRadio(element) {
        _classCallCheck(this, BRadio);

        this.element = element;
      }, _class2.inject = [Element], _temp)) || _class) || _class));

      _export('BRadio', BRadio);
    }
  };
});