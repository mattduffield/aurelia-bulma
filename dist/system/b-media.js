'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var customElement, _dec, _class, _class2, _temp, BMedia;

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
      _export('BMedia', BMedia = (_dec = customElement('b-media'), _dec(_class = (_temp = _class2 = function BMedia(element) {
        _classCallCheck(this, BMedia);

        this.element = element;
      }, _class2.inject = [Element], _temp)) || _class));

      _export('BMedia', BMedia);
    }
  };
});