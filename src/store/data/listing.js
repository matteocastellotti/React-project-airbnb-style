import Immutable from 'immutable';
import { Agency, User } from './';
import Summary from './listing/summary';
import Type from './listing/type';
import Place from './listing/place';
import Details from './listing/details';
import Comforts from './listing/comforts';
import Prices from './listing/prices';

export const Listing = new Immutable.Record({
    id: '',
    agency: Agency(),
    owner: User(),
    summary: Summary(),
    type: Type(),
    place: Place(),
    images: [],
    details: Details(),
    comforts: Comforts(),
    prices: Prices(),
    language: '',
    step: '',
    status: ''
});