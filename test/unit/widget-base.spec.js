import './setup';
import {WidgetBase} from 'src/common/widget-base';
import {Util} from 'src/common/util';
import {initialize} from 'aurelia-pal-browser';
import {DOM} from 'aurelia-pal';
import 'ej.checkbox.min';
describe('Events', () => {
  let widgetBase;
  let  element:Element;
  beforeEach(() => {
    initialize();
    widgetBase = new WidgetBase();
    widgetBase.controlProperties = ['name', 'checked'];
    widgetBase.twoWays = ['checked'];
    widgetBase.controlName = 'ejCheckBox';
    widgetBase.ejName = 'Name1';
    widgetBase.ejChecked = true;
    widgetBase.util = new Util();
    element = DOM.createElement('input');
    element.setAttribute('id', 'checkbox');
    element.setAttribute('ej-on-change.delegate', '');
    widgetBase.createWidget({element: element});
  });
  it('Widget created properly', ()=>{
    let result = widgetBase.widget.pluginName;
    expect(result).toBe('ejCheckBox');
  });
  it('Widget model values set properly', ()=>{
    let result = widgetBase.widget.model.name;
    expect(result).toBe(widgetBase.ejName);
  });
  it('Widget event binded properly', ()=>{
    let result = widgetBase.util.hasValue(widgetBase.widget.model.change);
    expect(result).toBe(true);
  });
  it('Property changed changes model value properly -> One Way', ()=>{
    widgetBase.propertyChanged('ejName', 'NameChanged', 'Testtext');
    expect(widgetBase.widget.model.name).toBe('NameChanged');
  });
  it('Two way binding Works Properly', ()=>{
    expect(widgetBase.ejChecked).toBe(true);
    element.click();
    expect(widgetBase.ejChecked).toBe(false);
  });
});
