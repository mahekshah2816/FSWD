const form = document.getElementById("contactForm");
const responseMsg = document.getElementById("responseMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    responseMsg.textContent = "Please fill in all fields.";
    responseMsg.className = "error";
    return;
  }

  responseMsg.textContent = "Sending...";
  responseMsg.className = "";

  try {
    const res = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();
    if (data.success) {
      responseMsg.textContent = "Message sent successfully!";
      responseMsg.className = "success";
      form.reset();
    } else {
      responseMsg.textContent = data.error || "Failed to send message.";
      responseMsg.className = "error";
    }
  } catch (err) {
    responseMsg.textContent = "Network error. Please try again later.";
    responseMsg.className = "error";
  }
});
