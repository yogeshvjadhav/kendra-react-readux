/**
 * Reducer actions
 */
import {
    GET_PRAVACHANS_PROGRESS, GET_PRAVACHANS_SUCCESS, GET_PRAVACHANS_FAILURE,
} from '../actions/pravachans.action';


/**
 * Get pravachans
 */
export const getPravachans = () => (dispatch) => {

    try {
        let pravachans = [{ name: 'Sun-05-05-2019-Swamiji_Pravachan', size: '3.91MB' },
        { name: 'Sun-28-04-2019-Swamiji_Pravachan', size: '4.31MB' },
        { name: 'Sun-07-04-2019-Swamiji_Pravachan', size: '4.13MB' },
        { name: 'Sun-24-03-2019-Swamiji_Pravachan', size: '4.11MB' }];

        // dispatch({ type: GET_PRAVACHANS_PROGRESS });

        dispatch({ type: GET_PRAVACHANS_SUCCESS, pravachans: pravachans });
    }
    catch (exception) {
        dispatch({ type: GET_PRAVACHANS_FAILURE, message: exception.message });
    }
}

/**
 * Reducer initial states
 */
let initialState = {
    pravachans: [],
    isFetching: false,
    message: ''
}

/**
 * Reducer dispatcher
 */
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PRAVACHANS_PROGRESS:
            window.location.href = action.redirectTo;
            return { ...state, isFetching: true };

        case GET_PRAVACHANS_SUCCESS:
            return { ...state, isFetching: false, pravachans: action.pravachans };

        case GET_PRAVACHANS_FAILURE:
            return { ...state, isFetching: false };

        default:
            return state;
    }
} 