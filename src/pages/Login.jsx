import react from 'react';
import Campos from './Campos';
import './login-style.css';
import Texto from './Texto';

const Login = () => {
    return (
        <div className="container">
            <div className="box-texto">
                <Texto />
            </div>
            <div className="box-campos">
                <Campos />
            </div>
        </div>
    )
}

export default Login;