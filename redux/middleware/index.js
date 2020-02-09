import { ADD_INGREDIENT } from "../constants/actionTypes"

export function checkMiddleWare({dispatch}) {
    return function(next){
        return function(action){
            if(action.type === ADD_INGREDIENT) {
                if(!action.text.trim().length) {
                  return;
                }
            } 
            return next(action);
        };
    };
}