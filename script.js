// Displaying Current Day and Retrieving current time:
var currentDay = dayjs().format('dddd, MMMM DD, YYYY.');
$('#currentDay').text(currentDay);
var time = dayjs().format('H');
// console.log("time : "+ time);


/**
 * There are 3 times
 * past = hour < time
 * present = hour === time
 * future = hour > time
 * 
 * for the colors:
 * 1 - get the blocks 
 * 2 - iterate the blocks
 * 3 - each iteration compare the time vs the hour
 * 4 - add classes accordingly
 * 
 * for the button:
 * 1 - get the button
 * 2 - add event listener on click
 * 3 - get the value from the siblings
 * 4 - store the value on localStorage
 */

// Getting the blocks
$('.time-block').each(function () { // .each() to iterate the blocks
  var hour = this.id;
  // comparing hour & adding class
  if(hour < time){ 
    $(this).addClass('past')
  } else if (hour === time){
    $(this).addClass('present')
  } else {
    $(this).addClass('future')
  }
});

// getting the button
var saveButton = $('.saveBtn');
// adding event listener
saveButton.on('click', function () {
  // getting the hour from the id or parent & text from sibling
  
  // var hour = $(this).parent().attr('id');
  var hour = parseInt($(this).attr('id').split('-')[1]);;
  var text = $(this).siblings('#texta').val();

  // template literals/template strings `${}`
  console.log(`text: ${text} - Hr: ${hour}`);

  // adding info to local storage
  localStorage.setItem(hour, text);
});

// PENDING: get info from localStorage
// hint: mySelector.val(infoLocalStorage)


/* OLD CODE 
// Getting the current time & adding "present" class
var hour =[9,10,11,12,13,14,15,16,17];
for (i=0; i<hour.length; i++){
  console.log("i : "+ i);
  var compare = time>hour[i];
  if (compare === false){
    break;
  }
}
// by this time the value of i is 0, only the first block will have the 'present' class
$('#timeBlocks').children().eq(i).addClass('present');
// Adding "past" & "future" classes
for (n=0;n<i;n++){ // this loop never runs cause n is 0 and we are saying as long as n (0) is less than i whch value is also 0
  console.log("n : "+ n); // this never happens
  $('#timeBlocks').children().eq(n).addClass('future');// this never happens
}
console.log("n out : "+ n);
for (n++; n < hour.length; n++){ // the for loop needs the inizialization
  console.log("n future : "+ n); // this works because of line 74 where we declare our n variable

  // this works because we increased the value of n to 9 in the line 79
  // basically is adding the class to the 9 blocks
  $('#timeBlocks').children().eq(n).addClass('present'); 
}

// saving the text in the timeblocks
var text ={}; // why was the text object? 
var saveButton = $('.saveBtn');
saveButton.on('click', function (event) {
  var theId = this.id; // this would be the hour
  console.log("this: "+ this);
  var pr ="h"+theId;
  text.pr=theId;
  var name = document.querySelector("#texta").value; // we can do this with jquery .siblings() method, cause they are on the same level in the DOM three

  // var name = $("input:text").val();

  
  console.log("name: "+ name);
  console.log("text in : "+text);
});


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

*/ 

