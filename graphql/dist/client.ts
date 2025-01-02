import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Any: { input: any; output: any; }
  Int64: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['Int64']['output'];
  passwordHash: Scalars['String']['output'];
  user: User;
  username: Scalars['String']['output'];
};

export type AuthOps = {
  __typename?: 'AuthOps';
  login: Scalars['Any']['output'];
  register: Scalars['Any']['output'];
};


export type AuthOpsLoginArgs = {
  input: LoginInput;
};


export type AuthOpsRegisterArgs = {
  input: RegisterInput;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  accessToken: Scalars['String']['output'];
  account: Account;
  message: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type LoginInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  auth: AuthOps;
};

export type Query = {
  __typename?: 'Query';
  protected: Scalars['Any']['output'];
  users: Array<User>;
};

export type RegisterInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  accountId: Scalars['Int64']['output'];
  message: Scalars['String']['output'];
  userId: Scalars['Int64']['output'];
  username: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  dateOfBirth: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Int64']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type GetProtectedQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProtectedQuery = { __typename?: 'Query', protected: any };


export const GetProtectedDocument = gql`
    query getProtected {
  protected
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getProtected(variables?: GetProtectedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetProtectedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProtectedQuery>(GetProtectedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProtected', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;