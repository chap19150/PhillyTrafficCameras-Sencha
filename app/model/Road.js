Ext.define('PhillyTrafficCameras.model.Road', {
	extend : 'Ext.data.Model',

	config : {
		fields : [{
			name : 'road',
			type : 'auto',
			mapping : 'camera.road'
		}, {
			name : 'road_id',
			type : 'auto',
			mapping : 'camera.road_id'
		}, {
			name : 'url',
			mapping : 'camera.url'
		}, {
			name : 'name',
			mapping : 'camera.name'
		}]
	}
});
