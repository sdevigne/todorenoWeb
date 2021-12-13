import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';

export const UserPoolId = 'eu-west-3_UusgiQrt5';
export const ClientId = '2ud5s0o18h3g28478ftkbh4gpg';
export const IdentityPoolId = 'eu-west-3:fdac82b2-fc6f-4261-8656-e9fa9a7016eb';
export const IdentityPoolIdRegion = 'eu-west-3';

export const poolData = {
    UserPoolId : UserPoolId,
    ClientId : ClientId
}

export const getUserPool = new CognitoUserPool(poolData);

export const getCognitoUser = (userData) => {
    return new CognitoUser(userData);
}
