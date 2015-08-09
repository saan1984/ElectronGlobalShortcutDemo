var application = require('app'),
    Shell = require('shell'),
    GlobalShortcut = require('global-shortcut');
application.on('ready', function() {
    GlobalShortcut.register('Alt+G', function() {
        Shell.openExternal("http://www.google.com");
    });
    GlobalShortcut.register('Alt+Y', function() {
        Shell.openExternal("http://www.yahoo.com");
    });
    GlobalShortcut.register('Alt+F', function() {
        Shell.openExternal("http://www.facebook.com");
    });
});
application.on('will-quit', function() {
    var isRegistered =  GlobalShortcut.isRegistered('Alt+G');
    if(isRegistered){
        GlobalShortcut.unregister('Alt+G');
    }
    // Unregister a single accelarator
    GlobalShortcut.unregister('Alt+G');
    // Unregister all accelarators.
    GlobalShortcut.unregisterAll();
});