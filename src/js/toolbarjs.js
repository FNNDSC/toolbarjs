/**
 * This module implements a tool bar
 */

// define a new module
define(['jquery_ui'], function() {

  /**
   * Provide a namespace for the tool bar module
   *
   * @namespace
   */
   var toolbarjs = toolbarjs || {};

   /**
    * Class implementing the tool bar
    *
    * @constructor
    * @param {Object} toolbar's options with properties: contId, position.
    */
    toolbarjs.ToolBar = function(options) {

      this.version = 0.0;
      // toolbar container's ID
      this.contId = options.contId;
      // toolbar's css position object with possible properties top, bottom, left, right
      if (options.position) {
        this.position = options.position;
      } else {
        this.position = {};
      }
      // jQuery object for the bar's div element (tool bar container)
      this.jqToolBar = null;
      // associative array of button event handlers
      this.eventHandlers = null;
    };

    /**
     * Initialize the tool bar.
     */
     toolbarjs.ToolBar.prototype.init = function() {

       // return if tool bar already initialized
       if (this.jqToolBar) {
         return;
       }

       // set jQuery obj for the tool bar
       this.jqToolBar = $('#' + this.contId);

       // add the appropriate classes
       this.jqToolBar.addClass("view-toolbar");

       // initialize array of button event handlers
       this.eventHandlers = {};

       this.setPosition(this.position);
     };

    /**
     * Set a new css position for the toolbar.
     *
     * @param {Object} css position object with possible properties: "top", "bottom", "left" and "right".
     */
     toolbarjs.ToolBar.prototype.setPosition = function(pos) {
       var jqToolBar = this.jqToolBar;
       var t = "", r = "", b = "", l = "";

       if (pos) {

         if (pos.top) {
           this.position.top = pos.top;
           jqToolBar.css({ top: pos.top });
           t = ' - ' + pos.top;
         }

         if (pos.right) {
           this.position.right = pos.right;
           jqToolBar.css({ right: pos.right });
           r = ' - ' + pos.right;
         }

         if (pos.bottom) {
           this.position.bottom = pos.bottom;
           jqToolBar.css({ bottom: pos.bottom });
           b = ' - ' + pos.bottom;
         }

         if (pos.left) {
           this.position.left = pos.left;
           jqToolBar.css({ left: pos.left });
           l = ' - ' + pos.left;
         }

         if (r || l) {
           jqToolBar.css({ width: 'calc(100%' + r + l + ')' });
         }
       }
     };

    /**
     * Add a new button to the tool bar.
     *
     * @param {Object} object containing button's properties: id (HTML id), title, caption, onclick
     */
     toolbarjs.ToolBar.prototype.addButton = function(btnProps) {
       var jqToolBar = this.jqToolBar;

       // append a new button to the tool bar
       jqToolBar.append(
         '<button id="' + btnProps.id + '" class="view-toolbar-button" type="button" title="' +
          btnProps.title + '">' + btnProps.caption + '</button>'
       );

       this.eventHandlers[btnProps.id] = {};
       // set a click event handler if provided
       if (btnProps.onclick) {
         this.setButtonClickHandler(btnProps.id, btnProps.onclick);
       }
     };

    /**
     * Set a click event handler for a button.
     *
     * @param {String} HTML DOM identifier of the button.
     * @param {Function} event handler.
     */
     toolbarjs.ToolBar.prototype.setButtonClickHandler = function(btnId, handler) {

       if (btnId  && (btnId in this.eventHandlers) && handler) {
         this.eventHandlers[btnId].onclick = handler;

         $('#' + btnId).click(handler);
       }
     };

    /**
     * Hide a toolbar button.
     *
     * @param {String} HTML DOM identifier of the button.
     */
     toolbarjs.ToolBar.prototype.hideButton = function(btnId) {

       $('#' + btnId).css({display: 'none' });
     };

    /**
     * Show a toolbar button.
     *
     * @param {String} HTML DOM identifier of the button.
     */
     toolbarjs.ToolBar.prototype.showButton = function(btnId) {

       $('#' + btnId).css({display: '' });
     };

    /**
     * Remove event handlers and html interface.
     */
     toolbarjs.ToolBar.prototype.destroy = function() {

       this.eventHandlers = null;
       this.jqToolBar.empty();
       this.jqToolBar = null;
     };


    return toolbarjs;
  });
