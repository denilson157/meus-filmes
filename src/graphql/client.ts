import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from '@apollo/client/link/ws';

export const client = new ApolloClient({
    link: new WebSocketLink({
        uri: 'wss://saving-drum-67.hasura.app/v1/graphql',
        options:{
            reconnect: true,
            connectionParams: {
                headers : { 'x-hasura-admin-secret' : 'BkGDtM4JcNIECPEk3cVaLLZZcQpmlXMynyIwfVMNrs7KfGRguPY7H1N37ilw7Xat' },
            }
        }
    }),
    cache: new InMemoryCache()
});