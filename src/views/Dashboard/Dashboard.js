import React, {Component} from 'react';
import {Container} from 'flux/utils';
import HealthIndicator from "../../components/HealtIndicator/HealthIndicator";
import InfoIndicator from "../../components/InfoIndicator/InfoIndicator";
import HealthStore from "../../stores/HealthStore";
import HealthActionCreator from "../../actions/HealthActionCreator";


import {
    Card,
    CardBody,
    Row,
    Col,
    Button,
    FormGroup,
    Input,
    Label,
    CardFooter
} from 'reactstrap';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: "DOWN"
        }
    }

    static getStores() {
        return [HealthStore];
    }

    static calculateState() {
        return {
            sample: HealthStore.getState()
        };
    }

    handleClick(e) {
        HealthActionCreator.updateHealth(this.state.status);
    }

    handleChange(e) {
        this.setState({status: e.target.value});
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12" lg="12">
                        <HealthIndicator status={this.state.sample.status}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" lg="12">
                        <InfoIndicator status={this.state.sample.status}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="6" lg="4">
                        <Card>
                            <CardBody>
                                <FormGroup>
                                    <Label htmlFor="name">Name</Label>
                                    <Input type="text" id="name" placeholder="Enter Status" value={this.state.status}
                                           onChange={this.handleChange.bind(this)} required/>
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <Button color="primary" onClick={this.handleClick.bind(this)} size="sm"><i className="fa fa-link"></i>Update Status</Button>
                            </CardFooter>

                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Container.create(Dashboard);
