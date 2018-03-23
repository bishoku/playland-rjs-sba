import React, {Component} from 'react';

import PropTypes from 'prop-types';

import {
    Table
} from 'reactstrap';


class EnvironmentProperty extends Component {


    render() {
        if (this.props.properties) {
            let keys = Object.keys(this.props.properties);

            const envList = keys.map((key, i) =>
                <tr key={i}>
                    <td>{key}</td>
                    <td>{this.props.properties[key].value}</td>
                </tr>
            );

            return (
                <Table responsive bordered striped>
                    <thead>
                    <tr>
                        <td style={{width: '25%'}} >Key</td>
                        <td style={{width: '75%'}}>Value</td>
                    </tr>
                    </thead>
                    <tbody>
                    {envList}
                    </tbody>
                </Table>
            )
        } else {
            return (
                <div>
                    Empty
                </div>
            )
        }
    }
}

EnvironmentProperty.propTypes = {
    properties: PropTypes.object
}

export default EnvironmentProperty;