import {createContext, useContext} from "react";


const initialState = {
    currentQuantity:1,
    setCurrentQuantity:(value:number)=> {}
};
export const BookContext = createContext(initialState)
export const useThemeContext = ()=> useContext(BookContext)