import { CognitoUserSession } from 'amazon-cognito-identity-js';

export interface User {
  username: string;
  signInUserSession: CognitoUserSession;
}
