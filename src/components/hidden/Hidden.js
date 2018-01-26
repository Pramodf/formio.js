import { BaseComponent } from '../base/Base';

export class HiddenComponent extends BaseComponent {
  static schema(...extend) {
    return BaseComponent.schema({
      type: 'hidden',
      inputType: 'hidden'
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Hidden',
      group: 'advanced',
      icon: 'fa fa-user-secret',
      weight: 80,
      documentation: 'http://help.form.io/userguide/#hidden',
      schema: HiddenComponent.schema()
    };
  }

  elementInfo() {
    let info = super.elementInfo();
    info.type = 'input';
    info.attr.type = 'hidden';
    info.changeEvent = 'change';
    return info;
  }

  createLabel(container) {
    return;
  }
}
