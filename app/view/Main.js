Ext.define('PhillyTrafficCameras.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
	'Ext.dataview.List'
    ],
    config: {
		layout:'hbox',
                items: [
            {
              	 xtype:'list',
		flex:1,
		store:'Roads',
		itemTpl:'{name}'
            },
            {
                xtype: 'image',
		flex:2
            }
        ]
    }
});
