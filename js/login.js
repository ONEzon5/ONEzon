const methodSelect = document.getElementById("method");
const phoneSection = document.getElementById("phoneSection");
const emailSection = document.getElementById("emailSection");

methodSelect.addEventListener("change", () => {
  if (methodSelect.value === "phone") {
    phoneSection.style.display = "block";
    emailSection.style.display = "none";
  } else {
    phoneSection.style.display = "none";
    emailSection.style.display = "block";
  }
});

function sendCode() {
  const phone = document.getElementById("phone").value;
  if (phone) {
    alert(`تم إرسال رمز تأكيد إلى الرقم: ${phone}`);
  } else {
    alert("يرجى إدخال رقم الهاتف أولاً");
  }
}

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("تم تسجيل الدخول / إنشاء الحساب بنجاح (نموذج تجريبي)");
});
