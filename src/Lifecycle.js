import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

import ModalLifecycle from './containers/ModalLifecycle/ModalLifecycle';
import AppLocale from './languageProvider';

const Lifecycle = () => (
    <Provider store={store}>
        <ModalLifecycle />
    </Provider>
)

export default Lifecycle;
export { AppLocale };