'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var customElement, _dec, _class, _class2, _temp, BTitle;

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
      _export('BTitle', BTitle = (_dec = customElement('b-title'), _dec(_class = (_temp = _class2 = function BTitle(element) {
        _classCallCheck(this, BTitle);

        this.element = element;
      }, _class2.inject = [Element], _temp)) || _class));

      _export('BTitle', BTitle);
    }
  };
});