/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Parallax
5. Init Google Map
6. Handle Contact Form


******************************/

$(document).ready(function () {
  "use strict";

  /* 

	1. Vars and Inits

	*/

  var ctrl = new ScrollMagic.Controller();
  var header = $(".header");
  var menuActive = false;
  var hamb = $(".hamburger_container");
  var menu = $(".fs_menu_container");
  var hambIcon = $(".hamburger_icon");
  var map;

  setHeader();

  $(window).on("resize", function () {
    setHeader();
  });

  $(document).on("scroll", function () {
    setHeader();
  });

  initMenu();
  initParallax();
  initGoogleMap();
  initContactForm();

  /* 

	2. Set Header

	*/

  function setHeader() {
    if (window.innerWidth < 992) {
      if ($(window).scrollTop() > 100) {
        header.css({ height: "80" });
      } else {
        header.css({ height: "110" });
      }
    } else {
      if ($(window).scrollTop() > 100) {
        header.css({ height: "80" });
      } else {
        header.css({ height: "110" });
      }
    }
    if (window.innerWidth > 991 && menuActive) {
      closeMenu();
    }
  }

  /* 

	3. Init Menu

	*/

  function initMenu() {
    if ($(".hamburger_container").length) {
      hamb.on("click", function () {
        if (!menuActive) {
          openMenu();
        } else {
          closeMenu();
        }
      });
    }
  }

  function openMenu() {
    menu.addClass("active");
    setTimeout(function () {
      hambIcon.addClass("active");
    }, 500);
    menuActive = true;
  }

  function closeMenu() {
    menu.removeClass("active");
    setTimeout(function () {
      hambIcon.removeClass("active");
    }, 500);
    menuActive = false;
  }

  /* 

	4. Init Parallax

	*/

  function initParallax() {
    if ($(".prlx_parent").length && $(".prlx").length) {
      var elements = $(".prlx_parent");

      elements.each(function () {
        var ele = this;
        var bcg = $(ele).find(".prlx");

        var slideParallaxScene = new ScrollMagic.Scene({
          triggerElement: ele,
          triggerHook: 1,
          duration: "200%",
        })
          .setTween(TweenMax.from(bcg, 1, { y: "-30%", ease: Power0.easeNone }))
          .addTo(ctrl);
      });
    }
  }

  /* 

	5. Init Google Map

	*/

  function initGoogleMap() {
    var myLatlng = new google.maps.LatLng(36.138101, -5.355313);
    var mapOptions = {
      center: myLatlng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      draggable: true,
      scrollwheel: false,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER,
      },
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: true,
      styles: [],
    };

    // Initialize a map with options
    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Use an image for a marker
    var image = "images/map_marker.png";
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(36.138101, -5.355313),
      map: map,
      icon: image,
    });

    // Re-center map after window resize
    google.maps.event.addDomListener(window, "resize", function () {
      setTimeout(function () {
        google.maps.event.trigger(map, "resize");
        map.setCenter(myLatlng);
      }, 1400);
    });
  }

  /* 

	6. Handle Contact Form

	*/

  function initContactForm() {
    console.log("Initializing contact form handler");

    // Test if form elements exist
    console.log("Form exists:", $("#reply_form").length > 0);
    console.log("Submit button exists:", $("#contact_form_submit").length > 0);
    console.log("Name input exists:", $("#contact_form_name").length > 0);
    console.log("Email input exists:", $("#contact_form_email").length > 0);
    console.log("Subject input exists:", $("#contact_form_subject").length > 0);
    console.log(
      "Message textarea exists:",
      $("#contact_form_message").length > 0
    );
    console.log("Success message exists:", $("#success_message").length > 0);

    try {
      // Method 1: Form submit event
      $("#reply_form").on("submit", function (e) {
        console.log("Form submitted via form submit event");
        e.preventDefault();

        try {
          // Get form data
          var formData = {
            name: $("#contact_form_name").val(),
            email: $("#contact_form_email").val(),
            subject: $("#contact_form_subject").val(),
            message: $("#contact_form_message").val(),
          };

          console.log("Form data:", formData);

          // Here you would typically send the data to your server
          // For now, we'll just simulate a successful submission
          setTimeout(function () {
            // Clear the form
            $("#reply_form")[0].reset();

            // Show success message
            $("#success_message").fadeIn();

            // Hide success message after 3 seconds
            setTimeout(function () {
              $("#success_message").fadeOut();
            }, 3000);
          }, 500);
        } catch (error) {
          console.error("Error processing form submission:", error);
        }
      });

      // Method 2: Button click event
      $("#contact_form_submit").on("click", function (e) {
        console.log("Form submitted via button click");
        e.preventDefault();

        try {
          // Get form data
          var formData = {
            name: $("#contact_form_name").val(),
            email: $("#contact_form_email").val(),
            subject: $("#contact_form_subject").val(),
            message: $("#contact_form_message").val(),
          };

          console.log("Form data:", formData);

          // Here you would typically send the data to your server
          // For now, we'll just simulate a successful submission
          setTimeout(function () {
            // Clear the form
            $("#reply_form")[0].reset();

            // Show success message
            $("#success_message").fadeIn();

            // Hide success message after 3 seconds
            setTimeout(function () {
              $("#success_message").fadeOut();
            }, 3000);
          }, 500);
        } catch (error) {
          console.error("Error processing form submission:", error);
        }
      });

      // Test button jQuery handler
      $("#test_form_submission").on("click", function () {
        console.log("Test button clicked via jQuery");

        // Show success message
        $("#success_message").fadeIn();

        // Hide success message after 3 seconds
        setTimeout(function () {
          $("#success_message").fadeOut();
        }, 3000);
      });
    } catch (error) {
      console.error("Error initializing contact form:", error);
    }

    // Method 3: Direct DOM event listener
    document.addEventListener("DOMContentLoaded", function () {
      var form = document.getElementById("reply_form");
      if (form) {
        form.addEventListener("submit", function (e) {
          console.log("Form submitted via direct DOM event listener");
          e.preventDefault();

          // Get form data
          var formData = {
            name: document.getElementById("contact_form_name").value,
            email: document.getElementById("contact_form_email").value,
            subject: document.getElementById("contact_form_subject").value,
            message: document.getElementById("contact_form_message").value,
          };

          console.log("Form data:", formData);

          // Clear the form
          form.reset();

          // Show success message
          var successMessage = document.getElementById("success_message");
          if (successMessage) {
            successMessage.style.display = "block";

            // Hide success message after 3 seconds
            setTimeout(function () {
              successMessage.style.display = "none";
            }, 3000);
          }
        });
      }

      // Test button handler
      var testButton = document.getElementById("test_form_submission");
      if (testButton) {
        testButton.addEventListener("click", function () {
          console.log("Test button clicked");

          // Show success message
          var successMessage = document.getElementById("success_message");
          if (successMessage) {
            successMessage.style.display = "block";

            // Hide success message after 3 seconds
            setTimeout(function () {
              successMessage.style.display = "none";
            }, 3000);
          }
        });
      }
    });
  }
});
