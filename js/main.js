(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
  

// Logo


  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var logo = document.getElementById('logo');

    
    if (window.scrollY > 50) { // Adjust scroll value as needed
        navbar.classList.add('scrolled');
        logo.src = './img/logo_with_text_for_white_bg.jpg'; // Black logo for white background
    } else {
        navbar.classList.remove('scrolled');
        logo.src = './img/logo_with_text_for_black_bg.jpg'; // White logo for black background
    }
});



// Gallery


let slideIndex = 1;
    
const destinationImages = {
    destination1: [
        './img/gallery/mauritius/beach-666122_1920.jpg',
        './img/gallery/mauritius/beach-1955371 (1).jpg',
        'destination1_image3.jpg',
    ],
    destination2: [
        'destination2_image1.jpg',
        'destination2_image2.jpg',
        'destination2_image3.jpg',
    ],
    destination3: [
        'destination3_image1.jpg',
        'destination3_image2.jpg',
        'destination3_image3.jpg',
    ],
};

function openDestinationGallery(destination) {
    const galleryContent = document.getElementById('destination-gallery-content');
    galleryContent.innerHTML = '';

    destinationImages[destination].forEach((imgSrc, index) => {
        const slide = document.createElement('div');
        slide.classList.add('lightbox-slide');
        slide.innerHTML = `<img src="${imgSrc}" alt="Image ${index + 1}">`;
        galleryContent.appendChild(slide);
    });

    openLightbox();
    showSlides(slideIndex);
}

function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
    showSlides(slideIndex);
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName('lightbox-slide');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}



//fixed enquiry form

document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.faq-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const parentFaq = toggle.parentNode;
            parentFaq.classList.toggle('active');
        });
    });
});



//Enquiry-form

    $(document).ready(function() {
        // Show the form after 5 seconds
        setTimeout(function() {
            document.getElementById("enquiry-form").style.display = "flex";
        }, 500000); // 5000 milliseconds = 5 seconds

        // Close the form when close button is clicked
        document.getElementById("close-btn").addEventListener("click", function () {
            document.getElementById("enquiry-form").style.display = "none";
        });

        // Open the enquiry form on button click
        document.getElementById("open-enquiry-form").addEventListener("click", function () {
            document.getElementById("enquiry-form").style.display = "flex";
        });

        // Close the enquiry form when clicking outside
        window.onclick = function(event) {
            if (event.target == document.getElementById("enquiry-form")) {
                document.getElementById("enquiry-form").style.display = "none";
            }
        };

        // Handle form submission
        $("#submit-form").submit(function(e) {
            e.preventDefault(); // Prevent default form submission
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbzqkWedGj05DP6rw4jyyvf16sLK8JY75iT5oWJ9QcQ_YTW2Hqss_jBW3plIOYCkDVJQ9Q/exec",
                data: $("#submit-form").serialize(),
                method: "post",
                success: function(response) {
                    // Replace form content with success message
                    const formContent = document.querySelector('.right-col');
                    formContent.innerHTML = `
                        <div class="success-message">
                        <h2>THANK YOU!</h2>
                            <i class="fas fa-check-circle"></i>
                            <p>Your details have been submitted. Thanks!</p>
                        </div>`;
                    
                    // Add event listener for the close button in the success message
                    document.getElementById('success-close-btn').addEventListener('click', function () {
                        document.getElementById('enquiry-form').style.display = 'none';
                    });

                    // Optionally hide the form after some time
                    setTimeout(function () {
                        document.getElementById('enquiry-form').style.display = 'none';
                    }, 1000000); // Hide after 5 seconds
                },
                error: function(err) {
                    alert("Something went wrong");
                }
            });
        });
    });


})(jQuery);

