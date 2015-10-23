/**
 * This module implements the toolbar's specification (tests).
 *
 */

define(['toolbarjs'], function(toolbarjs) {

  describe('toolbarjs', function() {
    var toolBar;

    // Append container div
    $(document.body).append('<div id="toolbarcontainer"></div>');


    beforeEach(function() {
      toolBar = new toolbarjs.ToolBar('toolbarcontainer');
      toolBar.init();
    });

    afterEach(function() {
      toolBar.destroy();
    });

    it('toolbarjs.ToolBar.prototype.addButton({id: newId, caption: "New"}) should add button with caption "New"',
      function () {
        toolBar.addButton({id: 'newId', caption: 'New'});
        expect(document.getElementById('newId').innerHTML).toEqual('New');
      }
    );

  });
});
