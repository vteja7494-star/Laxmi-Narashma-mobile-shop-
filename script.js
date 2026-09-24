cconst SUPABASE_URL = "https://antkerjfmdmyitiehnty.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "YOUR_PUBLISHABLE_KEY_HERE";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);


function toggleMenu() {
  const nav = document.getElementById("navLinks");

  if (nav) {
    nav.classList.toggle("active");
  }
}


function closeMenu() {
  const nav = document.getElementById("navLinks");

  if (nav) {
    nav.classList.remove("active");
  }
}


function bookService(service) {
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
    "Welcome to MobileFix!\n\n" +
    "Our team will help you with your mobile repair."
  );
}


const bookingForm = document.getElementById("bookingForm");


if (bookingForm) {

  bookingForm.addEventListener("submit", async function(event) {

    event.preventDefault();


    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const problem = document.getElementById("problem").value;
    const serviceType = document.getElementById("serviceType").value;
    const repairDate = document.getElementById("repairDate").value;


    const bookingId =
      "MF" + Math.floor(100000 + Math.random() * 900000);


    const { error } = await supabaseClient
      .from("bookings")
      .insert([
        {
          booking_id: bookingId,
          name: name,
          phone: phone,
          brand: brand,
          model: model,
          problem: problem,
          service_type: serviceType,
          repair_date: repairDate,
          status: "Booked"
        }
      ]);


    if (error) {

      console.error(error);

      alert(
        "Booking save avvaledu.\n\n" +
        "Please try again."
      );

      return;
    }


    alert(
      "BOOKING CONFIRMED!\n\n" +
      "Booking ID: " + bookingId +
      "\nName: " + name +
      "\nPhone: " + phone +
      "\nBrand: " + brand +
      "\nModel: " + model +
      "\nProblem: " + problem +
      "\nService: " + serviceType +
      "\nDate: " + repairDate +
      "\n\nMobileFix team will contact you."
    );


    bookingForm.reset();

  });

}EnterookingForm.reset();

  });

}
