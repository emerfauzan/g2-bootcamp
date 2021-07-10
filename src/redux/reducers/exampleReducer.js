const initialState = {
    number: 15
}

export default function reducer(state = initialState, action){
    switch(action.type) {
        case "INCREASE":
            return {
                ...state,
                number: state.number+1
            }

        case "DECREASE":
            return {
                ...state,
                number: state.number-1
            }

        default:
            return state
    }
}