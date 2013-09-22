Ext.define('PhillyTrafficCameras.store.Roads', {
	extend : 'Ext.data.Store',
	requires : 'PhillyTrafficCameras.model.Road',

	config : {
		autoLoad : true,
		model : 'PhillyTrafficCameras.model.Road',
		proxy : {
			type : 'ajax',
			url : 'cameras.json',
			reader : {
				type : 'json',
				rootProperty : 'cameras'
			}
		}
	}
}); 