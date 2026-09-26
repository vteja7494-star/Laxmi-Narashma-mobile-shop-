const SUPABASE_URL = "https://antkerjfmdmyitiehnty.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "PASTE_KEY_HERE";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");

  if (navLinks) {
    navLinks.classList.toggle("active");
  }
}

function closeMenu() {
  const navLinks = document.getElementById("navLinks");

  if (navLinks) {
    navLinks.classList.remove("active");
  }
}

function showContact() {
  alert(
    "MobileFix Support\n\n" +
    "Phone: 9876543210\n" +
    "WhatsApp: 9876543210"
  );
}

function bookService(service) {
  const problem = document.getElementById("problem");

  if (problem) {
    problem.value = service;
  }

  const bookingSection = document.getElementById("booking");

  if (bookingSection) {
    bookingSection.scrollIntoView({
      behavior: "smooth"
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {

  const bookingForm = document.getElementById("bookingForm");

  if (!bookingForm) {
    return;
  }

  bookingForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value.trim();
    const problem = document.getElementById("problem").value;
    const serviceType = document.getElementById("serviceType").value;
    const repairDate = document.getElementById("repairDate").value;

    if (
      !name ||
      !phone ||
      !brand ||
      !model ||
      !problem ||
      !serviceType ||
      !repairDate
    ) {
      alert("Please fill all details.");
      return;
    }

    const bookingId =
      "MF" + Date.now().toString().slice(-8);

    const { error } = await supabaseClient
      .from("bookings")
      .insert([{
        booking_id: bookingId,
        name: name,
        phone: phone,
        brand: brand,
        model: model,
        problem: problem,
        service_type: serviceType,
        repair_date: repairDate,
        status: "Booked"
      }]);

    if (error) {
      alert("Booking save avvaledu.\n\n" + error.message);
      return;
    }

    alert(
      "BOOKING CONFIRMED! 🎉\n\n" +
      "Booking ID: " +
      bookingId
    );

    bookingForm.reset();
  });
});
