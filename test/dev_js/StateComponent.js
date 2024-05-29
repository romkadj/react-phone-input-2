import React from 'react';
import PropTypes from 'prop-types';

class StateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.initialState;
    }

    static propTypes = {
        children: PropTypes.func.isRequired,
        initialState: PropTypes.any
    };

    update = newState => {
        this.setState(newState);
    };

    render() {
        return <>{this.props.children({ setState: this.update, state: this.state })}</>;
    }
}

export default StateComponent;
