const initialState = {
  persons: []
}
export function personReducers(state = initialState, action){
  switch(action.type){
    case "GET_PERSONS":
      return {...state, persons:[...action.payload]}
    default: 
      return state
  }
}
