# Effort optimization with Svelte + AWS

A simple Svelte app to test AWS services - Cognito + Datastore

## Get started

Install the dependencies...

```bash
npm install
```

Create `aws-exports.js` file inside src folder with your configurations

```bash
const awsmobile = {
"aws_project_region": "eu-central-1",
"aws_appsync_graphqlEndpoint": "https://xxx.appsync-api.eu-central-1.amazonaws.com/graphql",
"aws_appsync_region": "eu-central-1",
"aws_appsync_authenticationType": "API_KEY",
"aws_appsync_apiKey": "da2-xxx",
"aws_cognito_identity_pool_id": "eu-central-1:xxx-1dda-4259-bdab-xxx",
"aws_cognito_region": "eu-central-1",
"aws_user_pools_id": "eu-central-xxx",
"aws_user_pools_web_client_id": "xxx",
"oauth": {}
};

export default awsmobile;
```

...then start webpack:

```bash
npm run dev
```
