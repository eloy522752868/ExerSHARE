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
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var WorkoutWorkout = data.results;
      var options2 = [];
      var img;
      // console.log(data.results);
      for (var i = 0; i < WorkoutWorkout.length; i++) {
        console.log(WorkoutWorkout[i]);
        var requestUrl =
          "https://wger.de/api/v2/exerciseimage/?exercise=" +
          WorkoutWorkout[i].id;
        fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            // console.log(data.results);
            if (data.results && data.results.length && data.results[0].image) {
              console.log(data.results[0].image);
              img = data.results[0].image;
            } else {
              console.log("no image");
              img = "https://wger.de/media/exercise-images/83/Bench-dips-1.png";
              //  https://wger.de/media/exercise-images/83/Bench-dips-1.png
            }
            //   data.results[0].image
            // callback("https://wger.de/media/exercise-images/83/Bench-dips-1.png");
            // rr(data.results[0].image);
          });
        // let result1 = WorkoutExerciseImages(WorkoutWorkout[i].id);
        //const results = WorkoutExerciseImages(WorkoutWorkout[i].id);

        // abc = result;  //should by 4

        //    });//Get the results of Function A
        img = "https://wger.de/media/exercise-images/83/Bench-dips-1.png";
        // console.log(abc);
        options2.push(`<div class="card" style="width: 18rem;">
            <img class="card-img-top" src=${img} alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${WorkoutWorkout[i].name}</h5>
              <p class="card-text">${WorkoutWorkout[i].description}</p>
              <a href="#" class="btn btn-primary">add it to your list</a>
            </div>
          </div>`);
      }

      $("#container2").html(options2.join(""));
    });
}
$("#dropdown1").change(function () {
  var selectedValue = $("#dropdown1").val();
  WorkoutExerciseCategoryApi(selectedValue);
  //  alert("Selected Value: " + selectedValue);
  //window.open('https://www.uspto.gov/trademarks/apply/initial-application-forms', '_blank');
});

//call function

WorkoutExerciseCategoryApi();
WorkoutCategoryApi();
