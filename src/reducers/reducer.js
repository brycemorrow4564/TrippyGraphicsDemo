import _ from "lodash";  

export const reducerInitialState = {

};

export function reducer(state, [type, payload]) {

    const mutators = { 

        'test': () => {
            return { ...state};  
        },

    }; 

    if (mutators[type] === undefined) {
        console.log("UNDEFINED MUTATOR KEY: ", type); 
        debugger; 
    }

    return mutators[type](); 

}