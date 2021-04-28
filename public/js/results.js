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
alert("kkkkk");
//var fetchButton = document.getElementById('fetch-button');


//By defualt hide all element and it will enabled based on condition);
//$('#ideaTaken').hide();
//$('#takeninfo').hide();
//$('#getDomain').hide();
//$('#whoIsinfo').hide();

function WorkoutCategoryApi() {
alert("testapi");
  var requestUrl = 'https://wger.de/api/v2/exercisecategory/' ;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      console.log(data);
     
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
WorkoutCategoryApi();



