document.addEventListener("DOMContentLoaded", () => {
  const paymentForm = document.getElementById("paymentForm");
  
  if (paymentForm) {
    paymentForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const cardNumber = document.getElementById("cardNumber").value.trim();
      const expMonth = document.getElementById("expMonth").value.trim();
      const expYear = document.getElementById("expYear").value.trim();
      const cvv = document.getElementById("cvv").value.trim();
      const errorMsg = document.getElementById("errorMsg");
      errorMsg.textContent = "";

      if (!name || !cardNumber || !expMonth || !expYear || !cvv) {
        errorMsg.textContent = "All fields must be filled out.";
        return;
      }

      const mastercardRegex = /^5[1-5][0-9]{14}$/;
      if (!mastercardRegex.test(cardNumber)) {
        errorMsg.textContent = "Card must be a valid 16-digit MasterCard starting with 51–55.";
        return;
      }

      if (!/^\d{3,4}$/.test(cvv)) {
        errorMsg.textContent = "CVV must be 3 or 4 digits.";
        return;
      }

      const month = parseInt(expMonth);
      if (month < 1 || month > 12) {
        errorMsg.textContent = "Expiry month must be between 01 and 12.";
        return;
      }

      const year = parseInt(expYear);
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth() + 1;

      if (year < currentYear || (year == currentYear && month < currentMonth)) {
        errorMsg.textContent = "Card is expired.";
        return;
      }

      const postData = {
        master_card: Number(cardNumber),
        exp_year: Number(expYear),
        exp_month: Number(expMonth),
        cvv_code: cvv
      };

      try {
        const response = await fetch("https://mudfoot.doc.stu.mmu.ac.uk/node/api/creditcard", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(postData)
        });

        const data = await response.json();

        if (response.ok) {
          sessionStorage.setItem("last4", cardNumber.slice(-4));
          sessionStorage.setItem("message", data.message || "Thank you for your payment.");
          window.location.href = "success.html";
        } else {
          errorMsg.textContent = data.message || "Payment failed. Please check your details.";
        }
      } catch (err) {
        errorMsg.textContent = "Network error. Please try again later.";
      }
    });
  }
});
