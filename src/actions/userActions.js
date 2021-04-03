import {
  LOGIN_S,
  LOGIN_F,
} from "./types";

export const login = (data) => (dispatch) => {
  console.log(data)
   if(data.username==='user01' && data.password==='user01'){
    return dispatch({
      type: LOGIN_S,
      payload: data.username
    });
   }else{
    return dispatch({
      type: LOGIN_F,
      payload: 'invalid login credentials'
    });
   }
}
export const logout = () => (dispatch) => {
   return dispatch({
     type: LOGIN_F,
     payload: ''
   });
}