document.addEventListener("DOMContentLoaded", function () {
  // VARIABLES
  const container = document.querySelector(".rainbow-container");
  // VARIABLES END

  // FUNCTIONALITY
  container.addEventListener("click", function (event) {
    if (event.target.classList.contains("color-div")) {
      const div = event.target;
      let computedColor = getComputedStyle(event.target).backgroundColor;
      if (computedColor === "rgb(255, 255, 255)") {
        div.style.backgroundColor = div.id;
      }
      // Error handling
      else {
        let errors = [];
        errors.push("Error!");
        alert(errors);
      }
    }
  });
  // FUNCTIONALITY END
});
