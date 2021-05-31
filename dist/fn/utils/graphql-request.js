"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlRequestUser = void 0;
const graphqurl = require("graphqurl");
exports.graphqlRequestUser = (query, variables, isAdmin = false, token = null) => graphqurl.query({
    query,
    endpoint: "https://fashion-trend-v2.hasura.app/v1/graphql",
    headers: isAdmin
        ? {
            "x-hasura-admin-secret": "J1oJSVrvLVALaidFEH0SJuC2ZJ9D9mEDACx0i4xCpEldNZyouGKvFWHe7LaxxtWH",
        }
        : {
            authorization: `Bearer ${token}`,
        },
    variables,
});
//# sourceMappingURL=graphql-request.js.map