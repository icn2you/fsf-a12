// On page load ...
$(document).ready(() => {
  $('#order-form').on('submit', (event) => {
    event.preventDefault();

    const newBurger = { name: $("#burger").val().trim() };

    // Send the POST request.
    $.ajax('/', {
      type: 'POST',
      data: newBurger
    }).then(() => {
        console.log("New veggie burger created!");
        
        // Reload the page to get the updated list
        location.reload();
      });
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
