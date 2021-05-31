const graphqurl = require("graphqurl");

export const graphqlRequestUser = (
  query: any,
  variables: any,
  isAdmin: boolean = false,
  token: string | null = null
) =>
  graphqurl.query({
    query,
    endpoint: "http://localhost:8080/v1/graphql",
    headers: isAdmin
      ? {
        "x-hasura-admin-secret":
          "mahouka204",
      }
      : {
        authorization: `Bearer ${token}`,
      },
    variables,
  });
