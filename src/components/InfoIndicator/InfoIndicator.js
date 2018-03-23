import React, {Component} from 'react';
import {
    Badge,
    Card,
    CardHeader,
    CardBody,
    Table,
} from 'reactstrap';
import PropTypes from 'prop-types';

class InfoIndicator extends Component {

    render() {
        return (
            <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"></i> Application Info
                    <Badge className="float-right" pill color="success">{this.props.status}</Badge>
                </CardHeader>
                <CardBody>
                    <Table responsive striped>
                        <thead>
                        <tr>
                            <th>Key</th>
                            <th>Value</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Application Name</td>
                            <td>Spring Simple Admin Dashboard</td>
                        </tr>
                        </tbody>
                    </Table>

                </CardBody>
            </Card>
        )
    }
}

InfoIndicator.propTypes = {
    status: PropTypes.string.isRequired
}

export default InfoIndicator;