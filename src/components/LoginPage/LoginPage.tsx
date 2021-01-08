import React from 'react';
import { Container, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.scss';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';

class LoginPage extends React.Component<any, any> {
    render() {
        return (
            <Container className="">

                <div className="d-flex flex-column login-container align-items-center 
            justify-content-center">
                    <h1>A Simple To-do List</h1>
                    <br></br>
                    <div className="d-flex justify-content-around">
                    <Button className="btn-lg login-buttons" variant="primary" onClick={this.props.   startLogin}>
                        Login
                    </Button>
                    <Button className="btn-lg login-buttons" variant="primary" onClick={this.props.startLogin}>
                        Demo
                    </Button>
                    </div>
                    
                </div>
               
                
                
                
            </Container>
        )
    }
}

// @ts-ignore
const mapDispatchToProps = (dispatch: any) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(null, mapDispatchToProps)(LoginPage);
