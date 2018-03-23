import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/AppConstants';

const HealthActionCreator = {

    fetchHealth() {
        // 1. Do something. (e.g. Fetch JSON from an API)
        // 2. Create an action from the result.
        // 3, Pass the action to the dispatch().

        fetch("http://localhost:8090/actuator/health")
            .then(response => response.json())
            .then(json => {
                debugger;
                AppDispatcher.dispatch({
                    type: ActionTypes.FETCH_HEALTH,
                    data: {
                        "status": json.status
                    }
                });
            });
    },

    updateHealth(status) {
        AppDispatcher.dispatch({
            type: ActionTypes.FETCH_HEALTH,
            data: {
                "status": status
            }
        })
    },


};

export default HealthActionCreator;
