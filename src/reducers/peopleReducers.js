const initialState = {
  people: []
}
export function peopleReducers(state = initialState, action){
  switch(action.type){
    case "GET_PEOPLE":
      return {...state, people:[...action.payload]}
    default: 
      return state
  }
}
