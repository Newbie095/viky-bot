/*
    Created & Base By ArxzyDev
    Jual Sc? Neraka Paling Bawah
    My Contact https://wa.me/6289513081052
    
   Notes:
   Jika Ingin Recode Silakan Tapi Ingat Creditnya
   Sc Adrian-MD Akan Terus Di Update.
   Jika Ingin Beli Apikey Chat Owner Lolhuman
   
*/

const fs = require('fs')
const chalk = require('chalk')

global.apikey = '' // LOLHUMAN
global.ibeng = 'tamvan' // FREE APIKEY IBENG
global.rosekey = 'cba86fac49e37d63f9bd4561' // ROSE
global.keyai = '' // https://platform.openai.com/account/api-keys

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'ᴋᴏɴᴇᴋᴏ-ᴍᴅ'
global.namaowner = '𝚔𝚘𝚒'
global.wagc = "https://chat.whatsapp.com/HcCRmsV8l0q4gLstSQsLkA"

//—————「 Setting Owner a」—————//
global.owner = ['6283197997081']
global.nomerowner = '6283197997081'
global.premium = ['6283197997081']

//—————「 Set Wm 」—————//
global.packname = 'shin-ᴍᴅ'
global.author = 'Bot: +62 895-3253-44177\nYouTube: QyuuNee\nInstagram: iamunderox_'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗Done, Oke Desu~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !\n\n🎯 *Premium Cuma 10k Permanen* 😋',
    error: '🚫 Fitur Sedang Error !',
    prem: '🚫 Fitur Khusus Premium!\n\n♨️ Buy Premium Cuma 5k Permanen',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 100
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/7c134f718f8babd2185a1.png'
global.link = 'https://youtu.be/dOycbiwwVo0'
global.thumb = fs.readFileSync('./media/koneko.jpg')
global.logo = fs.readFileSync('./media/logo.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
