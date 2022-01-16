// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "7pupa4snasvbeushd59g6lm20v",     // CognitoClientID
  "api_base_url": "https://936apsovxf.execute-api.us-east-1.amazonaws.com/{StageNameParam}",                                     // TodoFunctionApi
  "cognito_hosted_domain": "webapp-todo-webapp-todo.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://localhost:8080"                                      // AmplifyURL
};

export default config;
