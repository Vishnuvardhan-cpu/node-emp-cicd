const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <div style="text-align:center; margin-top:50px; font-family:Arial;">
            <h1 style="color:#0078d4;">Vishnuvardhan Automated Enterprise! 🤖⚡</h1>
            <p style="font-size:18px;">CI/CD Pipeline is successfully running using GitHub Actions! happy happy</p>
            <div style="background:#e1dfdd; padding:20px; display:inline-block; border-radius:8px;">
                <h3>Deployment Status: Auto-Updated 🟢</h3>
                <p>Automation Lead: Vishnu Vardhan</p>
            </div>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
