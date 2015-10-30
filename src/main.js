require.config({
  baseUrl: 'js/components',
  paths: {
    // The left side is the module ID, the right side is the path to the file relative
    // to baseUrl (which is in turn relative to the directory of this config script).
    // Also, the path should NOT include the '.js' file extension.
    // This example tries to load jQuery from Google's CDN first and if failure then falls
    // back to the local jQuery at jquery/dist/jquery.min.js relative to the baseUrl.
    //
    jquery: ['https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min', 'jquery/dist/jquery.min'],
    jquery_ui: ['https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min', 'jquery-ui/jquery-ui.min'],
    toolbarjs: '../toolbarjs'
  }
});


require(['toolbarjs'], function(toolbar) {
  // Entry point

  // toolbar options object
  var options = {
    contId: 'toolbarcontainer',
    position: {
      top: '5px',
      right: 0
    }
  };

  // Create a toolbar.
  var toolBar = new toolbar.ToolBar(options);
  toolBar.init();

  var idInpt = document.getElementById('id');
  var titleInpt = document.getElementById('title');
  var captionInpt = document.getElementById('caption');

  // Event handler for the directory loader button
  var addBtn = document.getElementById('addbtn');

  addBtn.onclick = function() {

    toolBar.addButton({
      id: idInpt.value,
      title: titleInpt.value,
      caption: captionInpt.value,
      onclick: function() {
        console.log('Button ' + captionInpt.value + ' clicked!');
      }
    })
  }

});
