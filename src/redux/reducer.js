import {FETCH_WEATHER_FAIL,FETCH_WEATHER_SUCCESS} from './action'


export default function reducer (state = {}, action) {
    switch (action.type){
        case FETCH_WEATHER_SUCCESS:
            return {
                ...action.payload
            }

        case FETCH_WEATHER_FAIL:
            return{
                ...action.payload
            }
        default :

        return state
    }
}