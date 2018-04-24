const getPersons = list => dispatch => {
    fetch('https://randomuser.me/api/?results=18')
    .then(response => response.json())
    .then(response => {
      dispatch({
        type:"GET_PERSONS", 
        payload: list ? [...list,...response.results] : response.results
      });
    })
    .catch(error => console.error(error));
  }

export default getPersons;

