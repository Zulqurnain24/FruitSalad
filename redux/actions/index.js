import {ADD_INGREDIENT} from '../constants/actionTypes';
import {DELETE_INGREDIENT} from '../constants/actionTypes';

export function addIngredient(text) {
    return {
        type: ADD_INGREDIENT,
        text,
    };
}

export function deleteIngredient(index) {
    return {
        type: DELETE_INGREDIENT,
        index,
    };
}

export function addIngredientsAsync(text){
    return  dispatch=>{
        setTimeout(()=>{
            dispatch(addIngredient(text))
        }, 1000); 
    }
}