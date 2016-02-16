require.config({
  baseUrl: '../',
  paths: {
    // The left side is the module ID, the right side is the path to the file relative
    // to baseUrl (which is in turn relative to the directory of this config script).
    // Also, the path should NOT include the '.js' file extension.
    // This example tries to load jQuery from Google's CDN first and if failure then falls
    // back to the local jQuery at jquery/dist/jquery.min.js relative to the baseUrl.
    //
    jquery: ['https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min', 'jquery/dist/jquery.min'],
    jquery_ui: ['https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min', 'jquery-ui/jquery-ui.min']
  },
  packages:[
    {
    name: 'toolbarjsPackage', // used for mapping...
    location: 'src',   // relative to base url
    main: 'js/toolbarjs'
  }
  ]
});


