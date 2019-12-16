import Immutable from 'immutable';

const Type = new Immutable.Record({
    id: '',
    category: '',
	tipology: '',
    contract: '',
    propertyType: '',
	complete: false
});

export default Type;