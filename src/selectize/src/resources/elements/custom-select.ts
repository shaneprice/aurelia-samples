import { customElement, bindable, inject, bindingMode, decorators} from 'aurelia-framework';
import * as $ from 'jquery';
import 'selectize';

export class CustomSelect {

  element;
  options;
  constructor(element) {
    console.log("constructor");
    this.element = element;
    this.options = [
      {
        id:"1",
        value:"hello title"
      },
       {
        id:"2",
        value:"hello title 2"
      }
    ]
  }

  created() {
    console.log(".....created");
  }

  bind() {
    console.log("--------binded");
  }

  attached() {
    
      $("#selectize").selectize({
            valueField :'id',
            sortField: 'value',
            labelField:'value',
             delimiter: ',',
            options : this.options,
           render: {
                    option: (item,escape) => {
                        debugger
                        return '<div>' +
                            '<span class="title">' +
                                '<span class="name">' + escape(item.id) + escape(item.value) + '</span>' +
                                '<span class="by">' + escape(item.value) + '</span>' +
                            '</span>' +
                        '</div>';
                    }
                },

        });
        
     console.log("--------attached");
  }


}