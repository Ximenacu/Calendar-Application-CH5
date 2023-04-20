

// localStorage.clear();
// Retrieving stored names and scores:
var text =[];
var saveId=[];
init()

// Displaying Current Day and Retrieving current time:
var currentDay = dayjs().format('dddd, MMMM DD, YYYY.');
$('#currentDay').text(currentDay);
// var time = dayjs().format('H');
var time = 12;
console.log("time : "+ time);

// Getting the current time & adding "present" class
var hour =[9,10,11,12,13,14,15,16,17];
for (i=0; i<hour.length; i++){
  var compare = time>hour[i];
  if (compare === false){
    break;
  }
}
$('#timeBlocks').children().eq(i).addClass('present');
// Adding "past" & "future" classes
for (n=0;n<i;n++){
  $('#timeBlocks').children().eq(n).addClass('past');
}
for (n++;n<hour.length;n++){
  $('#timeBlocks').children().eq(n).addClass('future');
}

// saving the text in the timeblocks

var saveButton = $('.btn');
saveButton.on('click', function (event) {
  console.log("text1: "+text);
  console.log("saveId1: "+saveId);
  var theId = this.id;
  // var pr ="h"+theId;
  var name = $(this).siblings('#texta').children().val();
  // text.pr=name;
  saveId.push(theId);
  text.push(name);
  console.log("text2: "+text);
  console.log("saveId2: "+saveId);
  localStorage.setItem("Scheduler", JSON.stringify(text));
  localStorage.setItem("SchedulerId", JSON.stringify(saveId));
  console.log("text3: "+text);
  console.log("saveId3: "+saveId);
});

//Retrieving name and score from local storage:
function init(){
  var stored = JSON.parse(localStorage.getItem("Scheduler"));
  var storedId = JSON.parse(localStorage.getItem("SchedulerId"));
  if (stored != null){
    text = stored;
    saveId = storedId;
    console.log("text0: "+text);
    console.log("saveId0: "+ saveId);
    

    var fr =-1;
    $('.time-block').each(function () { // .each() to iterate the blocks
      fr ++;
      var am = saveId[fr];
      console.log("am: "+am);
      $('#texta_'+am).text(text[fr]);
    });
  }

}


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. 
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
