var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

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

import { inject, customElement, containerless, bindable } from 'aurelia-framework';

var InputID = 0;

export let BInput = (_dec = customElement('b-input'), _dec2 = inject(Element), _dec3 = containerless(), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class BInput {

  constructor(element) {
    _initDefineProp(this, 'controlClass', _descriptor, this);

    _initDefineProp(this, 'label', _descriptor2, this);

    _initDefineProp(this, 'labelClass', _descriptor3, this);

    _initDefineProp(this, 'inputClass', _descriptor4, this);

    _initDefineProp(this, 'placeholder', _descriptor5, this);

    _initDefineProp(this, 'value', _descriptor6, this);

    _initDefineProp(this, 'name', _descriptor7, this);

    this.id = 'i' + InputID++;
    this.element = element;
  }

  get idTag() {
    return '#' + this.id;
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'controlClass', [bindable], {
  enumerable: true,
  initializer: function () {
    return '';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'label', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'labelClass', [bindable], {
  enumerable: true,
  initializer: function () {
    return '';
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'inputClass', [bindable], {
  enumerable: true,
  initializer: function () {
    return '';
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'value', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'name', [bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class);