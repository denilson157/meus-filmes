export const MovieReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'INSERT_FAVORITE_MOVIES':

            if (state.includes(action.payload))
                return state

            return [...state, action.payload];
            
        case 'REMOVE_FAVORITE_MOVIES':
            return state.filter((m: any) => m !== action.payload)

        case 'FAVORITE_MOVIES':
            const newState = action.payload

            return [...state, ...newState]

        default:
            return state;
    }
}

