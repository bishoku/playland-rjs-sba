import React, {Component} from 'react';
import EnvironmentProperty from '../../components/EnvironmentProperty';
import PropTypes from 'prop-types';
import {
    Card,
    CardBody,
    CardHeader
} from 'reactstrap';

class PropertySources extends Component {


    render() {
        const propertySourcesList = this.props.propertySources.map((sources, i) =>
            <Card key={i}>
                <CardHeader><h1>{sources.name}</h1></CardHeader>
                <CardBody>
                    <EnvironmentProperty properties={sources.properties}/>
                </CardBody>
            </Card>
        );
        return (
            <div>
                {propertySourcesList}
            </div>
        )
    }
}

PropertySources.propTypes = {
    propertySources: PropTypes.array.isRequired
}

export default PropertySources;