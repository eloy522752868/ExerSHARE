
var url = window.location.pathname;
var exerciseId = url.substring(url.lastIndexOf("/") + 1);

function displayExercise(exerciseId) {
  const requestUrl = "https://wger.de/api/v2/exerciseinfo/" + exerciseId;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      $("#exercise-container").empty();
      $("#exercise-container").append(`<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h3 class="card-title">${data.name}</h3>
        <h4 class="card-subtitle">${data.category.name}</h4>
        <p class="card-text">${data.description}</p>
        <input id = "btnSubmit-${data.id}" type="submit" value="add it to your list"/>
    </div>`);
    });
}

displayExercise(exerciseId);
