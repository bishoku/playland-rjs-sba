import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/AppConstants';

const MetricsActionCreator = {

    setMetricDetailLayout(layout) {
        AppDispatcher.dispatch({
            type: ActionTypes.SET_METRIC_DETAIL_LAYOUT,
            data: {
                'layout': layout
            }
        });
    },

    getMetrics() {

        fetch("http://localhost:8090/actuator/metrics")
            .then(response => response.json())
            .then(json => {
                AppDispatcher.dispatch({
                    type: ActionTypes.FETCH_METRICS,
                    data: {
                        "metrics": json.names
                    }
                });
            });
    },
    getMetricDetail(metricKey) {
        fetch("http://localhost:8090/actuator/metrics/" + metricKey)
            .then(response => response.json())
            .then(json => {
                AppDispatcher.dispatch({
                    type: ActionTypes.FETCH_METRIC_DETAIL,
                    data: {
                        "metricDetail": json
                    }
                });
            });
    }
};

export default MetricsActionCreator;
