import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/AppConstants';

const EnvironmentActionCreator = {

    getEnv() {

        fetch("http://localhost:8090/actuator/env")
            .then(response => response.json())
            .then(json => {
                AppDispatcher.dispatch({
                    type: ActionTypes.FETCH_ENV,
                    data: {
                        "env": json
                    }
                });
            });
    }
};

export default EnvironmentActionCreator;
