document.getElementById('contact-form').addEventListener('submit', function (e) {

  const name = document.querySelector('input[name="name"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();
  const message = document.querySelector('textarea[name="message"]').value.trim();


  if (!name || !email || !message) {
    alert('❗ Please fill in all fields before submitting.');
    e.preventDefault(); 
    return;
  }


  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('❗ Please enter a valid email address.');
    e.preventDefault();
    return;
  }


  alert("✅ Your message has been sent successfully!");
});
