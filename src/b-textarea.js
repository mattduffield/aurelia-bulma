import {inject, customElement, containerless, bindable} from 'aurelia-framework';

var TextareaID = 0;

@customElement('b-textarea')
@inject(Element)
@containerless()
export class BTextarea {
  @bindable controlClass = '';
  @bindable label;
  @bindable labelClass = '';
  @bindable inputClass = '';
  @bindable placeholder;
  @bindable value;
  @bindable name;

  constructor(element) {
    this.id = 'i' + TextareaID++;
    this.element = element;
  }

  get idTag() {
    return '#' + this.id;
  }


  // attached() {
  //   this.handleDisabledAttribute();
  // }
  // handleDisabledAttribute() {
  //   var ctl = this.getControl();
  //   var att = this.element.getAttribute("disabled");
  //   if (att && (att === true || att === "true")) {
  //     if (ctl) {
  //       ctl[0].setAttribute("disabled", "true");
  //     }      
  //   }    
  // }

  // getControl() {
  //   var ctl = this.element.querySelector("textarea");
  //   return ctl;    
  // }

}