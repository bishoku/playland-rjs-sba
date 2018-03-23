import React, {Component} from 'react';

import {
    ListGroup,
    ListGroupItem,
    Badge,
    Card,
    CardBody,
    CardHeader,
    CardTitle
} from 'reactstrap';
import HealthActionCreator from '../../actions/HealthActionCreator';
import PropTypes from 'prop-types';

class HealthIndicator extends Component {

    componentDidMount() {
        HealthActionCreator.fetchHealth();
    }

    render() {
        return (
            <Card>
                <CardHeader>
                    <h1>Application Status</h1>
                </CardHeader>
                <CardBody>
                    <h1><Badge pill color="success" style={{width: '100%'}}>{this.props.status}</Badge></h1>
                </CardBody>
            </Card>
        )
    }
}

HealthIndicator.propTypes = {
    status: PropTypes.string.isRequired
}

export default HealthIndicator;