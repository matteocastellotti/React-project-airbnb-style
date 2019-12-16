import Immutable from 'immutable';

const Prices = new Immutable.Record({
    id: '',
    currency: '',
	price: '',
	condoFees: '',
	additionalCost: '',
	complete: false
});

export default Prices;