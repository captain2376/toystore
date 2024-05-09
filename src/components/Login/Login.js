import React, { useState } from 'react';
import axios from 'axios';
import  { Card, Container } from 'react-bootstrap';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9092/validate-user', { username, password });
            if (response.data === true) {
              window.location.href = '/home';
          } else {
               setError('Invalid username or password');
          }
        } catch (error) {
            console.error('Error validating user:', error);
            setError('An error occurred while validating user');
        }
    };

    return (
      <Container className="d-flex justify-content-center align-items-center">
            <Card className="col-md-6 text-center">
                <Card.Header>
                    {error && <p>{error}</p>}
                </Card.Header>
                <Card.Body>
                    <Card.Title>Login</Card.Title>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 d-flex justify-content-between align-items-center">
                            <label htmlFor="username" className="form-label me-3">Username</label>
                            <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                        </div>
                        <div className="mb-3 d-flex justify-content-between align-items-center">
                            <label htmlFor="password" className="form-label me-3">Password</label>
                            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </Container>
    );
};

export default Login;
