import Immutable from 'immutable';

const Details = new Immutable.Record({
    id: '',
    walkableArea: 0,
	commercialArea: 0,
	bathroom: 0,
	bedroom: 0,
	local: 0,
	furnished: '',
	energeticClass: '',
	listingState: '',
	floor: '',
	garage: '',
	airConditionerType: '',
	kitchenFurnished: '',
	garden: '',
	heatingType: '',
	complete: false
});

export default Details;