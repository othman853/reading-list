const button = document.querySelector('#get-data');
const serverData = document.querySelector('#server-data');

button.addEventListener('click', () => {

  axios
    .get('/motd')
    .then(response => {

      const newData = document.createElement('p');
      newData.innerHTML = response.data.message;

      serverData.appendChild(newData);
    })
    .catch(err => alert(err));

});
