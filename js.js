const buttons = document.querySelectorAll(".button");

// Add click event listener to each button

buttons.forEach(button => {

  button.addEventListener("click", () => {

    alert("You have clicked button " + button.innerHTML);

  });

});

