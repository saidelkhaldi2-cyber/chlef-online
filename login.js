// معلومات الدخول الخاصة بك كأدمن
const adminUsername = 'admin';
const adminPassword = '2015said';

// الاستماع لحدث إرسال النموذج
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // لمنع إعادة تحميل الصفحة عند تقديم النموذج

    const username = document.getElementById('username').value; // الحصول على اسم المستخدم
    const password = document.getElementById('password').value; // الحصول على كلمة المرور

    // التحقق من صحة اسم المستخدم وكلمة المرور
    if (username === adminUsername && password === adminPassword) {
        // إذا كانت صحيحة، توجيه المستخدم إلى لوحة التحكم (Dashboard)
        window.location.href = 'dashboard.html'; // استبدل بالمسار الفعلي لصفحة لوحة التحكم
    } else {
        alert('Incorrect username or password!'); // إذا كانت غير صحيحة، عرض رسالة خطأ
    }
});
