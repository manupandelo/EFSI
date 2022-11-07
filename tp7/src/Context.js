import React, { useContext } from "react";

export const initialState = {
    product: []       //array de platos del menu
};

export const ActionTypes = {                         //SETS
    SetProduct: 'SET_PRODUCT',
    SetEliminarId: 'SET_ELIMINAR_ID'
};

export const reducer = (state = {}, action) => {
    switch (action.type) {
    case ActionTypes.SetProduct:
        return ({
            ...state,
            product: [...state.product, action.value],
        });
    case ActionTypes.SetEliminarId:
        return ({
            ...state,
            product: state.product.filter((item) => item.id !== action.value),  //elimina el plato del array de platos
        });
default:
    return state;
    
}
};

export const initialContext = {
    contextState: initialState,
    setContextState: () => {},
};

const Cont = React.createContext(initialContext);


export function ContextProvider({children, initial = initialState}) {
    const [state, dispatch] = React.useReducer(reducer, initial);


    const contextState = state;
    const setContextState = dispatch;

    return <Cont.Provider value={{contextState, setContextState }}>{children}</Cont.Provider>   // devuelve el provider para que se pueda usar en el resto de la app
}

export const useContextState = () => useContext(Cont);