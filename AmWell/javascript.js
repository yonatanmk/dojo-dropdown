require([
  "dojo/query",
  "dojo/dom-construct",
  "dojo/json",
  "dijit/form/Form",
  "dojox/form/CheckedMultiSelect",
  "dojo/dom-class",
  "dojo/parser",
  "dojo/domReady!"], function (query, construct, JSON, Form, CheckedMultiSelect, domClass) {
    let values = [];
    var form = construct.create('div', {
      'class': 'pad',
      style: 'bottom:0px'
    }, 'form');
    getStateValues = function () {
      values = form.get('value').state
      if (values[0]) {
        domClass.add('dijit_form_ComboButton_0_arrow', "dropdownButtonFilled")
      } else {
        domClass.remove('dijit_form_ComboButton_0_arrow', "dropdownButtonFilled")
      }
    };
    getCountryValues = function () {
      values = form.get('value').country
      if (values[0]) {
        domClass.add('dijit_form_ComboButton_1_arrow', "dropdownButtonFilled")
      } else {
        domClass.remove('dijit_form_ComboButton_1_arrow', "dropdownButtonFilled")
      }
    };
    new CheckedMultiSelect({
      class: 'dropdownMultiselect',
      dropDown: true,
      labelText: 'States',
      multiple: true,
      name: 'state',
      onChange: getStateValues,
      required: false
    }, "stateSelect");
    new CheckedMultiSelect({
      class: 'dropdownMultiselect',
      dropDown: true,
      labelText: 'Countries',
      multiple: true,
      name: 'country',
      onChange: getCountryValues,
      required: false
    }, "countrySelect");
    form = new Form({
      style: 'display:block'
    }, 'form');
    form.startup();
    var stateButton = query("#dijit_form_ComboButton_0_arrow")
    stateButton[0].innerHTML = '<div class="dropdownButtonContent"><p class="dropdownButtonText">State</p><div class="dropdownChevron"></div></div>'
    var countryButton = query("#dijit_form_ComboButton_1_arrow")
    countryButton[0].innerHTML = '<div class="dropdownButtonContent"><p class="dropdownButtonText">Country</p><div class="dropdownChevron"></div></div>'
});