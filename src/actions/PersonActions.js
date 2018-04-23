const getPersons = list => dispatch => {
  console.log(1);
    fetch('https://randomuser.me/api/?results=12')
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

