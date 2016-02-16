require(['./config'], function() {
require(['toolbarjsPackage', 'jquery', 'jquery_ui'], function(toolbar, $) {
  // Entry point

  // toolbar options object
  var options = {
    container: 'toolbarcontainer',
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
        
        console.log('Button ' + this.innerHTML + ' clicked!');
      }
    });
  };
});
});
