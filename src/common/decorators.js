import {BindableProperty, HtmlBehaviorResource} from 'aurelia-templating';
import {Container} from 'aurelia-dependency-injection';
import {metadata} from 'aurelia-metadata';
import {Util} from './util';

export function generateBindables(controlName, inputs) {
  return function(target, key, descriptor) {
    let behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
    let container = (Container.instance || new Container());
    let util = container.get(Util);
    let len = inputs.length;
    target.prototype.controlName = controlName;
    if (len) {
      target.prototype.controlProperties = inputs;
      for (let i = 0; i < len; i++) {
        let option = inputs[i];
        let nameOrConfigOrTarget = {
          name: util.getBindablePropertyName(option)
        };
        let prop = new BindableProperty(nameOrConfigOrTarget);
        prop.registerWith(target, behaviorResource, descriptor);
      }
    }
  };
}