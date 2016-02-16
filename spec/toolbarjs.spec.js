/**
 * This module implements the toolbar's specification (tests).
 *
 */

define(['toolbarjsPackage', 'jquery'], function(toolbarjs, $) {

  describe('toolbarjs', function() {
    var toolBar;
    // toolbar options object
    var options = {
      container: 'toolbarcontainer',
      position: {
        top: '5px',
        right: 0
      }
    };

    // Append container div
    $(document.body).append('<div id="toolbarcontainer"></div>');

    beforeEach(function() {
      toolBar = new toolbarjs.ToolBar(options);
      toolBar.init();
    });

    afterEach(function() {
      toolBar.destroy();
    });

    it('toolbarjs.ToolBar.prototype.addButton({id: newId, caption: "New"}) should add button with caption "New"',
      function() {
        toolBar.addButton({id: 'newId', caption: 'New'});
        expect(toolBar.getButton('newId').button[0].innerHTML).toEqual('New');
      }
    );

  });
});
