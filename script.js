document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // stop reload

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      if (!name.value || !email.value || !message.value) {
        alert("Please fill in all fields before sending!");
        return;
      }

      if (!email.value.includes("@") || !email.value.includes(".")) {
        alert("Please enter a valid email address!");
        return;
      }

      alert("Message sent successfully! Thank you, " + name.value + "!");
      form.reset();
    });
  }
});

// ===== jQuery Part =====
$(document).ready(function () {

  // Fade in hero section smoothly
  $(".hero").hide().fadeIn(1200);

  // Smooth scroll effect for navbar links
  $("a.nav-link, a.btn").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $("html, body").animate(
        { scrollTop: $(hash).offset()?.top || 0 },
        700
      );
    }
  });

  // Toggle animation for menu cards
  $(".card").hover(
    function () {
      $(this).find(".card-body").slideDown(300);
    },
    function () {
      $(this).find(".card-body").slideUp(300).slideDown(0);
    }
  );

  // Fade animation for contact section
  $(".contact-section h1, .contact-section p, form").css("opacity", 0);
  $(".contact-section h1").delay(200).animate({ opacity: 1 }, 600);
  $(".contact-section p").delay(400).animate({ opacity: 1 }, 600);
  $("form").delay(600).animate({ opacity: 1 }, 600);
});
