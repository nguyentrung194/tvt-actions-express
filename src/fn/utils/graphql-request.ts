const graphqurl = require("graphqurl");

export const graphqlRequestUser = (
  query: any,
  variables: any,
  isAdmin: boolean = false,
  token: string | null = null
) =>
  graphqurl.query({
    query,
    endpoint: "https://fashion-trend-v2.hasura.app/v1/graphql",
    headers: isAdmin
      ? {
        "x-hasura-admin-secret":
          "J1oJSVrvLVALaidFEH0SJuC2ZJ9D9mEDACx0i4xCpEldNZyouGKvFWHe7LaxxtWH",
      }
      : {
        authorization: `Bearer ${token}`,
      },
    variables,
  });
