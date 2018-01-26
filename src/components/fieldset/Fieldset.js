import { FormioComponents } from '../Components';

export class FieldsetComponent extends FormioComponents {
  static schema(...extend) {
    return FormioComponents.schema({
      label: 'Field Set',
      key: 'fieldSet',
      type: 'fieldset',
      legend: '',
      components: [],
      input: false
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Field Set',
      icon: 'fa fa-th-large',
      group: 'layout',
      documentation: 'http://help.form.io/userguide/#fieldset',
      weight: 20,
      schema: FieldsetComponent.schema()
    };
  }

  get className() {
    return 'form-group ' + super.className;
  }

  build() {
    this.createElement();
    if (this.component.legend) {
      let legend = this.ce('legend');
      legend.appendChild(this.text(this.component.legend));
      this.createTooltip(legend);
      this.element.appendChild(legend);
    }
    this.addComponents();
  }
}
