require([
  "dojo/query",
  "dojo/dom-construct",
  "dojo/json",
  "dijit/form/Form",
  "dojox/form/CheckedMultiSelect",
  "dojo/parser",
  "dojo/domReady!"], function (query, construct, JSON, Form, CheckedMultiSelect) {
    let values = [];
    var form, div = construct.create('div', {
      'class': 'pad',
      style: 'bottom:0px'
    }, 'form');
    getValues = function () {
      console.log(form.get('value'))
      values = form.get('value').state
      console.log(values)
      const dropdownButton = query("#dijit_form_ComboButton_0_arrow")[0];
      const classList = dropdownButton.classList;
      const style = dropdownButton.style
      if (values[0]) {
        style['background'] = "#1774cc"
        style['color'] = "white"
        style['border'] = "2px solid #1774cc"
        // dropdownButton.classList = [...dropdownButton.classList, "dropdownButtonFilled"]
      } else {
        style['background'] = ""
        style['color'] = ""
        style['border'] = ""
      }
    };
    onClick = function () {
      console.log('On Click')
    };
    onShow = function () {
      console.log('On Show')
    }
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
    console.log('DORPDOWN')
    console.log(dropdownButton)
    dropdownButton[0].innerHTML = '<div>Languages</div>'
});