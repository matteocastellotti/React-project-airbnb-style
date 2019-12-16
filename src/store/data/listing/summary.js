import Immutable from 'immutable';

const Summary = new Immutable.Record({
    id: '',
    name: '',
	description: '',
	complete: false
});

export default Summary;