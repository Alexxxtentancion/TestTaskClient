/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'Grid',

    extend: 'Grid.Application',
    mainView: 'main.Main',
    requires: [
        'Grid.view.grid.Grid',
        'Grid.view.main.Main'
    ],
    autoCreateViewport: 'Grid.view.main.Main'
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to Grid.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
