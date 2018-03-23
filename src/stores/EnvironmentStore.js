import {ReduceStore} from 'flux/utils';
import ActionTypes from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

class EnvironmentStore extends ReduceStore {

    getInitialState() {
        return {
            env: {
                activeProfiles: [],
                propertySources: [
                    {
                        name: "UNDEFINED"
                    }
                ]
            }
        };
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.FETCH_ENV:
                const env = {
                    env: action.data.env
                };
                return env;
            default:
                return state;
        }
    }
}

export default new EnvironmentStore(AppDispatcher);
