import Immutable from 'immutable';

const Place = new Immutable.Record({
    id: '',
    country: '',
	state: '',
	city: '',
	street: '',
	zipCode: '',
	latitude: '',
	longitude: '',
	complete: false
});

export default Place;