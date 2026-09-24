ffunction bookService(service) {
  const problem = document.getElementById("problem");

  if (problem) {
    problem.value = service;
  }

  document.getElementById("booking").scrollIntoView({
    behavior: "smooth"
  });
}

function showContact() {
  alert(
    "Welcome to MobileFix!\n\nOur team will help you with your mobile repair."
  );
}

document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const brand = document.getElementById("brand").value;
    const problem = document.getElementById("problem").value;

    alert(
      "Repair Booking Created!\n\n" +
      "Name: " + name +
      "\nPhone: " + phone +
      "\nBrand: " + brand +
      "\nProblem: " + problem
    );

    this.reset();
  });Enter;
