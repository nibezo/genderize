function gender() {
  let inputData = document.getElementById('name').value;
  let gender = document.getElementById('gender');
  let serverUrl = 'https://api.genderize.io';
  let url = `${serverUrl}?name=${inputData}`;
  // С помощью fetch мы обращаемся к серверу
  fetch(url)
    // Конвертация ответа в JSON
    .then((response) => response.json())
    .then((data) => {
      gender.textContent = `${inputData} is ${data.gender}`;
    });
}
