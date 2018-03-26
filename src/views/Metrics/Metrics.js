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

        this.setLayout1 = this.setLayout1.bind(this);
        this.setLayout2 = this.setLayout2.bind(this);
        this.setLayout3 = this.setLayout3.bind(this);
        this.setLayout4 = this.setLayout4.bind(this);

        this.state = {
            metrics: [],
            layout: '4'
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

    setLayout1(){
        this.setState({layout:'12'});
    }
    setLayout2(){
        this.setState({layout:'6'});
    }
    setLayout3(){
        this.setState({layout:'4'});
    }
    setLayout4(){
        this.setState({layout:'3'});
    }

    render() {
        const metricDetails = this.state.sample.metrics.map((metricName, i) =>
            <MetricDetail key={i} metricKey={metricName} layout={this.state.layout}/>
        );
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="6" md="4" lg="2" xl="1">
                        <Button block onClick={this.setLayout1}>1</Button>
                    </Col>
                    <Col xs="12" sm="6" md="4" lg="2" xl="1">
                        <Button block onClick={this.setLayout2}>2</Button>
                    </Col>
                    <Col xs="12" sm="6" md="4" lg="2" xl="1">
                        <Button active block onClick={this.setLayout3}>3</Button>
                    </Col>
                    <Col xs="12" sm="6" md="4" lg="2" xl="1">
                        <Button block onClick={this.setLayout4}>4</Button>
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