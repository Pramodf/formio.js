import _each from 'lodash/each';
import { FormioComponents } from '../Components';

export class ColumnsComponent extends FormioComponents {
  static schema(...extend) {
    return FormioComponents.schema({
      label: 'Columns',
      key: 'columns',
      type: 'columns',
      columns: [
        {components: [], width: 6, offset: 0, push: 0, pull: 0},
        {components: [], width: 6, offset: 0, push: 0, pull: 0}
      ],
      clearOnHide: false,
      input: false,
      tableView: false
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Columns',
      icon: 'fa fa-columns',
      group: 'layout',
      documentation: 'http://help.form.io/userguide/#columns',
      weight: 10,
      schema: ColumnsComponent.schema()
    };
  }

  get className() {
    return 'row ' + super.className;
  }
  addComponents() {
    let container = this.getContainer();
    _each(this.component.columns, (column) => {
      column.type = 'column';
      this.addComponent(column, container, this.data);
    });
  }
}
