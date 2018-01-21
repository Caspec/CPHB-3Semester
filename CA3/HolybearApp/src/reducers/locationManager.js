import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GET_PLACES_LIST,
  GET_PLACES_LIST_FAILED
} from '../actions/types';

const INITIAL_STATE = {
  token: null,
  viewMsg: null,
  places:[]
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
        return {                
            ...state,
            viewMsg: action.msg,
        };
    case REGISTER_FAIL:
        return {                
            ...state,
            viewMsg: action.msg,
        }; 
    case GET_PLACES_LIST:
        return {
            ...state, 
            places: action.list
        };
    case GET_PLACES_LIST_FAILED:
        return {
            ...state,
             error: action.error
        };
    default:
      return state;
  }
}
