Ext.define('PhillyTrafficCameras.controller.Roads', {
	extend: 'Ext.app.Controller',

	    config: {
	    stores:['Roads'] ,
	    control:{
	       'list':{
		    itemtap:'onListTap'
		}
	    }
},

	onListTap:function(list, index, target, record){
 		Ext.Viewport.down('image').setSrc(record.get('url'))
	}
	   
    });