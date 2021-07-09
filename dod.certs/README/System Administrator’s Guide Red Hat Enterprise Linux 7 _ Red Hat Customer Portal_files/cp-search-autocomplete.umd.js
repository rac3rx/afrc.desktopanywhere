(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('../../../@patternfly/pfelement/dist/pfelement.umd'), require('../../../@patternfly/pfe-autocomplete/dist/pfe-autocomplete.umd')) :
  typeof define === 'function' && define.amd ? define(['../../../@patternfly/pfelement/dist/pfelement.umd', '../../../@patternfly/pfe-autocomplete/dist/pfe-autocomplete.umd'], factory) :
  (global.CpSearchAutocomplete = factory(global.PFElement));
}(this, (function (PFElement) { 'use strict';

  PFElement = PFElement && PFElement.hasOwnProperty('default') ? PFElement['default'] : PFElement;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  /*!
   * PatternFly Elements: CpSearchAutocomplete 0.0.5
   * @license
   * Copyright 2020 Red Hat, Inc.
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   * 
  */

  // /node_modules
  //   @patternfly
  //     pfelement
  //       dist
  //         pfelement.js
  //   @cpelements
  //     cp-search-autocomplete
  //       dist
  //         cp-search-autocomplete.js

  var CpSearchAutocomplete = function (_PFElement) {
    inherits(CpSearchAutocomplete, _PFElement);
    createClass(CpSearchAutocomplete, [{
      key: "html",
      get: function get$$1() {
        return "<style>:host{display:block}:host([hidden]){display:none}pfe-autocomplete input{--pfe-theme--ui--element--size:17px}pfe-autocomplete ul li:hover{color:#252525;background-color:#ececec}\n/*# sourceMappingURL=cp-search-autocomplete.min.css.map */\n</style><pfe-autocomplete id=\"static\" debounce=\"300\"> \n    <input placeholder=\"Enter your search term\">\n</pfe-autocomplete>";
      }
    }, {
      key: "schemaUrl",
      get: function get$$1() {
        return "cp-search-autocomplete.json";
      }
    }, {
      key: "templateUrl",
      get: function get$$1() {
        return "cp-search-autocomplete.html";
      }
    }, {
      key: "styleUrl",
      get: function get$$1() {
        return "cp-search-autocomplete.scss";
      }
    }, {
      key: "numItems",
      get: function get$$1() {
        return this.getAttribute("num-items") || 5;
      }
    }], [{
      key: "version",
      get: function get$$1() {
        return "0.0.5";
      }
    }, {
      key: "properties",
      get: function get$$1() {
        return { "location": { "title": "Location", "type": "string", "enum": [], "default": "", "prefixed": true } };
      }
    }, {
      key: "slots",
      get: function get$$1() {
        return { "default": { "title": "Default slot", "type": "array", "namedSlot": false, "items": { "oneOf": [{ "$ref": "raw" }] } } };
      }
    }, {
      key: "tag",
      get: function get$$1() {
        return "cp-search-autocomplete";
      }
    }, {
      key: "PfeType",
      get: function get$$1() {
        return PFElement.PfeTypes.Container;
      }
    }, {
      key: "observedAttributes",
      get: function get$$1() {
        return ["pfe-location", "path", "query"];
      }
    }]);

    function CpSearchAutocomplete() {
      classCallCheck(this, CpSearchAutocomplete);

      var _this = possibleConstructorReturn(this, (CpSearchAutocomplete.__proto__ || Object.getPrototypeOf(CpSearchAutocomplete)).call(this, CpSearchAutocomplete, { type: CpSearchAutocomplete.PfeType }));

      _this.path = _this.getAttribute("path");
      _this._input = _this.shadowRoot.querySelector("input");
      _this._data = null;

      _this._searchAutocomplete = _this.shadowRoot.querySelector("pfe-autocomplete");

      _this._searchAutocomplete.addEventListener("pfe-search-event", function (e) {
        return console.log(e.detail.searchValue);
      });
      return _this;
    }

    createClass(CpSearchAutocomplete, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        get(CpSearchAutocomplete.prototype.__proto__ || Object.getPrototypeOf(CpSearchAutocomplete.prototype), "connectedCallback", this).call(this);

        this._fetchData();
      }

      // Process the attribute change

    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attr, oldValue, newValue) {
        get(CpSearchAutocomplete.prototype.__proto__ || Object.getPrototypeOf(CpSearchAutocomplete.prototype), "attributeChangedCallback", this).call(this, attr, oldValue, newValue);
        if (attr === "query") {
          this._input.value = newValue;
        }
      }
    }, {
      key: "_fetchData",
      value: function _fetchData() {
        var _this2 = this;

        var path = this.getAttribute("path");

        if (!path) {
          return;
        }

        var xhr = new XMLHttpRequest();

        xhr.onload = function () {
          if (xhr.status === 404) {
            console.log("No data available");
          } else {
            var response = JSON.parse(xhr.responseText);
            _this2._data = response;
            _this2._initAutocomplete();
          }
        };

        xhr.open("GET", this.path, true);
        xhr.send();
      }
    }, {
      key: "_initAutocomplete",
      value: function _initAutocomplete() {
        var _this3 = this;

        this._searchAutocomplete.autocompleteRequest = function (params, callback) {
          var regx = new RegExp("^" + params.query, "i");
          var items = _this3._data;
          var returnArr = items.filter(function (item) {
            return regx.test(item);
          }).slice(0, _this3.numItems);

          callback(returnArr);
        };
      }
    }]);
    return CpSearchAutocomplete;
  }(PFElement);

  PFElement.create(CpSearchAutocomplete);

  return CpSearchAutocomplete;

})));
//# sourceMappingURL=cp-search-autocomplete.umd.js.map
