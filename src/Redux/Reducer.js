import { FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST,GET_POPULATION, GET_RANDOM_USER } from "./ActionType"

const initialstate = {
    loading: true,
    entries: [],
    population: [],
    random: [],
    errmessage: ''
}

export const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errmessage: action.payload
            }
        case GET_USER_LIST:
            return {
                loading: false,
                errmessage: '',
                entries:action.payload,
            }
        case GET_POPULATION:
            return {
                loading: false,
                errmessage: '',
                population:action.payload,
            }
        case GET_RANDOM_USER:
            return {
                loading: false,
                errmessage: '',
                random:action.payload,
            }
        default: return state
    }
}