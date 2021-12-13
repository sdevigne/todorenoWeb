import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import React, { useState } from 'react';
import { Accordion, Form, Button, Modal, InputGroup, FormControl } from 'react-bootstrap';
import * as AWS from 'aws-sdk/global';
import { getUserPool, getCognitoUser, IdentityPoolIdRegion, IdentityPoolId, UserPoolId } from '../components/UserUtils';



const Login = () => {

    /**
     * Consts for registration
     */
    const [formRegisterData, setFormRegisterData] = useState({
        email: '',
        password: ''
    });
    const [showValidation, setShowValidation] = useState(false);
    const [validationCode, setValidationCode] = useState('');
    const handleClose = () => setShowValidation(false);
    const handleShow = () => setShowValidation(true);

    /**
     * Consts for login
     */
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    


    

    /**
     * Authentication
     * 
     * @param {event} e 
     */
    const validateLogin = (e) => {
        e.preventDefault();
        const authenticationData = {
            Username : loginData.email,
            Password : loginData.password
        }
        const authenticationDetails = new AuthenticationDetails(authenticationData);
        const userData = {
            Username : loginData.email,
            Pool : getUserPool
        }
        const cognitoUser = getCognitoUser(userData);
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess : function (result) {
                var accessToken = result.getAccessToken().getJwtToken();
                console.log(accessToken);
                
                AWS.config.region = IdentityPoolIdRegion;
                AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                    IdentityPoolId : IdentityPoolId,
                    Logins : {
                        ['cognito-idp.' + IdentityPoolIdRegion + '.amazonaws.com/' + UserPoolId] : result.getIdToken().getJwtToken()
                    }
                });

                AWS.config.credentials.refresh(error => {
                    if (error) {
                        console.error(error);
                    } else {
                        // Instantiate aws sdk service objects now that the credentials have been updated.
                        // example: var s3 = new AWS.S3();
                        console.log('Successfully logged!');
                        localStorage.setItem("JWT", result.getIdToken().getJwtToken());
                        window.location.reload(false);
                    }
                });
                //%%%


            },
            onFailure: function(err) {
                alert(err.message || JSON.stringify(err));
            }
        })
    }
    

    /**
     * Registering form validation
     * @param {} e 
     */
    const validateSusbcription = (e) => {
        e.preventDefault();
        UserPool.signUp(formRegisterData.email, formRegisterData.password, [], null, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                setShowValidation(true);
            }
            console.log(data);//%%%

        })
    }

    /**
     * Registering confirmation
     */
    const confirmSubscription = () => {
        const userData = {
            Username : formRegisterData.email,
            Pool : getUserPool
        }
        const cognitoUser = getCognitoUser(userData);
        cognitoUser.confirmRegistration(validationCode, true, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result)
                    setFormRegisterData({
                        email: '',
                        password: ''
                    })
                    handleClose();
                }
            }
        )
    }

    return (
        <div>
            <Modal show={showValidation} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Code</InputGroup.Text>
                <FormControl
                    placeholder="Code de validation reçu par mail"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={validationCode}
                    onChange={(e) => setValidationCode(e.target.value)}
                />
            </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={confirmSubscription}>
                    Save Changes
                </Button>
            </Modal.Footer>
            </Modal>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Connexion</Accordion.Header>
                    <Accordion.Body>
                    <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmailLogin">
                                <Form.Label>Adresse Mail</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                                    value={loginData.email} 
                                    placeholder="Email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPasswordLogin">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                                    value={loginData.password} 
                                    placeholder="Mot de passe" />
                            </Form.Group>
                            
                            <Button variant="primary" type="submit" onClick={validateLogin}>
                                Valider
                            </Button>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Inscription</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmailRegister">
                                <Form.Label>Adresse Mail</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    onChange={(e) => setFormRegisterData({...formRegisterData, email: e.target.value})}
                                    value={formRegisterData.email} 
                                    placeholder="Email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPasswordRegister">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    onChange={(e) => setFormRegisterData({...formRegisterData, password: e.target.value})}
                                    value={formRegisterData.password} 
                                    placeholder="Mot de passe" />
                            </Form.Group>
                            
                            <Button variant="primary" type="submit" onClick={validateSusbcription}>
                                Inscription
                            </Button>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Login;