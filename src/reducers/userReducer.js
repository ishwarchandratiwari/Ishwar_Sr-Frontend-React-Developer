import {
  LOGIN_S,
  LOGIN_F
} from "../actions/types";

const initialState = {
  status: false,
  data: ''
};


export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_S:
      return {
        ...state, status: true, data: action.payload
      };
    case LOGIN_F:
      return {
        ...state, status: false, data: action.payload
      };
    default:
      return state;
  }

}