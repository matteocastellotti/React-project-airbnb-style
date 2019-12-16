import { combineReducers } from 'redux';

import { App } from './app';
import { Alert } from './alert';
import { Auth } from './auth';
import { Constant } from './constant';
import { Country } from './country';
import { Header } from './header';
import { Modal } from './modal';
import { Signup } from './signup';
import { Me } from './me.user'
import { MeAgency } from './me.agency';
import { MeListing } from './me.listing';
import { Search } from './search';

const rootReducer = combineReducers({
    App,
    Alert,
    Auth,
    Constant,
    Country,
    Header,
    Modal,
    Signup,
    Me,
    MeAgency,
    MeListing,
    Search
});

export default rootReducer;