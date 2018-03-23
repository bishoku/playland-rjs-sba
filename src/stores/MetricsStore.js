import {ReduceStore} from 'flux/utils';
import ActionTypes from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

class MetricsStore extends ReduceStore {

    getInitialState() {
        return {
            metrics: []

        };
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.FETCH_METRICS:
                const result = {
                    metrics: action.data.metrics
                };
                return result;
            default:
                return state;
        }
    }
}

export default new MetricsStore(AppDispatcher);
