'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var customElement, _dec, _class, _class2, _temp, BNavLeft;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
    }],
    execute: function () {
      _export('BNavLeft', BNavLeft = (_dec = customElement('b-nav-left'), _dec(_class = (_temp = _class2 = function BNavLeft(element) {
        _classCallCheck(this, BNavLeft);

        this.element = element;
      }, _class2.inject = [Element], _temp)) || _class));

      _export('BNavLeft', BNavLeft);
    }
  };
});