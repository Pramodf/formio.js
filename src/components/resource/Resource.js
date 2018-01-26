import { SelectComponent } from '../select/Select';

export class ResourceComponent extends SelectComponent {
  static schema(...extend) {
    return SelectComponent.schema({
      type: 'resource',
      label: 'Resource',
      key: 'resource',
      dataSrc: 'resource',
      resource: '',
      project: '',
      template: '<span>{{ item.data }}</span>'
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Resource',
      group: 'advanced',
      icon: 'fa fa-files-o',
      weight: 90,
      documentation: 'http://help.form.io/userguide/#resource',
      schema: ResourceComponent.schema()
    };
  }

  constructor(component, options, data) {
    super(component, options, data);
    this.component.dataSrc = 'resource';
    this.component.data = {
      resource: this.component.resource
    };
  }

  /**
   * Creates a new button to add a resource instance
   * @returns {HTMLElement} - The "Add Resource" button html element.
   */
  addButton() {
    let addButton = this.ce('a', {
      class: 'btn btn-primary'
    });
    let addIcon   = this.ce('i', {
      class: this.iconClass('plus')
    });
    addButton.appendChild(addIcon);
    addButton.appendChild(this.text(' ' + (this.component.addResourceLabel || 'Add Resource')));

    this.addEventListener(addButton, 'click', (event) => {
      event.preventDefault();
      let dialog = this.createModal(this.component.addResourceLabel || 'Add Resource');
      let formioForm = this.ce('div');
      dialog.body.appendChild(formioForm);
      var form = new FormioForm(formioForm);
		  form.on('submit', (submission) => {
        this.setValue(submission);
        dialog.close();
		  });
      form.src = Formio.getBaseUrl() + '/form/' + this.component.resource;
    });

    return addButton;
  }

  addInput(input, container) {
    // Add Resource button
    if (this.component.addResource) {
      var table    = this.ce('table', {
        class: 'table table-bordered'
      });
      var template = '<tbody>' +
                       '<tr>' +
                         '<td id="select">' +
                         '</td>' +
                       '</tr>' +
                       '<tr>' +
                         '<td id="button" colspan="2">' +
                         '</td>' +
                       '</tr>' +
                     '</tbody>';
      container.appendChild(table);
      table.innerHTML = template;
      table.querySelector("#button").appendChild(this.addButton());
      super.addInput(input, table.querySelector("#select"));
    }
    else {
      super.addInput(input, container);
    }
  }
}
