
const initialState={
    web3: null,
    account: null,
    instance: null
}

const stateReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'setWeb3':
            return { ...state, web3: action.payload }
        case 'setAddress':
            return { ...state, address: action.payload }
        case 'setInstance':
            return { ...state, instance: action.payload }
        default:
            return state
    }
}

export default stateReducer;