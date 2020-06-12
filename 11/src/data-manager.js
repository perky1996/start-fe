function saveData(data) {
  console.log('todos', data);
  // localStorage.setItem('data', JSON.stringify(data));
}

function loadData(callback) {
  const datastring = localStorage.getItem('data') || '[]';
  return JSON.parse(datastring);

  // fetch('http://localhost:3000/todos').then((response) => {
  //   response.json().then((data) => {
  //     callback(data);
  //   });
  // });
}
export { saveData, loadData };
