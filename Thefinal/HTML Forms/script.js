
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        if (name.trim() === "") {
            alert("กรุณากรอกชื่อ");
            return;
        }

        const email = document.getElementById("email").value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email.trim() === "") {
            alert("กรุณากรอกอีเมล");
            return;
        } else if (!emailPattern.test(email)) {
            alert("กรุณากรอกอีเมลในรูปแบบที่ถูกต้อง เช่น example@example.com");
            return;
        }
        const phone = document.getElementById("phone").value;
        const phonePattern = /^[0-9]+$/;
        if (phone.trim() === "") {
            alert("กรุณากรอกเบอร์โทรศัพท์");
            return;
        } else if (!phonePattern.test(phone)) {
            alert("กรุณากรอกเบอร์โทรศัพท์ให้เป็นตัวเลขเท่านั้น");
            return;
        }
        const subject = document.getElementById("subject").value;
        if (subject === "") {
            alert("กรุณาเลือกหัวข้อที่ต้องการติดต่อ");
            return;
        }

        const message = document.getElementById("message").value;
        if (message.trim() === "") {
            alert("กรุณากรอกข้อความ");
            return;
        }

        alert("ฟอร์มถูกต้องและพร้อมส่งข้อมูล");
        form.submit(); 
    });

    const resetButton = document.querySelector("button[type='reset']");
    resetButton.addEventListener("click", function () {
        clearAlerts();
    });
});

function clearAlerts() {
    const alertMessages = document.querySelectorAll(".alert");
    alertMessages.forEach(alert => {
        alert.remove();
    });
}
