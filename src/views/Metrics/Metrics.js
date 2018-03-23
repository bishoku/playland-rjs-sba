import React, {Component} from 'react';
import {Container} from 'flux/utils';
import MetricsStore from "../../stores/MetricsStore";
import MetricsActionCreator from "../../actions/MetricsActionCreator"
import MetricDetail from "../../components/MetricDetail";

import {
    Row
} from 'reactstrap';

class Metrics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            metrics: []
        }
    }

    static getStores() {
        return [MetricsStore];
    }

    static calculateState() {
        return {
            sample: MetricsStore.getState()
        };
    }

    componentDidMount() {
        MetricsActionCreator.getMetrics();
    }

    render() {
        const metricDetails = this.state.sample.metrics.map((metricName, i) =>
            <MetricDetail key={i} metricKey={metricName}/>
        );
        return (
            <div className="animated fadeIn">
                <Row>
                    {metricDetails}
                </Row>
            </div>
        )
    }
}

export default Container.create(Metrics);