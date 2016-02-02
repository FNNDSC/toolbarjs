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
    * @param {Object} toolbar's options with properties:
    *   -container: toolbar's container's DOM id or DOM object
    *   -position: toolbar's css position object with possible properties top, bottom, left, right
    */
    toolbarjs.ToolBar = function(options) {

      this.version = 0.0;

      // toolbar's container
      if (typeof options.container === 'string') {

        // a DOM id was passed
        this.container = $('#' + options.container);

      } else {

        // a DOM object was passed
        this.container = $(options.container);
      }

      // toolbar's css position object with possible properties top, bottom, left, right
      if (options.position) {
        this.position = options.position;
      } else {
        this.position = {};
      }

      // associative array of button objects with the following properties:
      //  -button: jquery object for the button element
      //  -label: jquery object for a label element associated with the button
      this.buttons = null;
    };

    /**
     * Initialize the tool bar.
     */
     toolbarjs.ToolBar.prototype.init = function() {

       // add the appropriate classes
       this.container.addClass("view-toolbar");

       // initialize array of buttons
       this.buttons = {};

       this.setPosition(this.position);
     };

    /**
     * Set a new css position for the toolbar.
     *
     * @param {Object} css position object with possible properties: "top", "bottom", "left" and "right".
     */
     toolbarjs.ToolBar.prototype.setPosition = function(pos) {
       var container = this.container;
       var t = "", r = "", b = "", l = "";

       if (pos) {

         if (pos.top) {
           this.position.top = pos.top;
           container.css({ top: pos.top });
           t = ' - ' + pos.top;
         }

         if (pos.right) {
           this.position.right = pos.right;
           container.css({ right: pos.right });
           r = ' - ' + pos.right;
         }

         if (pos.bottom) {
           this.position.bottom = pos.bottom;
           container.css({ bottom: pos.bottom });
           b = ' - ' + pos.bottom;
         }

         if (pos.left) {
           this.position.left = pos.left;
           container.css({ left: pos.left });
           l = ' - ' + pos.left;
         }

         if (r || l) {
           container.css({ width: 'calc(100%' + r + l + ')' });
         }
       }
     };

    /**
     * Add a new button to the tool bar.
     *
     * @param {Object} object containing button's properties: id string (required), title,
     * caption, onclick, label.
     */
     toolbarjs.ToolBar.prototype.addButton = function(btnProps) {

       var btnObj = {};

       this.buttons[btnProps.id] = btnObj;

       if('label' in btnProps) {

        // append the button's label to the toolbar's DOM
         btnObj.label = $('<span class="label">' + btnProps.label + '</span>');
         this.container.append(btnObj.label);
       }

       btnObj.button = $('<button class="view-toolbar-button" type="button" title="' +
        btnProps.title + '">' + btnProps.caption + '</button>');

       // append the new button to the toolbar's DOM
       this.container.append(btnObj.button);

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
       var self = this;

       if (btnId && handler) {

         var btn = self.getButton(btnId);

         if(btn) {

           btn.button.click( function() {

             if(!$(this).hasClass('disabled')) {

               handler();
             }
           });
         }
       }
     };


   /**
    * Get a button's object.
    *
    * @param {String} button's identifier.
    * @return {Object} button object or null.
    */
    toolbarjs.ToolBar.prototype.getButton = function(btnId) {

      if (btnId in this.buttons) {

        return this.buttons[btnId];
      }

      return null;
    };

    /**
     * Hide a toolbar button.
     *
     * @param {String}  button's identifier.
     */
     toolbarjs.ToolBar.prototype.hideButton = function(btnId) {

       var btn = this.getButton(btnId);

       if (btn) {

         btn.button.css({display: 'none' });
       }
     };

    /**
     * Show a toolbar button.
     *
     * @param {String} button's identifier.
     */
     toolbarjs.ToolBar.prototype.showButton = function(btnId) {

       var btn = this.getButton(btnId);

       if (btn) {

         btn.button.css({display: '' });
       }
     };

     /**
     * Disable a toolbar button.
     *
     * @param {String} button's identifier.
     */
     toolbarjs.ToolBar.prototype.disableButton = function(btnId) {

       var btn = this.getButton(btnId);

       if (btn) {

         btn.button.addClass('disabled');
       }
     };

     /**
     * Enable a toolbar button.
     *
     * @param {String} button's identifier.
     */
     toolbarjs.ToolBar.prototype.enableButton = function(btnId) {

       var btn = this.getButton(btnId);

       if (btn) {

         btn.button.removeClass('disabled');
       }
     };

    /**
     * Remove event handlers and html interface.
     */
     toolbarjs.ToolBar.prototype.destroy = function() {

       this.buttons = null;
       this.container.empty();
       this.container = null;
     };


    return toolbarjs;
  });
