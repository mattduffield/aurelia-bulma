'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var customElement, containerless, _dec, _dec2, _class, _class2, _temp, BTileArticleBox;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      containerless = _aureliaFramework.containerless;
    }],
    execute: function () {
      _export('BTileArticleBox', BTileArticleBox = (_dec = customElement('b-tile-article-box'), _dec2 = containerless(), _dec(_class = _dec2(_class = (_temp = _class2 = function BTileArticleBox(element) {
        _classCallCheck(this, BTileArticleBox);

        this.element = element;
      }, _class2.inject = [Element], _temp)) || _class) || _class));

      _export('BTileArticleBox', BTileArticleBox);
    }
  };
});