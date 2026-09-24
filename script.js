const SUPABASE_URL = "https://antkerjfmdmyitiehnty.supabase.co";

// IMPORTANT: quotes madhya mee FULL sb_publishable_... key paste cheyyi
const SUPABASE_PUBLISHABLE_KEY = "PASTE_YOUR_FULL_PUBLISHABLE_KEY_HERE";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);


// MOBILE MENU
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


// CONTACT SUPPORT
function showContact() {
  alert(
    "MobileFix Support\n\n" +
    "Phone: 9876543210\n" +
    "WhatsApp: 9876543210"
  );
}


// SERVICE ESTIMATE
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


// BOOKING
document.addEventListener("DOMContentLoaded", function () {

  const bookingForm = document.getElementById("bookingForm");

  if (!bookingForm) {
    return;
  }

  bookingForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
   
