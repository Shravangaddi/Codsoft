document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(this);
      const formDataSerialized = Object.fromEntries(formData.entries());
      console.log(formDataSerialized);
      // You can add code here to send the form data to your backend or handle it as needed
    });
  });
  