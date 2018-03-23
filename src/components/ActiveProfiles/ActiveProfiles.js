import React, {Component} from 'react';

import PropTypes from 'prop-types';
import {
    Badge,
    Row,
    Col,
    Card,
    CardBody,
    CardHeader
} from 'reactstrap';

class ActiveProfiles extends Component {


    render() {
        const profileList = this.props.profiles.map((profile, i) =>
            <Col key={i} xs="12" sm={12 / this.props.profiles.length} lg={12 / this.props.profiles.length}>
                <h1>
                    <Badge pill color="success" style={{width: '100%'}}>{profile}</Badge>
                </h1>
            </Col>
        );
        return (
            <Card>
                <CardHeader>
                    <h1>Application Active Profiles</h1>
                </CardHeader>
                <CardBody>
                    <Row>
                        {profileList}
                    </Row>
                </CardBody>
            </Card>
        )
    }
}

ActiveProfiles.propTypes = {
    profiles: PropTypes.array.isRequired
}

export default ActiveProfiles;