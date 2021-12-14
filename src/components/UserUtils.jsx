import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import * as AWS from 'aws-sdk/global';
import { isEmpty } from './Utils';


export const UserPoolId = 'eu-west-3_UusgiQrt5';
export const ClientId = '2ud5s0o18h3g28478ftkbh4gpg';
export const IdentityPoolId = 'eu-west-3:fdac82b2-fc6f-4261-8656-e9fa9a7016eb';
export const IdentityPoolIdRegion = 'eu-west-3';

const getUserPool = () => {
    const poolData = {
        UserPoolId : UserPoolId,
        ClientId : ClientId
    }
    const userPool = new CognitoUserPool(poolData);
    return userPool;
}

export const getCognitoUser = (email) => {
    const userPool = getUserPool();
    const userData = {
        Username : email,
        Pool : userPool
    }
    return new CognitoUser(userData);
}

export const saveAWSCredentials = (jwtToken) => {
    AWS.config.region = IdentityPoolIdRegion;
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId : IdentityPoolId,
        Logins : {
            ['cognito-idp.' + IdentityPoolIdRegion + '.amazonaws.com/' + UserPoolId] : jwtToken
        }
    });
}

export const refreshAWSCredentials = (email) => {
    AWS.config.credentials.refresh(error => {
        if (error) {
            console.error(error);
        } else {
            console.log('Successfully logged!');
            localStorage.setItem("USERNAME", email);
            window.location.reload(false);
        }
    });
}

export const getCurrentUser = () => {
    const userPool = getUserPool();
    const currentUser = userPool.getCurrentUser();
    return currentUser;
}


export const isLoggedIn = () => {
    const email = localStorage.getItem("USERNAME");
    if (isEmpty(email))
        return false;
    else  
        return true;
}