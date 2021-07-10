const initialState = {
    data: []
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case "ADD_DATA_MEMBER":
            return {
                ...state,
                data: state.data.concat(action.payload)
            }
        default:
            return state
    }
}