/**
* Name: Eloy Gonzalez
* Date: 03/21/2021
* Description:
 This week’s homework requires us to create a result the js to be able to to connect to Api's for trademark,domain validation and manuplate the DOM of the result html. 
   This app will run in the browser and 
  feature dynamically updated HTML jQuery and connect to Api's for trademark,domain. This amazing team effort. Go team!
*/

/**Decalared Variables
 * Last Modified: 04/01/2021 Egon
 * add variables for traversing the DOM and api credentials for trademark
 */

//var documentLocation = document.location.search;
//var searchPram = documentLocation.split("?")[1];
//searchPram = searchPram.replace(/%20/g, "");
//getting elements
//var TMIdeaTakenEL = $("#ideaTaken");
//var TMTakeninfoEL = $("#takeninfo");
//var DMGetDomainsEL = $('#getDomain');
//var DMwhoIsinfoEL = $('#whoIsinfo');
//var DMBBtnEL = $('#start-trademark');
//var DMBBtnEL = document.getElementById("start-trademark");
//alert("kkkkk");
//var fetchButton = document.getElementById('fetch-button');


//By defualt hide all element and it will enabled based on condition);
//$('#ideaTaken').hide();
//$('#takeninfo').hide();
//$('#getDomain').hide();
//$('#whoIsinfo').hide();

function WorkoutCategoryApi() {
//alert("testapi");

  var requestUrl = 'https://wger.de/api/v2/exercisecategory/' ;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      console.log(data.results[0]);

      var WorkoutCategory = data.results;
      var options = [];
      var options1 = [];
      for (var i = 0; i < WorkoutCategory.length; i++) {
        options.push('<option value="' +  WorkoutCategory[i].id + '">' +  WorkoutCategory[i].name +  '</option>');
        options1.push('<a class="dropdown-item" href="#">' +  WorkoutCategory[i].name + '</a>');
    }

   // console.log( options1 );
    $("#dropdown").html(options1.join(''));

    $("#dropdown1").html(options.join(''));
    console.log(options);
    });
}


function WorkoutExerciseImages(exerciseid) {
  //alert("testapi");
  let WorkoutWorkout = "" ;
    var requestUrl = 'https://wger.de/api/v2/exerciseimage/?exercise=' + exerciseid +'&is_main=true' ;
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
  
        console.log(data);
  
        return "TEST" ;
      // WorkoutWorkout = data.results[0].image;
 
      });
return WorkoutWorkout ;
  }


function WorkoutExerciseCategoryApi() {
  //alert("testapi");
  
    var requestUrl = 'https://wger.de/api/v2/exercise/?limit=20&offset=20&category=10' ;
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
  
        console.log(data);
        alert(WorkoutExerciseImages(631));


        var WorkoutWorkout = data.results;
        var options = [];
        var options1 = [];
        var options2 = [];
        for (var i = 0; i < WorkoutWorkout .length; i++) {
          options2.push(`<div class="card" style="width: 18rem;">
          <img class="card-img-top" src="https://wger.de/media/exercise-images/83/Bench-dips-1.png" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${WorkoutWorkout[i].name}</h5>
            <p class="card-text">${WorkoutWorkout[i].description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>`);
      }
    
     // console.log( options1 );
  
      console.log(options2);
      $("#container2").html(options2.join(''));
      });
  }
function Thisistest()
{
alert("teeeessaaa");
}

//document.getElementById("start-trademark").addEventListener("click", function () {
  //window.open('https://www.uspto.gov/trademarks/apply/initial-application-forms', '_blank');
//});

//call function
WorkoutExerciseImages(1);
WorkoutExerciseCategoryApi() ;
WorkoutCategoryApi();



