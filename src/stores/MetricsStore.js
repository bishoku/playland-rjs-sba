import {ReduceStore} from 'flux/utils';
import ActionTypes from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

class MetricsStore extends ReduceStore {

    getInitialState() {
        return {
            metrics: [],
            layout: '4'
        };
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.FETCH_METRICS:
                const result = {
                    metrics: action.data.metrics
                };
                return result;
            case ActionTypes.SET_METRIC_DETAIL_LAYOUT:
                const layout = {
                    layout: action.data.layout
                };
                return layout;
            default:
                return state;
        }
    }
}

export default new MetricsStore(AppDispatcher);
