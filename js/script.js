// JavaScript for FIXED Enquiry Form
$(document).ready(function() {
    

   // Logo


  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var logo = document.getElementById('logo');

    
    if (window.scrollY > 50) { // Adjust scroll value as needed
        navbar.classList.add('scrolled');
        logo.src = '../img/logo_with_text_for_white_bg.jpg'; // Black logo for white background
    } else {
        navbar.classList.remove('scrolled');
        logo.src = '../img/logo_with_text_for_black_bg.jpg'; // White logo for black background
    }
});

    // Handle form submission
    $("#fixed-form form").submit(function(e) {
        e.preventDefault(); // Prevent the default form submission
        
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbz9Q02PKB7WulZemt-S-LgjjJqf5I8xO2NxaJXDNyhKed5suDYSD7L7blrN-mfohCg-sw/exec",
            data: $(this).serialize(), // Serialize form data
            method: "post",
            success: function(response) {
                // Replace form content with success message
                const formContent = document.querySelector('#fixed-form');
                formContent.innerHTML = '<div class="success-message">Your details have been submitted. Thanks! <span class="close-btn" id="success-close-btn">&times;</span></div>';
                
                // Hide the form after 3 seconds
                setTimeout(function () {
                    document.getElementById('fixed-form').style.display = 'none';
                }, 6000); // Hide after 3 seconds

                // Add event listener for the close button in the success message
                document.getElementById('success-close-btn').addEventListener('click', function () {
                    document.getElementById('fixed-form').style.display = 'none';
                });
            },
            error: function(err) {
                alert("Something went wrong. Please try again.");
            }
        });
    });

    // Open the enquiry form on button click
    document.getElementById("open-enquiry-form").addEventListener("click", function () {
        document.getElementById("fixed-form").style.display = "flex";
    });
    
    // Close the enquiry form on clicking outside of it
    window.onclick = function(event) {
        if (event.target == document.getElementById("fixed-form")) {
            document.getElementById("fixed-form").style.display = "none";
        }
    };


   
});
