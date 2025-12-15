// معلومات الدخول الخاصة بك كأدمن
const adminUsername = 'admin';
const adminPassword = '2015said';

// الاستماع لحدث إرسال النموذج
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // لمنع إعادة تحميل الصفحة عند تقديم النموذج

    const username = document.getElementById('username').value; // الحصول على اسم المستخدم
    const password = document.getElementById('password').value; // الحصول على كلمة المرور
    const messageBox = document.getElementById('messageBox'); // العنصر لعرض الرسالة

    // إخفاء أي رسائل سابقة
    messageBox.style.display = 'none';

    // التحقق من صحة اسم المستخدم وكلمة المرور
    if (username === adminUsername && password === adminPassword) {
        // إذا كانت صحيحة، عرض رسالة نجاح وتوجيه المستخدم إلى لوحة التحكم (Dashboard)
        messageBox.style.display = 'block';
        messageBox.textContent = 'Login successful! Redirecting to Dashboard...';
        messageBox.style.color = 'green'; // تغيير اللون إلى الأخضر
        setTimeout(function() {
            window.location.href = 'dashboard.html'; // استبدل بالمسار الفعلي لصفحة لوحة التحكم
        }, 1500); // تأخير لمدة 1.5 ثانية قبل التوجيه
    } else {
        // إذا كانت غير صحيحة، عرض رسالة خطأ
        messageBox.style.display = 'block';
        messageBox.textContent = 'Incorrect username or password!';
        messageBox.style.color = 'red'; // تغيير اللون إلى الأحمر
    }
});
