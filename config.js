const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "dYBH1TZa#zjc4wdP-U_FcnL7qKvzhbMS9chXe_YX-CaEMIP_N8Hk",
ALIVE_REACT: process.env.ALIVE_REACT || "🥵",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/5vp4rr.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "KAVI EXE_V1_Connected ☑️_📂𝙳𝙴𝙿𝙻𝚈 𝙱𝚈 KAVI_EXE📘☀",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
ALWAYS_ONLINE : process.env.ALWAYS_ONLINE || "true",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*SEEN YOUR STATUS BY KAVI-EXE 🤍*",
};
