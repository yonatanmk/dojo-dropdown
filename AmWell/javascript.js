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
    var form, div = construct.create('div', {
      'class': 'pad',
      style: 'bottom:0px'
    }, 'form');
    getValues = function () {
      values = form.get('value').state
      const dropdownButton = query("#dijit_form_ComboButton_0_arrow")[0];
      if (values[0]) {
        domClass.add('dijit_form_ComboButton_0_arrow', "dropdownButtonFilled")
      } else {
        domClass.remove('dijit_form_ComboButton_0_arrow', "dropdownButtonFilled")
      }
    };
    new CheckedMultiSelect({
      id: 'dropdown-multiselect',
      dropDown: true,
      labelText: 'States',
      multiple: true,
      name: 'state',
      onChange: getValues,
      onClick: onClick,
      onShow: onShow,
      required: false
    }, "stateSelect");
    form = new Form({
      style: 'display:block'
    }, 'form');
    form.startup();
    var dropdownButton = query("#dijit_form_ComboButton_0_arrow")
    dropdownButton[0].innerHTML = '<div class="dropdownButtonContent"><p class="dropdownButtonText">Language</p><div class="dropdownChevron"></div></div>'
});