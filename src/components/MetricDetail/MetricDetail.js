import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Col
} from 'reactstrap';

class MetricDetail extends Component {

    render() {
        debugger;
        return (
            <Col xs="12" sm="6" md="6" lg="4" xl="4">
                <Card>
                    <CardHeader>
                        {this.props.metricKey}
                    </CardHeader>
                    <CardBody>
                        Burada metric detayları olacak
                    </CardBody>
                    <CardFooter>
                    </CardFooter>
                </Card>
            </Col>
        )
    }
}

MetricDetail.propTypes = {
    metricKey: PropTypes.string.isRequired
}

export default MetricDetail;