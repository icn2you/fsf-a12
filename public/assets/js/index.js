// On page load ...
$(document).ready(() => {
  /*
    Thanks to Jano González for [this function][url]

    [url]: https://stackoverflow.com/questions/154059/how-can-i-check-for-an-empty-undefined-null-string-in-javascript
  */
  function isBlank(str) {
    return (!str || /^\s*$/.test(str));
  }
  
  $('#order-btn').on('click', (event) => {
    event.preventDefault();
    
    const newBurger = $(".burger").val().trim();

    // If a burger was specified, then update the db.
    if (!isBlank(newBurger)) {
      // Send the POST request.
      $.ajax('/', {
        type: 'POST',
        data: { name: newBurger }
      }).then(() => {
        console.log("New veggie burger created!");
          
        // Reload the page to get the updated list
        location.reload();
      });
    }
    else {
      $('#alert-msg').text('You did not specify a veggie burger.');
      
      $('#alert-modal').modal('toggle');
    }
  });

  $('.devour').on('click', function(event) {
    const id = $(this).data('id'),
          name = $(this).data('name'),
          eaten = { devoured: true };

    // Send the PUT request.
    $.ajax(`/id`, {
      type: "PUT",
      data: eaten
    }).then(() => {
        console.log(`${name} voraciously devoured!`);
        
        // Reload the page to get the updated list
        location.reload();
    });
  });
});
