// Displaying Current Day and Retrieving current time:
var currentDay = dayjs().format('dddd, MMMM DD, YYYY.');
$('#currentDay').text(currentDay);
var time = dayjs().format('H');
console.log("time : "+ time);

// Getting the current time & adding "present" class
var hour =[9,10,11,12,13,14,15,16,17];
for (i=0; i<hour.length; i++){
  console.log("i : "+ i);
  var compare = time>hour[i];
  if (compare === false){
    break;
  }
}
$('#timeBlocks').children().eq(i).addClass('present');
// Adding "past" & "future" classes
for (n=0;n<i;n++){
  console.log("n : "+ n);
  $('#timeBlocks').children().eq(n).addClass('past');
}
console.log("n out : "+ n);
for (n++;n<hour.length;n++){
  console.log("n future : "+ n);
  $('#timeBlocks').children().eq(n).addClass('future');
}

// saving the text in the timeblocks
var text ={};
var saveButton = $('.saveBtn');
saveButton.on('click', function (event) {
  var theId = this.id;
  console.log("this: "+ this);
  var pr ="h"+theId;
  text.pr=theId;
  var name = document.querySelector("#texta").value;
  // var name = $("input:text").val();

  
  console.log("name: "+ name);
  console.log("text in : "+text);
});

console.log("text: "+text);


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
