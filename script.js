// --------------- Adding bootstrap classes and some elements.
var eachhour = $('#timeBlocks').children()
h=9;
eachhour.each(function () { 
    eachhour.addClass('row time-block');
    var hourlabel = $('<div>');
    hourlabel.addClass('col-2 col-md-1 hour text-center py-3');

    if(h<12){
        hourlabel.text(h+'AM');
    } else if (h==12){
        hourlabel.text('12 PM');      
    } else {
        hourlabel.text((h-12)+' PM');
    }
    $('#hrs-'+h).prepend(hourlabel);
    
    $('#hrs-'+h).children().eq(1).addClass('col-8 col-md-10 description');
    $('#hrs-'+h).children().eq(2).addClass('btn saveBtn col-2 col-md-1');
    $('#hrs-'+h).children().eq(2).children().addClass('fas fa-save');

    h++;
  });

// Retrieving stored names and scores:
var text =[];
var saveId=[];
init()

// Displaying Current Day and Retrieving current time:
var currentDay = dayjs().format('dddd, MMMM DD, YYYY.');
$('#currentDay').text(currentDay);
var time = dayjs().format('H');
// var time = 15;  //uncomment and choose a time to test. 

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
  var theId = this.id;
  var name = $(this).siblings('#texta').children().val();
  saveId.push(theId);
  text.push(name);
  localStorage.setItem("Scheduler", JSON.stringify(text));
  localStorage.setItem("SchedulerId", JSON.stringify(saveId));
});

//Retrieving name and score from local storage:
function init(){
  var stored = JSON.parse(localStorage.getItem("Scheduler"));
  var storedId = JSON.parse(localStorage.getItem("SchedulerId"));
  if (stored != null){
    text = stored;
    saveId = storedId;    

    var fr =-1;
    $('.time-block').each(function () { // printing the saved data. 
      fr ++;
      var am = saveId[fr];
      $('#texta_'+am).text(text[fr]);
    });
  }

}

// button to errase the data 
var deletesched = $('.deletesched');
deletesched.on('click', function (event) {
  localStorage.clear();

  for (i=9;i<17;i++){
    $('#texta_'+i).text("");
  }
  
});
