document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const pickup = document.getElementById("pickup").value;
  const returnd = document.getElementById("return").value;

  if (pickup && returnd) {
    alert(`✅ Booking confirmed!\nPickup: ${pickup}\nReturn: ${returnd}`);
  } else {
    alert("⚠️ Please select both pickup and return dates.");
  }
});
