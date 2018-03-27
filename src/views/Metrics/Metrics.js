import React, {Component} from 'react';
import {Container} from 'flux/utils';
import MetricsStore from "../../stores/MetricsStore";
import MetricsActionCreator from "../../actions/MetricsActionCreator"
import MetricDetail from "../../components/MetricDetail";

import {
    Row,
    Button,
    Col
} from 'reactstrap';

class Metrics extends Component {

    constructor(props) {
        super(props);

        this.setLayout = this.setLayout.bind(this);

        this.state = {
            metrics: [],
            layout: '0',
            activeLayout: '4'
        }
    }

    static getStores() {
        return [MetricsStore];
    }

    static calculateState() {
        return MetricsStore.getState();
    }

    componentDidMount() {
        MetricsActionCreator.getMetrics();
    }

    setLayout(layout) {
        this.setState({activeLayout: layout});
        MetricsActionCreator.setMetricDetailLayout(layout);
    }


    render() {
        const metricDetails = this.state.metrics.map((metricName, i) =>
            <MetricDetail key={i} metricKey={metricName} layout={this.state.layout}/>
        );
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="6" md="4" lg="2" xl="1">
                        <Button active={this.state.activeLayout == '12'}
                            block onClick={() => this.setLayout('12')}>1</Button>
                    </Col>
                    <Col xs="12" sm="6" md="4" lg="2" xl="1">
                        <Button active={this.state.activeLayout == '6'}
                                block onClick={() => this.setLayout('6')}>2</Button>
                    </Col>
                    <Col xs="12" sm="6" md="4" lg="2" xl="1">
                        <Button active={this.state.activeLayout == '4'} block
                                onClick={() => this.setLayout('4')}>3</Button>
                    </Col>
                    <Col xs="12" sm="6" md="4" lg="2" xl="1">
                        <Button active={this.state.activeLayout == '3'}
                                block onClick={() => this.setLayout('3')}>4</Button>
                    </Col>
                </Row>
                <Row>
                    {metricDetails}
                </Row>
            </div>
        )
    }
}

export default Container.create(Metrics);