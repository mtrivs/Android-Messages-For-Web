//
var storage = chrome.storage.sync;

storage.get('MessagesColor', function(result) {
  var theme = result.MessagesColor;
  if (typeof theme === "undefined") {
    // Save default theme to storage
    var v1 = 'MessagesColor';
    storage.set({
      [v1]: 'light' // Will evaluate v1 as property name
    });
    // Load Light Theme
    document.getElementById('theme_css').href = '../css/light.css';
  } else if (theme == "light") {
    // Load Light Theme
    document.getElementById('theme_css').href = '../css/light.css';
  } else {
    // Load Dark Theme
    document.getElementById('theme_css').href = '../css/dark.css';
  }
});
