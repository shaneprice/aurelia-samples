define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
            this.selectOptions = [{ key: '1', text: 'as' }, { key: '2', text: 'asdf' }, { key: '3', text: 'addsds' }];
        }
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", './environment'], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        longStackTraces: environment_1.default.debug,
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('resources/elements/custom-select',["require", "exports", 'jquery', 'selectize'], function (require, exports, $) {
    "use strict";
    var CustomSelect = (function () {
        function CustomSelect(element) {
            console.log("constructor");
            this.element = element;
            this.options = [
                {
                    id: "1",
                    value: "hello title"
                },
                {
                    id: "2",
                    value: "hello title 2"
                }
            ];
        }
        CustomSelect.prototype.created = function () {
            console.log(".....created");
        };
        CustomSelect.prototype.bind = function () {
            console.log("--------binded");
        };
        CustomSelect.prototype.attached = function () {
            $("#selectize").selectize({
                valueField: 'id',
                sortField: 'value',
                labelField: 'value',
                delimiter: ',',
                options: this.options,
                render: {
                    option: function (item, escape) {
                        debugger;
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
        };
        return CustomSelect;
    }());
    exports.CustomSelect = CustomSelect;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"bootstrap/css/bootstrap.css\"></require>\n      <require from=\"selectize/css/selectize.default.css\"></require>\n  <!--<h1>${message}</h1>-->\n  <require from=\"resources/elements/custom-select\"></require>\n  <custom-select></custom-select>\n</template>\n"; });
define('text!resources/elements/custom-select.html', ['module'], function(module) { module.exports = "<template>\n  <!--<select value.bind=\"selectedValue\" id=\"selectize\">\n    <option value.bind=\"null\">- Please select -</option>\n    <option repeat.for=\"s of options\" value.bind=\"s.id\">${s.value}</option>\n  </select>-->\n  <input value.bind=\"selectedValue\" id=\"selectize\"/>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map