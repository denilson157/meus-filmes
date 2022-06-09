import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient(
    {
        uri: 'https://saving-drum-67.hasura.app/v1/graphql',
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'BkGDtM4JcNIECPEk3cVaLLZZcQpmlXMynyIwfVMNrs7KfGRguPY7H1N37ilw7Xat',
        },
        cache: new InMemoryCache()
    }
);