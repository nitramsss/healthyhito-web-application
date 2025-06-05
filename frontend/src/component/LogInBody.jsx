import Form from 'react-bootstrap/Form';

function LogInBody() {
   return (
        <>
            <div>
                <div className="login-inputs">
                    <h6>Email: </h6>
                    <Form.Control type="text" placeholder="name@example.com"/>
                </div>
                <div className="password-inputs">
                    <h6>Password:</h6>
                    <Form.Control type="password" />
                </div>
            </div>
        </>
    );
}

export default LogInBody;