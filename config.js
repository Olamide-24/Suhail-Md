const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2347044903733" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347044903733";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 9999
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2347044903733";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_58_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgODcsXG4gICAgICAgIDk1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDY1LFxuICAgICAgICAxODgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjksXG4gICAgICAgIDQ1LFxuICAgICAgICAwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3LFxuICAgICAgICAwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA1NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTksXG4gICAgICAgIDI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzLFxuICAgICAgICAyOCxcbiAgICAgICAgMixcbiAgICAgICAgMTkzLFxuICAgICAgICA4NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzgsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjksXG4gICAgICAgIDgxLFxuICAgICAgICAxNixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA3OSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAzNixcbiAgICAgICAgMjM3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTksXG4gICAgICAgIDcxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNixcbiAgICAgICAgNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTczLFxuICAgICAgICA5MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY3LFxuICAgICAgICA2OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDkzLFxuICAgICAgICAyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVwSmlBTU1mNnBPQnJuQzNFdWFmQy9nNFhSSmthNnVtbDRCQXFTN3J5N1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA0NDkwMzczM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTFCMkE1QTBCMTkwNzc2OTY0OUFDRjAzQTY2OUNBODdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5Nzg0NzExXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFIVk5LU1dRUnZXQmoxZ0d0NG5ybGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTY3ZTBmMDQtNzBmMC00NzQxLTg3NTMtN2Y5OWVmYWU2MWIxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc3LFxuICAgICAgMTA5LFxuICAgICAgMjQ0LFxuICAgICAgMzksXG4gICAgICAxMDgsXG4gICAgICAxODYsXG4gICAgICAxNjQsXG4gICAgICA5MSxcbiAgICAgIDExLFxuICAgICAgNTYsXG4gICAgICA5OSxcbiAgICAgIDExNSxcbiAgICAgIDI1NCxcbiAgICAgIDE4LFxuICAgICAgMTMzLFxuICAgICAgNDYsXG4gICAgICAxOTgsXG4gICAgICAxMTUsXG4gICAgICAxOTQsXG4gICAgICAyNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjgsXG4gICAgICAyMzksXG4gICAgICAxNCxcbiAgICAgIDIyMSxcbiAgICAgIDMsXG4gICAgICA3NixcbiAgICAgIDIwOCxcbiAgICAgIDE3OSxcbiAgICAgIDEyOSxcbiAgICAgIDQ4LFxuICAgICAgMTY0LFxuICAgICAgMjI3LFxuICAgICAgMjI1LFxuICAgICAgODQsXG4gICAgICAxNjgsXG4gICAgICAyNDUsXG4gICAgICAxMTUsXG4gICAgICAyMjcsXG4gICAgICAyMzEsXG4gICAgICAyMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ0c2QUI4UFJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDQ5MDM3MzM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTEwNjY2NjEzNTE2Mjg6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMK0I0U3NRL3FtSHRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkN2TkVoTTZRU0oyNjFrRlNrSHd3cGJiY2ZnbkJ5S2NrUitvenBleU4yR009XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTXpDd2R1Y1JSNm9DK1BodG41UFJCMTU2a29wYnpHMUJmOW9pdHBvVTVrR1hFN2gwYW81TmNVWmxyWTZyRDVGUVhkbng3d1p6ZGJzVkZ0ekR0MmZ3Q3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibU9ENTE2eVZKQklSRzI1YURuVTk3RHJJb1dNRDJhdUhieUVHNHJqbHRPWlNqeER1R2owVXMwc2NId1pjUWY0WlF5YmpYdG5mU3NZOXZ3NmhWT24yZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0NDkwMzczMzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5Nzg0NzA1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT0RGXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPREYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4d2JMRjd2NENpenRIT3RhNFV5T1VqOUtlekgwTVV2SHgrZG10NHFHTTcwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkxNzY2OTc1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk3ODQ3MTA4NTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
