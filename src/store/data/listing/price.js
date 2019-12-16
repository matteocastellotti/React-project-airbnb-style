import Immutable from 'immutable';

export const Price = Immutable.Record({
    id: '',
    currency: '',
    price: '',
    condoFees: '',
    additionalCost: '',
    complete: ''
})