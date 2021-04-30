/**
* Name: Eloy Gonzalez
* Date: 03/21/2021
* Description:
 Workoutapi
*/

/**Decalared Variables
 * Last Modified: 04/29/2021 Egon
 * add variables for traversing the DOM and api credentials for trademark
 */
var testglobal;
function WorkoutCategoryApi() {
  //alert("testapi");

  var requestUrl = "https://wger.de/api/v2/exercisecategory/";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //console.log(data.results[0]);
      var WorkoutCategory = data.results;
      var options = [];
      var options1 = [];
      for (var i = 0; i < WorkoutCategory.length; i++) {
        options.push(
          '<option value="' +
            WorkoutCategory[i].id +
            '">' +
            WorkoutCategory[i].name +
            "</option>"
        );
        options1.push(
          '<a class="dropdown-item" href="#">' +
            WorkoutCategory[i].name +
            "</a>"
        );
      }

      // console.log( options1 );
      $("#dropdown").html(options1.join(""));

      $("#dropdown1").html(options.join(""));
      //console.log(options);
    });
}

function WorkoutExerciseImages(exerciseid) {
  console.log(exerciseid);
  //alert("testapi");
  let WorkoutWorkout = "";
  var requestUrl =
    "https://wger.de/api/v2/exerciseimage/?exercise=" + exerciseid;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.results);
      return data.results;
      //   data.results[0].image
      // callback("https://wger.de/media/exercise-images/83/Bench-dips-1.png");
      // rr(data.results[0].image);
    });
}

function WorkoutExerciseCategoryApi(val) {
  //alert("testapi");
  let abc = 0;

  var requestUrl =
    "https://wger.de/api/v2/exercise/?limit=20&offset=20&category=" + val + "";
  const imglink = fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var WorkoutWorkout = data.results;
      var options2 = [];
      var img;
      // console.log(data.results);
      $("#container2").empty();
      for (var i = 0; i < WorkoutWorkout.length; i++) {
        $("#container2").append(`<div class="card" style="width: 18rem;">
        <img id="img-${WorkoutWorkout[i].id}" class="card-img-top" src="https://wger.de/media/exercise-images/83/Bench-dips-1.png" alt="Card image cap">
        <div class="card-body">
          <h5 id = "cardtitle" class="card-title">${WorkoutWorkout[i].name}</h5>
          <p class="card-text">${WorkoutWorkout[i].description}</p>
          <input id = "btnSubmit-${WorkoutWorkout[i].id}" type="submit" value="add it to your list"/>
          <p class="card-text"></p>
          <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
          <label class="form-check-label" for="inlineCheckbox1">M</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
          <label class="form-check-label" for="inlineCheckbox2">T</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
          <label class="form-check-label" for="inlineCheckbox3">W</label>
        </div>
        </div>
      </div>`);
        var msg = WorkoutWorkout[i].id;
        $(`#btnSubmit-${WorkoutWorkout[i].id}`).click(function (event) {
          event.preventDefault();

          console.log($(this).parent().find("#cardtitle").html());
          console.log($(this).parent().find(".card-img-top").html());
          //const  description= document.querySelector('#project-funding').value.trim();
          const description = $(this).parent().find("#cardtitle").html();
          const exerciseId = 718; //$(this).parent().find(".card-img-top").html();
          newFormHandler();
        });

        console.log(WorkoutWorkout[i]);
        var requestUrl =
          "https://wger.de/api/v2/exerciseimage/?exercise=" +
          WorkoutWorkout[i].id;
        fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data.results);
            if (data.results && data.results.length && data.results[0].image) {
              console.log(data.results[0].image);
              img = data.results[0].image;
              console.log($(`#img-${data.results[0].exercise}`));
              $(`#img-${data.results[0].exercise}`).attr(`src`, img);
            } else {
              console.log("no image");
              img = "https://wger.de/media/exercise-images/83/Bench-dips-1.png";
              //  https://wger.de/media/exercise-images/83/Bench-dips-1.png
            }
          });
      }
      //   $("#container2").html(options2.join(""));
      // $("#container2").html(options2.join(""));
    });
}
$("#dropdown1").change(function () {
  var selectedValue = $("#dropdown1").val();
  WorkoutExerciseCategoryApi(selectedValue);
  //  alert("Selected Value: " + selectedValue);
  //window.open('https://www.uspto.gov/trademarks/apply/initial-application-forms', '_blank');
});

const newFormHandler = async (event) => {
  alert("FF");
  const title = "sss";

  //const  description= document.querySelector('#project-funding').value.trim();
  const exercise_id = 716;

  if (exercise_id && title) {
    const response = await fetch(`/api/routines`, {
      method: "POST",
      body: JSON.stringify({ title, exercise_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create routine");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/routines/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete routine");
    }
  }
};

//call function

WorkoutExerciseCategoryApi();
WorkoutCategoryApi();

document
  .querySelector(".project-list")
  .addEventListener("click", delButtonHandler);
