cconst SUPABASE_URL = "https://antkerjfmdmyitiehnty.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "YOUR_PUBLISHABLE_KEY_HERE";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);


// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
}


// ===============================
// BOOK SERVICE BUTTON
// ===============================

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


// ===============================
// BOOKING FORM
// ===============================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value.trim();
    const problem = document.getElementById("problem").value;
    const serviceType = document.getElementById("serviceType").value;
    const repairDate = document.getElementById("repairDate").value;

    if (!name || !phone || !brand || !model || !problem) {
      alert("Please fill all required details.");
      return;
    }

    const bookingId =
      "MF" +
      Date.now().toString().slice(-8);

    try {

      const { data, error } = await supabaseClient
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

        console.error("Supabase Error:", error);

        alert(
          "Booking save avvaledu.\n\n" +
          "Please check Supabase settings."
        );

        return;
      }

      alert(
        "BOOKING CONFIRMED! 🎉\n\n" +
        "Booking ID: " + bookingId
      );

      bookingForm.reset();

    } catch (error) {

      console.error("Error:", error);

      alert(
        "Something went wrong.\n\n" +
        "Please try again."
      );
    }

  });
}Enter
      );
    }

  });
}
