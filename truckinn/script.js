document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
        const targetId = this.getAttribute('href').substring(1);
        document.querySelectorAll('section').forEach(section => section.style.display = 'none');
        document.getElementById(targetId).style.display = 'block';
        e.preventDefault();
    });
});

document.querySelector('nav ul li a[href="#home"]').click();

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const deliveryDate = document.getElementById('delivery_date').value;
    const deliveryType = document.getElementById('delivery_type').value;
    const notes = document.getElementById('notes').value;
    const errorMessageElement = document.getElementById('error-message');
    let errorMessage = "";

    if (!name || !deliveryDate || !deliveryType) {
        errorMessage = "Please fill in all required fields.";
    }

    if (errorMessage) {
        errorMessageElement.textContent = errorMessage;
        errorMessageElement.style.display = "block";
        return;
    } else {
        errorMessageElement.style.display = "none";
    }

    const whatsappNumber = "+27685477326";
    let message = "New Truckinn Booking:\n" +
                      "Name: " + name + "\n" +
                      "Delivery Date: " + deliveryDate + "\n" +
                      "Delivery Type: " + deliveryType + "\n";
    if (notes) {
        message += "Notes: " + notes + "\n";
    }

    const whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);

    window.location.href = whatsappUrl;
});