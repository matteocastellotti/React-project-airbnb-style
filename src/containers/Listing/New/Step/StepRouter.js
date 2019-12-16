import React from 'react';
import { Switch, Route } from 'react-router-dom';

import asyncComponent from '../../../../helpers/AsyncFunc';

const stepRouter = props => (
    <Switch>
        <Route
            exact
            path={`/new-listing/:listing_id?/owner`}
            component={asyncComponent(() => import('../Owner.js'))}
        />
        <Route
            exact
            path={`/new-listing/:listing_id/type`}
            component={asyncComponent(() => import('../Type.js'))}
        />
        <Route
            exact
            path={`/new-listing/:listing_id/place`}
            component={asyncComponent(() => import('../Place.js'))}
        />
        <Route
            exact
            path={`/new-listing/:listing_id?/details`}
            component={asyncComponent(() => import('../Details.js'))}
        />
        <Route
            exact
            path={`/new-listing/:listing_id?/comforts`}
            component={asyncComponent(() => import('../Comforts.js'))}
        />
    </Switch>
)

export default stepRouter;