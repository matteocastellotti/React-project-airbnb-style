import Immutable from 'immutable';

const Comforts = new Immutable.Record({
    id: '',
    oven: false,
	fridge: false,
	dishwasher: false,
	securityDoor: false,
	parkingSpace: false,
	swimmingPool: false,
	terrace: false,
	balcony: false,
	elevator: false,
	hydromassage: false,
	eletricGate: false,
	fireplace: false,
	opticalFibre: false,
	videoDoorPhone: false,
	alarmSystem: false,
	satelliteDish: false,
	doubleExposure: false,
	complete: false
});

export default Comforts;