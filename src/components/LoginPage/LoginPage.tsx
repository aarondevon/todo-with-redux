import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { startLogin } from '../../actions/auth';


class LoginPage extends React.Component<any, any> {
    render() {
        return (
            <div>
                <button onClick={this.props.startLogin}>Login</button>
            </div>
        )
    }
}

// @ts-ignore
const mapDispatchToProps = (dispatch: any) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(null, mapDispatchToProps)(LoginPage);
