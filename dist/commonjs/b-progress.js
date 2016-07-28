'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BProgress = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _class3, _temp;

var _aureliaFramework = require('aurelia-framework');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var BProgress = exports.BProgress = (_dec = (0, _aureliaFramework.customElement)('b-progress'), _dec2 = (0, _aureliaFramework.containerless)(), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = function BProgress(element) {
  _classCallCheck(this, BProgress);

  _initDefineProp(this, 'value', _descriptor, this);

  _initDefineProp(this, 'max', _descriptor2, this);

  this.element = element;
}, _class3.inject = [Element], _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'max', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class);