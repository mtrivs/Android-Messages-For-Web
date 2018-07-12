
// An easy way to refer to our app window
var frame = chrome.app.window.current();

// Tell the app window to minimize to the shelf
function minimize() {
  frame.minimize();
}

/* Maximize the app window.  If the app window is already maximized, return the
   window to the size it was before it was last maximized */
function maximize() {
  frame.isMaximized() || frame.isFullscreen() ? frame.restore() : frame.maximize();
  frame.focus();
}

// Tell the app window to close
function exit() {
  frame.close();
}

var storage = chrome.storage.sync;
/* When the user clicks the theme button, toggle between the light and dark themes */
function theme() {
  // Read current theme color
  storage.get('MessagesColor', function(result) {
  var results = result.MessagesColor;
  var v22 = 'MessagesColor';
  // If theme variable is currently not set, define the default color
  if (results == "undefined") {
    // Save default theme to storage
    storage.set({
      [v22]: 'light' // Will evaluate v22 as property name
    });
  } else if (results == "dark") {
    // set theme varibale to light in storage
    storage.set({
      [v22]: 'light' // Will evaluate v22 as property name
    });
    document.getElementById('theme_css').href = '../css/light.css';
  } else {
    // set theme variable to dark in storage
    storage.set({
      [v22]: 'dark' // Will evaluate v22 as property name
    });
        document.getElementById('theme_css').href = '../css/dark.css';
  // Reload CSS to new theme color
  }
  });
}


// Listen for clicks on the titlebar buttons
document.getElementById("minimize").addEventListener("click", minimize);
document.getElementById("maximize").addEventListener("click", maximize);
document.getElementById("exit").addEventListener("click", exit);
document.getElementById("theme").addEventListener("click", theme);