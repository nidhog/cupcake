var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
/*
var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Yohoohoo",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});
*/

var { ToggleButton } = require("sdk/ui/button/toggle");

var button = ToggleButton({
    id: "cupcake-activation",
    label: "Activate Cupcake",
	icon: {
		"16": "./icon-16.png",
		"24": "./icon-24.png",
		"32": "./icon-32.png",
		"64": "./icon-64.png"
	},
    onChange: changed,
	/*function(state) {
      console.log(state.label + " checked state: " + state.checked);
	}
    badge: 0,
    badgeColor: "#00AAAA"*/
  });
  
function changed(state) {
  //button.badge = state.badge + 1;
  if (state.checked) {
    button.label = "Deactivate Cupcakes";
  }
  else {
    button.label = "Activate Cupcakes";
  }
}
function handleClick(state) {
  tabs.open("http://medium.com/@nidhog");
}

button.click();