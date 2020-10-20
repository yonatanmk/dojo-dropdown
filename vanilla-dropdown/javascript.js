// CheckboxMenu "class" constructor
function CheckboxMenu(button) {
  this.button = button
  // Get corresponding menu
  this.menuId = this.button.getAttribute('data-opens-menu')
  this.menu = document.getElementById(this.menuId)
  if (!this.menu) {
    throw new Error('Element `#' + this.menuId + '` not found.')
  }
  this.menu.hidden = true
  // Handle button click
  this.button.addEventListener('click', this.toggle.bind(this))

  this.expandIcon = document.getElementById('expand-icon')
}

// Open method
CheckboxMenu.prototype.open = function () {
  this.menu.hidden = false
  this.button.classList.add("expanded");
  this.outsideClick = function (e) {
    if (!this.menu.contains(e.target) && !this.button.contains(e.target)) {
      this.close()
      document.removeEventListener('click', this.outsideClick.bind(this))
    }
  }.bind(this)
  document.addEventListener('click', this.outsideClick.bind(this))
}

// Close method
CheckboxMenu.prototype.close = function () {
  this.menu.hidden = true
  this.button.classList.remove("expanded");
}

// Toggle method
CheckboxMenu.prototype.toggle = function () {
  return this.menu.hidden ? this.open():  this.close()
}

// get a menu button
const statesMenuButton = document.querySelector('#states-menu-button')

// Make it a menu button
const statesCheckboxMenu = new CheckboxMenu(statesMenuButton)