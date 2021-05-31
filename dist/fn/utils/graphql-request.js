"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlRequestUser = void 0;
const graphqurl = require("graphqurl");
exports.graphqlRequestUser = (query, variables, isAdmin = false, token = null) => graphqurl.query({
    query,
    endpoint: "http://localhost:8080/v1/graphql",
    headers: isAdmin
        ? {
            "x-hasura-admin-secret": "mahouka204",
        }
        : {
            authorization: `Bearer ${token}`,
        },
    variables,
});
//# sourceMappingURL=graphql-request.js.map