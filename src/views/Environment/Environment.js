import React, {Component} from 'react';
import {Container} from 'flux/utils';
import EnvironmentStore from "../../stores/EnvironmentStore";
import EnvironmentActionCreator from "../../actions/EnvironmentActionCreator"
import ActiveProfiles from "../../components/ActiveProfiles";
import PropertySources from "../../components/PropertySources";

class Environment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            env: {
                activeProfiles: [],
                propertySources: [
                    {
                        name: "UNDEFINED"
                    }
                ]
            }
        }
    }

    static getStores() {
        return [EnvironmentStore];
    }

    static calculateState() {
        return {
            sample: EnvironmentStore.getState()
        };
    }

    componentDidMount() {
        EnvironmentActionCreator.getEnv();
    }

    render() {
        return (
            <div className="animated fadeIn">
                <ActiveProfiles profiles={this.state.sample.env.activeProfiles}/>
                <PropertySources propertySources={this.state.sample.env.propertySources}/>
            </div>
        )
    }
}

export default Container.create(Environment);