import {ReduceStore} from 'flux/utils';
import ActionTypes from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

class HealthStore extends ReduceStore {

    getInitialState() {
        return {
            status: "UNDEFINED"

        };
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.FETCH_HEALTH:
                const result = {
                    status: action.data.status
                };
                return result;
            default:
                return state;
        }
    }
}

export default new HealthStore(AppDispatcher);
