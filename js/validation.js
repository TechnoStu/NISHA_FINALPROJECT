document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("#feedbackForm");

// Function to validate the form
function validateForm() {
    let validated = true;

    // Validate name
    const nameField = document.getElementById('name');
    const nameValue = nameField.value.trim();
    if (nameValue === '') {
        validated = false;
        nameField.focus();
        alert('Please enter your name.');
        return validated;
    }

    // Validate email
    const emailField = document.getElementById('email');
    const emailValue = emailField.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === '' || !emailRegex.test(emailValue)) {
        validated = false;
        emailField.focus();
        alert('Please enter a valid email address.');
        return validated;
    }

     // Validate Location You Visited
     const locationField = document.getElementById('location');
     if (locationField.value === '') {
         validated = false;
         locationField.focus();
         alert('Please select the location you visited.');
         return validated;
     }

      // Validate Day Visited
      const dayVisitedField = document.getElementById('dayvisited');
      if (dayVisitedField.value === '') {
          validated = false;
          dayVisitedField.focus();
          alert('Please select the day you visited.');
          return validated;
      }

       // Validate Duration of Trip
       const tripDurationField = document.getElementById('trip_duration');
       if (tripDurationField.value === '' || tripDurationField.value < 1) {
           validated = false;
           tripDurationField.focus();
           alert('Please enter a valid duration for your trip (minimum 1 day).');
           return validated;
       }


      // Validate phone number
      const phoneField = document.getElementById('phone');
      const phoneValue = phoneField.value.trim();
      const phoneRegex = /^[0-9]{10}$/; // phone number format
      if (phoneValue === '' || !phoneRegex.test(phoneValue)) {
          validated = false;
          phoneField.focus();
          alert('Please enter a valid phone number.');
          return validated;
      }
    
     // Validate comments
     const commentsField = document.querySelector('textarea[name="comments"]');
     const commentsValue = commentsField.value.trim();
     if (commentsValue === '') {
         validated = false;
         commentsField.focus();
         alert('Please provide your comments or suggestions.');
         return validated;
     }

     // Get all radio button groups
    const radioButtonGroups = document.querySelectorAll('tr');

    // Iterate through each radio button group
    radioButtonGroups.forEach((group) => {
        // Ignore the first row (table header)
        if (group.querySelector('th')) {
            return;
        }

        // Check if any radio button is selected in the group
        const selectedValue = group.querySelector('input[type="radio"]:checked');
        
        if (!selectedValue) {
            validated = false;
            group.querySelector('input[type="radio"]').focus();
            alert('Please select an option for ' + group.querySelector('td').innerText);
            return;
        }

       
    });

    return validated;
}

// Event listener for form submission
document.getElementById('feedbackForm').addEventListener('click', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission
    }
  
    
});

});
