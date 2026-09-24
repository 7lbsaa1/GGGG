# sky7
منصة صور عربية مبنية بـ HTML/CSS/JavaScript + Firebase.

## التشغيل
افتح المشروع في VS Code وشغّل Live Server ثم افتح `index.html`.

## ملاحظة المسارات
نسخة VS Code الثابتة تستخدم ملفات `.html` حتى تعمل مباشرة بدون خادم إعادة كتابة.
إذا أردت `/login` و`/home` حرفيًا، استخدم استضافة تدعم rewrites مثل Vercel/Netlify أو خادمًا يوجّه المسارات إلى ملفات HTML.

## Firebase
تم وضع إعداد Firebase Web في `js/firebase.js` وفق الإعداد الموجود في المواصفات.
يجب ضبط Firebase Authentication وRealtime Database Rules قبل الاستخدام الحقيقي.

## الإدارة
لا تعتمد على إخفاء صفحات الإدارة. يجب تطبيق صلاحيات حقيقية في Firebase Security Rules/Custom Claims قبل النشر العام.
