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
    getValues = (id, label) => () => {
      values = form.get('value')[label]
      if (values[0]) {
        domClass.add(id, "dropdownButtonFilled")
      } else {
        domClass.remove(id, "dropdownButtonFilled")
      }
    };
    new CheckedMultiSelect({
      class: 'dropdownMultiselect',
      dropDown: true,
      labelText: 'States',
      multiple: true,
      name: 'state',
      onChange: getValues('dijit_form_ComboButton_0_arrow', 'state'),
      required: false
    }, "stateSelect");
    new CheckedMultiSelect({
      class: 'dropdownMultiselect',
      dropDown: true,
      labelText: 'Countries',
      multiple: true,
      name: 'country',
      onChange: getValues('dijit_form_ComboButton_1_arrow', 'country'),
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