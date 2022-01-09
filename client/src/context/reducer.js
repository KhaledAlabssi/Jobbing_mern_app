import { CLEAR_ALERT, DISPLAY_ALERT } from "./action"


const reducer = (state, action) => {
    switch (action.type){
        case DISPLAY_ALERT:
            return {...state, showAlert:true, alertType:'danger', alertText:'Please provide all values!'}
        case CLEAR_ALERT:
            return {...state, showAlert:false, alertText:'', alertType:''}

    }
  throw new Error(`no such action :${action.type}`);
}

export default reducer;
