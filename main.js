var moment = moment().format("dddd, MMM Do YYYY");

document.getElementById("moment").append(moment)



// smooth scrolling
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


// random facts
var facts_array = [
  "I can transcribe legal testimony at over 225 words per minute",
  "Played basketball against several players who ended up in the NBA",
  "I've eaten Pizza Hut in over 9 different countries"
]

const random_fact = () => {
  let numberOfFacts = facts_array.length;

}

document.getElementById("random_fact").append(facts_array[1])