import { CreateAppContext } from './CreateContext';


const [context, UserProvider] = CreateAppContext("");

export const AuthContext = context

const AuthAppContext = (props: any) => {
    return (
        <UserProvider>
            {props.children}
        </UserProvider>
    )
}

export default AuthAppContext
