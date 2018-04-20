const getPeople = list => dispatch => {
    fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(response => {
      dispatch({
        type:"GET_PEOPLE", 
        payload: list ? [...list,...response.results] : response.results
      });
    })
    .catch(error => console.error(error));
  }

export default getPeople;

