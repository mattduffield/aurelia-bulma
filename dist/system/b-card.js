'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var customElement, _dec, _class, _class2, _temp, BCard;

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
      _export('BCard', BCard = (_dec = customElement('b-card'), _dec(_class = (_temp = _class2 = function BCard(element) {
        _classCallCheck(this, BCard);

        this.element = element;
      }, _class2.inject = [Element], _temp)) || _class));

      _export('BCard', BCard);
    }
  };
});