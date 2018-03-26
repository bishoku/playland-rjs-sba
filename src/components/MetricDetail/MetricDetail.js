import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Bar, Doughnut, Line, Pie, Polar, Radar} from 'react-chartjs-2';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Col,
    Table
} from 'reactstrap';

const line = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

class MetricDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            metric: {
                "name": "logback.events",
                "measurements": [
                    {
                        "statistic": "COUNT",
                        "value": 39.0
                    }
                ],
                "availableTags": [
                    {
                        "tag": "level",
                        "values": [
                            "warn",
                            "trace",
                            "debug",
                            "error",
                            "info"
                        ]
                    }
                ]
            }
        };

    }

    componentDidMount() {
        var _self = this;
        fetch("http://localhost:8090/actuator/metrics/" + this.props.metricKey)
            .then(response => response.json())
            .then(json => {
                _self.setState({metric: json});
            });
    }

    render() {
        const measurements = this.state.metric.measurements.map((measurement, i) =>
            <tr key={i}>
                <td>{measurement.statistic}</td>
                <td>{measurement.value}</td>
            </tr>
        );


        const availableTags = this.state.metric.availableTags.map((availableTag, i) =>
            <p key={i}>
                <span>{availableTag.tag}</span>:
                <span>{availableTag.values}</span>
            </p>
        );

        return (

            <Col xs="12" sm="6" md="6" lg={this.props.layout} xl={this.props.layout}>
                <Card>
                    <CardHeader>
                        {this.state.metric.name}
                    </CardHeader>
                    <CardBody>
                        <div className="chart-wrapper">
                            <Line data={line}
                                  options={{
                                      maintainAspectRatio: false
                                  }}
                            />
                        </div>
                        <Table responsive bordered striped>
                            <thead>
                            <tr>
                                <td style={{width: '60%'}}>Statistic</td>
                                <td style={{width: '40%'}}>Value</td>
                            </tr>
                            </thead>
                            <tbody>
                            {measurements}
                            </tbody>
                        </Table>
                        {availableTags}
                    </CardBody>
                    <CardFooter>

                    </CardFooter>
                </Card>
            </Col>
        )
    }
}

MetricDetail.propTypes = {
    metricKey: PropTypes.string.isRequired,
    layout: PropTypes.string.isRequired
}

export default MetricDetail;