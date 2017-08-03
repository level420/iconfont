/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/**
 * This is the main application class of your custom application "iconfont"
 *
 * @asset(iconfont/*)
 */
qx.Class.define("iconfont.Application",
{
  extend : qx.application.Standalone,



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */
    main : function()
    {
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug"))
      {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }

      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */

      // Create a button
      var button1 = new qx.ui.form.Button("First Button", "@FontAwesome/f085");
      // Create a second button with a bigger icon
      var button2 = new qx.ui.form.Button("Second Button", "@FontAwesome32/f085");

      button2.getChildControl("icon").setTextColor("red");

      // Document is the application root
      var doc = this.getRoot();

      // Add the buttons to document at fixed coordinates
      doc.add(button1, {left: 100, top: 50});
      doc.add(button2, {left: 100, top: 100});


      // Add an event listener to each button
      button1.addListener("execute", function(e) {
        alert("Hello World!");
      });
	
      button2.addListener("execute", function(e) {
        alert("Hello World 2!");
      });
    }
  }
});
