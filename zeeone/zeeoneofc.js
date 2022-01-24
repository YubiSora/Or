const numberik = '•'
const petik = '```'
const help = (prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii, tekss)=> {
	return`┌❏ *INDONESIA TIME*
${numberik}➛ WIB : ${timuu}
${numberik}➛ WITA : ${wita}
└❏ WIT : ${wit}
                          
┌❏ *TODAY*
${numberik}➛${ucapannya2}
${numberik}➛Jam : ${timuu}
${numberik}➛Hari : ${thisDay}
└❏ Tanggal : ${ini_tanggal}

┌❏ *DEVICE*
${numberik}➛Whatsapp : ${wa_version}
${numberik}➛Merk HP : ${device_manufacturer}
${numberik}➛Versi HP : ${device_model}
${numberik}➛Versi OS : ${os_version}
${numberik}➛RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
${numberik}➛MCC : ${mcc}
└❏ MNC : ${mnc}

┌─❑「 *BOT INFO* 」
${numberik}➛ Owner : ${ownername}
${numberik}➛Mode : ${status}
${numberik}➛Prefix : ${prefix}
${numberik}➛Total Hit : ${hit_today.length}
${numberik}➛Personal Chat : ${totalchat.length - ini_gcchat.lenght}
${numberik}➛Total All Chat : ${totalchat.length}
${numberik}➛Group Chat : ${ini_gcchat}
${numberik}➛Browser : Chrome
${numberik}➛Server : Baileys
${numberik}➛Version : 3.5.2
${numberik}➛Speed : ${latensii.toFixed(4)} Second
└❏ ${tekss}


┌❑ *LIST MENU* ❑
│
├❒ Allmenu 
├❒ Convertmenu
├❒ Asupanmenu
├❒ Downloadmenu
├❒ Funmenu
├❒ Makermenu
├❒ Othermenu
├❒ Ownermenu
├❒ Storagemenu
├❒ Tagmenu
├❒ Upmenu
├❒ Set_sticker_cmd
├❒ Gacha_cecan
├❒ Telegram_sticker
└❒ Image_effect

┌❑ *ABOUT* ❑
│
├❒ Source
├❒ ThanksTo
├❒ Group_support
└❒ Ownerbot

❒ _Creator BotWea © 2K21_ ❒
`
}
const convert = (prefix) => {
	return`┌❑ *CONVERT MENU* ❑
│
├❒ ${prefix}tts query
├❒ ${prefix}toimg [reply img]
├❒ ${prefix}tomp3 [reply vid]
├❒ ${prefix}tomp4 [reply stc]
├❒ ${prefix}togif [reply stc]
├❒ ${prefix}slow
├❒ ${prefix}tupai
├❒ ${prefix}fast
├❒ ${prefix}reverse
└❒ ${prefix}tourl [reply vid/img]
`
}
const download = (prefix) => {
	return`┌❑ *DOWNLOAD MENU* ❑
│
├❒ ${prefix}ytsearch [query]
├❒ ${prefix}ytshorts [url]
├❒ ${prefix}igstalk [username]
├❒ ${prefix}ghstalk [username]
├❒ ${prefix}play [query]
├❒ ${prefix}playmp4 [query]
├❒ ${prefix}video [query]
├❒ ${prefix}ytmp3 [link]
├❒ ${prefix}ytmp4 [link]
├❒ ${prefix}ig [link]
├❒ ${prefix}igphoto [link]
├❒ ${prefix}igvideo [link]
├❒ ${prefix}igtv [link]
├❒ ${prefix}igreels [link]
├❒ ${prefix}twitter [link]
├❒ ${prefix}tiktokwm [link]
├❒ ${prefix}tiktoknowm [link]
├❒ ${prefix}tiktokaudio [link]
├❒ ${prefix}facebook [link]
├❒ ${prefix}facebookhd [link]
├❒ ${prefix}facebooksd [link]
├❒ ${prefix}facebookaudio [link]
├❒ ${prefix}brainly [query]
├❒ ${prefix}image [query]
├❒ ${prefix}pinterest [query]
├❒ ${prefix}pinterest2 [query]
├❒ ${prefix}playstore [query]
├❒ ${prefix}gcwa [query]
├❒ ${prefix}lirik [query]
├❒ ${prefix}komiku [query]
├❒ ${prefix}otaku [query]
└❒ ${prefix}anime _random_
`
}
const allmenu = (kyun, os, prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii)  => {
	return`❏───「 *WHATSAPP BOT* 」───❏
                               
${ucapannya2}
⏰ Jam : ${timuu} Server Time
🎀 Hari : ${thisDay}
🗓️ Tanggal : ${ini_tanggal}

*Convert Menu*
${numberik} ${prefix}tts  [query]
${numberik} ${prefix}toimg  [reply stiker]
${numberik} ${prefix}tomp3 [reply video]
${numberik} ${prefix}tomp4 [reply stiker]
${numberik} ${prefix}togif [reply stiker]
${numberik} ${prefix}slow [reply vn]
${numberik} ${prefix}tupai [reply vn]
${numberik} ${prefix}fast [reply vn]
${numberik} ${prefix}reverse [reply vn]
${numberik} ${prefix}tourl [reply foto/vid]

*Download Menu* 
${numberik} ${prefix}ytsearch [query]
${numberik} ${prefix}ytshorts [url]
${numberik} ${prefix}igstalk [username]
${numberik} ${prefix}ghstalk [username]
${numberik} ${prefix}play [query]
${numberik} ${prefix}playmp4 [query]
${numberik} ${prefix}video [query]
${numberik} ${prefix}ytmp3 [link]
${numberik} ${prefix}ytmp4 [link]
${numberik} ${prefix}ig [link]
${numberik} ${prefix}igphoto [link]
${numberik} ${prefix}igvideo [link]
${numberik} ${prefix}igtv [link]
${numberik} ${prefix}igreels [link]
${numberik} ${prefix}twitter [link]
${numberik} ${prefix}tiktokwm [link]
${numberik} ${prefix}tiktoknowm [link]
${numberik} ${prefix}tiktokaudio [link]
${numberik} ${prefix}facebook [link]
${numberik} ${prefix}facebookhd [link]
${numberik} ${prefix}facebooksd [link]
${numberik} ${prefix}facebookaudio [link]
${numberik} ${prefix}brainly [query]
${numberik} ${prefix}image [query]
${numberik} ${prefix}pinterest [query]
${numberik} ${prefix}pinterest2 [query]
${numberik} ${prefix}playstore [query]
${numberik} ${prefix}gcwa [query]
${numberik} ${prefix}lirik [query]
${numberik} ${prefix}komiku [query]
${numberik} ${prefix}anime _random_

 *Fun Menu*
${numberik} ${prefix}start
${numberik} ${prefix}leave
${numberik} ${prefix}skip
${numberik} ${prefix}jelajah
${numberik} ${prefix}adventure
${numberik} ${prefix}nambang
${numberik} ${prefix}nebang
${numberik} ${prefix}mancing
${numberik} ${prefix}lebur
${numberik} ${prefix}jualikan
${numberik} ${prefix}jualcoal
${numberik} ${prefix}jualstone
${numberik} ${prefix}jualingot
${numberik} ${prefix}jualkayu
${numberik} ${prefix}slot
${numberik} ${prefix}inventory
${numberik} ${prefix}dompet
${numberik} ${prefix}suit
${numberik} ${prefix}judi
${numberik} ${prefix}fitnah
${numberik} ${prefix}absen
${numberik} ${prefix}absensi
${numberik} ${prefix}tebakgambar
${numberik} ${prefix}caklontong
${numberik} ${prefix}family100
${numberik} ${prefix}tebakanime
${numberik} ${prefix}tebakkalimat
${numberik} ${prefix}susunkata
${numberik} ${prefix}tekateki
${numberik} ${prefix}siapaaku
${numberik} ${prefix}tebaklirik
${numberik} ${prefix}tebakkata
${numberik} ${prefix}suit
${numberik} ${prefix}fitnahpc text|balasan
${numberik} ${prefix}kontak 62xxx|text
${numberik} ${prefix}tictactoe @user
${numberik} ${prefix}delttt
${numberik} ${prefix}voting @user|reason|time
${numberik} ${prefix}delvote
${numberik} ${prefix}jadibot
${numberik} ${prefix}stopjadibot
${numberik} ${prefix}listbot

 *Textpro Menu*
${numberik} ${prefix}halloween2 text|text2
${numberik} ${prefix}horror text|text2
${numberik} ${prefix}game8bit text|text2
${numberik} ${prefix}layered text|text2
${numberik} ${prefix}glitch2 text|text2
${numberik} ${prefix}coolg text|text2
${numberik} ${prefix}coolwg text|text2
${numberik} ${prefix}realistic text|text2
${numberik} ${prefix}space3d text|text2
${numberik} ${prefix}gtiktok text|text2
${numberik} ${prefix}stone text|text2
${numberik} ${prefix}marvel text|text2
${numberik} ${prefix}marvel2 text|text2
${numberik} ${prefix}pornhub text|text2
${numberik} ${prefix}avengers text|text2
${numberik} ${prefix}metalr text|text2
${numberik} ${prefix}metalg text|text2
${numberik} ${prefix}metalg2 text|text2
${numberik} ${prefix}halloween2 text|text2
${numberik} ${prefix}lion text|text2
${numberik} ${prefix}wolf_bw text|text2
${numberik} ${prefix}wolf_g text|text2
${numberik} ${prefix}ninja text|text2
${numberik} ${prefix}3dsteel text|text2
${numberik} ${prefix}horror2 text|text2
${numberik} ${prefix}lava text|text2
${numberik} ${prefix}bagel text|text2
${numberik} ${prefix}blackpink text
${numberik} ${prefix}rainbow2 text
${numberik} ${prefix}water_pipe text
${numberik} ${prefix}halloween text
${numberik} ${prefix}sketch text
${numberik} ${prefix}sircuit text
${numberik} ${prefix}discovery text
${numberik} ${prefix}metallic2 text
${numberik} ${prefix}fiction text
${numberik} ${prefix}demon text
${numberik} ${prefix}transformer text
${numberik} ${prefix}berry text
${numberik} ${prefix}thunder text
${numberik} ${prefix}magma text
${numberik} ${prefix}3dstone text
${numberik} ${prefix}neon text
${numberik} ${prefix}glitch text
${numberik} ${prefix}harry_potter text
${numberik} ${prefix}embossed text
${numberik} ${prefix}broken text
${numberik} ${prefix}papercut text
${numberik} ${prefix}gradient text
${numberik} ${prefix}glossy text
${numberik} ${prefix}watercolor text
${numberik} ${prefix}multicolor text
${numberik} ${prefix}neon_devil text
${numberik} ${prefix}underwater text
${numberik} ${prefix}bear text
${numberik} ${prefix}wonderfulg text
${numberik} ${prefix}christmas text
${numberik} ${prefix}neon_light text
${numberik} ${prefix}snow text
${numberik} ${prefix}cloudsky text
${numberik} ${prefix}luxury2 text
${numberik} ${prefix}gradient2 text
${numberik} ${prefix}summer text
${numberik} ${prefix}writing text
${numberik} ${prefix}engraved text
${numberik} ${prefix}summery text
${numberik} ${prefix}3dglue text
${numberik} ${prefix}metaldark text
${numberik} ${prefix}neonlight text
${numberik} ${prefix}oscar text
${numberik} ${prefix}minion text
${numberik} ${prefix}holographic text
${numberik} ${prefix}purple text
${numberik} ${prefix}glossyb text
${numberik} ${prefix}deluxe2 text
${numberik} ${prefix}glossyc text
${numberik} ${prefix}fabric text
${numberik} ${prefix}neonc text
${numberik} ${prefix}newyear text
${numberik} ${prefix}newyear2 text
${numberik} ${prefix}metals text
${numberik} ${prefix}xmas text
${numberik} ${prefix}blood text
${numberik} ${prefix}darkg text
${numberik} ${prefix}joker text
${numberik} ${prefix}wicker text
${numberik} ${prefix}natural text
${numberik} ${prefix}firework text
${numberik} ${prefix}skeleton text
${numberik} ${prefix}balloon text
${numberik} ${prefix}balloon2 text
${numberik} ${prefix}balloon3 text
${numberik} ${prefix}balloon4 text
${numberik} ${prefix}balloon5 text
${numberik} ${prefix}balloon6 text
${numberik} ${prefix}balloon7 text
${numberik} ${prefix}steel text
${numberik} ${prefix}gloss text
${numberik} ${prefix}denim text
${numberik} ${prefix}decorate text
${numberik} ${prefix}decorate2 text
${numberik} ${prefix}peridot text
${numberik} ${prefix}rock text
${numberik} ${prefix}glass text
${numberik} ${prefix}glass2 text
${numberik} ${prefix}glass3 text
${numberik} ${prefix}glass4 text
${numberik} ${prefix}glass5 text
${numberik} ${prefix}glass6 text
${numberik} ${prefix}glass7 text
${numberik} ${prefix}glass8 text
${numberik} ${prefix}captain_as2 text
${numberik} ${prefix}robot text
${numberik} ${prefix}equalizer text
${numberik} ${prefix}toxic text
${numberik} ${prefix}sparkling text
${numberik} ${prefix}sparkling2 text
${numberik} ${prefix}sparkling3 text
${numberik} ${prefix}sparkling4 text
${numberik} ${prefix}sparkling5 text
${numberik} ${prefix}sparkling6 text
${numberik} ${prefix}sparkling7 text
${numberik} ${prefix}decorative text
${numberik} ${prefix}chocolate text
${numberik} ${prefix}strawberry text
${numberik} ${prefix}koifish text
${numberik} ${prefix}bread text
${numberik} ${prefix}matrix text
${numberik} ${prefix}blood2 text
${numberik} ${prefix}neonligth2 text
${numberik} ${prefix}thunder2 text
${numberik} ${prefix}3dbox text
${numberik} ${prefix}neon2 text
${numberik} ${prefix}roadw text
${numberik} ${prefix}bokeh text
${numberik} ${prefix}gneon text
${numberik} ${prefix}advanced text
${numberik} ${prefix}dropwater text
${numberik} ${prefix}wall text
${numberik} ${prefix}chrismast text
${numberik} ${prefix}honey text
${numberik} ${prefix}drug text
${numberik} ${prefix}marble text
${numberik} ${prefix}marble2 text
${numberik} ${prefix}ice text
${numberik} ${prefix}juice text
${numberik} ${prefix}rusty text
${numberik} ${prefix}abstra text
${numberik} ${prefix}biscuit text
${numberik} ${prefix}wood text
${numberik} ${prefix}scifi text
${numberik} ${prefix}metalr text
${numberik} ${prefix}purpleg text
${numberik} ${prefix}shiny text 
${numberik} ${prefix}jewelry text
${numberik} ${prefix}jewelry2 text
${numberik} ${prefix}jewelry3 text
${numberik} ${prefix}jewelry4 text
${numberik} ${prefix}jewelry5 text
${numberik} ${prefix}jewelry6 text
${numberik} ${prefix}jewelry7 text
${numberik} ${prefix}jewelry8 text
${numberik} ${prefix}metalh text
${numberik} ${prefix}golden text
${numberik} ${prefix}glitter text
${numberik} ${prefix}glitter2 text
${numberik} ${prefix}glitter3 text
${numberik} ${prefix}glitter4 text
${numberik} ${prefix}glitter5 text
${numberik} ${prefix}glitter6 text
${numberik} ${prefix}glitter7 text
${numberik} ${prefix}metale text
${numberik} ${prefix}carbon text
${numberik} ${prefix}candy text
${numberik} ${prefix}metalb text
${numberik} ${prefix}gemb text
${numberik} ${prefix}3dchrome text
${numberik} ${prefix}metalb2 text
${numberik} ${prefix}metalg text
${numberik} ${prefix}metalg text

 *Photooxy Menu*
${numberik} ${prefix}captain_as text|text2
${numberik} ${prefix}smoke text|text2
${numberik} ${prefix}tiktok2 text|text2 
${numberik} ${prefix}arcade text|text2
${numberik} ${prefix}battlefield text|text2
${numberik} ${prefix}pubg text|text2
${numberik} ${prefix}shadow text
${numberik} ${prefix}cname text
${numberik} ${prefix}romantic text
${numberik} ${prefix}burnpaper text
${numberik} ${prefix}funnycup text
${numberik} ${prefix}love text
${numberik} ${prefix}undergrass text          
${numberik} ${prefix}heart text
${numberik} ${prefix}coffeecup text
${numberik} ${prefix}wood text          
${numberik} ${prefix}flower text         
${numberik} ${prefix}wooden text 
${numberik} ${prefix}3dsummer text
${numberik} ${prefix}wolf_metal text
${numberik} ${prefix}3dnature text
${numberik} ${prefix}underwater text          
${numberik} ${prefix}goldenrose text
${numberik} ${prefix}vector text
${numberik} ${prefix}typography text
${numberik} ${prefix}typography2 text 
${numberik} ${prefix}underfall text  
${numberik} ${prefix}smokyneon text 
${numberik} ${prefix}rainbow text 
${numberik} ${prefix}graffiti text
${numberik} ${prefix}camouflage text
${numberik} ${prefix}3dglowing text          
${numberik} ${prefix}vintage text
${numberik} ${prefix}honey text 
${numberik} ${prefix}whitecube text
${numberik} ${prefix}avatar text 
${numberik} ${prefix}glowrainbow text
${numberik} ${prefix}nightsky text
${numberik} ${prefix}fur text
${numberik} ${prefix}flaming text          
${numberik} ${prefix}crisp text
${numberik} ${prefix}embroidery text
${numberik} ${prefix}bcake text          
${numberik} ${prefix}3dligth text
${numberik} ${prefix}metallic text 
${numberik} ${prefix}striking text
${numberik} ${prefix}watermelon text         
${numberik} ${prefix}butterfly text
${numberik} ${prefix}harry text
${numberik} ${prefix}glowneon text
${numberik} ${prefix}coffecup2 text          
${numberik} ${prefix}luxury text 
${numberik} ${prefix}cemetery text
${numberik} ${prefix}woodblock text
${numberik} ${prefix}sweet text
${numberik} ${prefix}simple text
${numberik} ${prefix}bevel text
${numberik} ${prefix}underflower text         
${numberik} ${prefix}underflower2 text

 *Maker Menu* 
${numberik} ${prefix}sticker
${numberik} ${prefix}smeme [text]
${numberik} ${prefix}memegen [atas|bawah]
${numberik} ${prefix}ktpmaker
${numberik} ${prefix}attp [text]
${numberik} ${prefix}ttp [text]
${numberik} ${prefix}ttp1 [text]
${numberik} ${prefix}ttp2 [text]
${numberik} ${prefix}ttp3 [text]
${numberik} ${prefix}ttp4 [text]
${numberik} ${prefix}swm author|packname
${numberik} ${prefix}take author|packname
${numberik} ${prefix}fdeface
${numberik} ${prefix}amongus [text]
${numberik} ${prefix}tweettrump [text]
${numberik} ${prefix}cmm [text]
${numberik} ${prefix}kanna [text]
${numberik} ${prefix}nulis [text]
${numberik} ${prefix}tahta [text]
${numberik} ${prefix}ytgold [text]
${numberik} ${prefix}ytsilver [text]
${numberik} ${prefix}emoji 👼
 
 *Image Effect*
${numberik} ${prefix}trigger
${numberik} ${prefix}gay
${numberik} ${prefix}glass
${numberik} ${prefix}passed
${numberik} ${prefix}jail
${numberik} ${prefix}comrade
${numberik} ${prefix}green
${numberik} ${prefix}blue
${numberik} ${prefix}greyscale
${numberik} ${prefix}invert
${numberik} ${prefix}invertgreyscale
${numberik} ${prefix}red
${numberik} ${prefix}blurple
${numberik} ${prefix}blurple2
${numberik} ${prefix}wasted
${numberik} ${prefix}sepia
${numberik} ${prefix}wanted
${numberik} ${prefix}utatoo
${numberik} ${prefix}unsharpen
${numberik} ${prefix}thanos
${numberik} ${prefix}sniper
${numberik} ${prefix}sharpen
${numberik} ${prefix}scary
${numberik} ${prefix}rip
${numberik} ${prefix}rejected
${numberik} ${prefix}redple
${numberik} ${prefix}posterize
${numberik} ${prefix}ps4
${numberik} ${prefix}pixelize
${numberik} ${prefix}missionpassed
${numberik} ${prefix}moustache
${numberik} ${prefix}lookwhatkarenhave
${numberik} ${prefix}instagram
${numberik} ${prefix}glitch
${numberik} ${prefix}frame
${numberik} ${prefix}fire
${numberik} ${prefix}distort
${numberik} ${prefix}dictator
${numberik} ${prefix}deepfry
${numberik} ${prefix}ddungeon
${numberik} ${prefix}circle
${numberik} ${prefix}challenger
${numberik} ${prefix}burn
${numberik} ${prefix}brazzers
${numberik} ${prefix}beautiful

 *Group Menu*
${numberik} ${prefix}add 62***
${numberik} ${prefix}kick _@user_
${numberik} ${prefix}radd _reply pesan @user_
${numberik} ${prefix}rkick _reply pesan @user_
${numberik} ${prefix}ping
${numberik} ${prefix}welcome [on / off]
${numberik} ${prefix}nsfw [on / off]
${numberik} ${prefix}antilink [on / off]
${numberik} ${prefix}autoread <query> [on / off]
${numberik} ${prefix}antibug [on / off]
${numberik} ${prefix}antidelete [on / off]
${numberik} ${prefix}anticall [on / off]
${numberik} ${prefix}autoketik [on / off]
${numberik} ${prefix}autovn [on / off]
${numberik} ${prefix}antihidetag [on / off]
${numberik} ${prefix}autobio [on / off]
${numberik} ${prefix}register [on / off]
${numberik} ${prefix}autorespon [on / off]
${numberik} ${prefix}get [link]
${numberik} ${prefix}getpp _@user_
${numberik} ${prefix}getname _reply_
${numberik} ${prefix}size _reply media_
${numberik} ${prefix}colongsw _reply sw_
${numberik} ${prefix}getbio _@user_
${numberik} ${prefix}tagall
${numberik} ${prefix}listonline
${numberik} ${prefix}caripesan query
${numberik} ${prefix}caripesan2 [query]
${numberik} ${prefix}searchmsg [query|total]
${numberik} ${prefix}sider [reply pesan bot]
${numberik} ${prefix}del [reply pesan bot]
${numberik} ${prefix}q [reply pesan]
${numberik} ${prefix}afk [reason]
${numberik} ${prefix}getsider [reply pesan bot]
${numberik} ${prefix}promoteall
${numberik} ${prefix}ppcouple
${numberik} ${prefix}setname
${numberik} ${prefix}revoke
${numberik} ${prefix}setdesk
${numberik} ${prefix}spam text|jumlah
${numberik} ${prefix}demoteall
${numberik} ${prefix}admin
${numberik} ${prefix}listpc
${numberik} ${prefix}listgroup
${numberik} ${prefix}hentai
${numberik} ${prefix}jadian
${numberik} ${prefix}trapnime
${numberik} ${prefix}sewa add/del waktu
${numberik} ${prefix}listsewa
${numberik} ${prefix}ceksewa
${numberik} ${prefix}premium add 62xxx waktu
${numberik} ${prefix}cekpremium
${numberik} ${prefix}listprem
${numberik} ${prefix}belipremium
${numberik} ${prefix}sewabot
${numberik} ${prefix}verify
${numberik} ${prefix}limit
${numberik} ${prefix}profile
${numberik} ${prefix}buylimit
${numberik} ${prefix}buyglimit
${numberik} ${prefix}awoo
${numberik} ${prefix}megumin

*Random Sound*
${numberik} ${prefix}sound1
${numberik} ${prefix}sound2
${numberik} ${prefix}sound3
${numberik} ${prefix}sound4
${numberik} ${prefix}sound5
${numberik} ${prefix}sound6
${numberik} ${prefix}sound7
${numberik} ${prefix}sound8
${numberik} ${prefix}sound9
${numberik} ${prefix}sound10
${numberik} ${prefix}sound11
${numberik} ${prefix}sound12
${numberik} ${prefix}sound13
${numberik} ${prefix}sound14
${numberik} ${prefix}sound15
${numberik} ${prefix}sound16
${numberik} ${prefix}sound17
${numberik} ${prefix}sound18 
${numberik} ${prefix}sound19
${numberik} ${prefix}sound20
${numberik} ${prefix}sound21
${numberik} ${prefix}sound22
${numberik} ${prefix}sound23
${numberik} ${prefix}sound24
${numberik} ${prefix}sound25
${numberik} ${prefix}sound26
${numberik} ${prefix}sound27
${numberik} ${prefix}sound28
${numberik} ${prefix}sound29
${numberik} ${prefix}sound30
${numberik} ${prefix}sound31
${numberik} ${prefix}sound32
${numberik} ${prefix}sound33
${numberik} ${prefix}sound34
${numberik} ${prefix}sound35
${numberik} ${prefix}sound36
${numberik} ${prefix}sound37
${numberik} ${prefix}sound38
${numberik} ${prefix}sound39
${numberik} ${prefix}sound40
${numberik} ${prefix}sound41
${numberik} ${prefix}sound42
${numberik} ${prefix}sound43
${numberik} ${prefix}sound44
${numberik} ${prefix}sound45
${numberik} ${prefix}sound46
${numberik} ${prefix}sound47
${numberik} ${prefix}sound48
${numberik} ${prefix}sound49
${numberik} ${prefix}sound50
${numberik} ${prefix}sound51
${numberik} ${prefix}sound52
${numberik} ${prefix}sound53
${numberik} ${prefix}sound54
${numberik} ${prefix}sound55
${numberik} ${prefix}sound56
${numberik} ${prefix}sound57
${numberik} ${prefix}sound58
${numberik} ${prefix}sound59
${numberik} ${prefix}sound60
${numberik} ${prefix}sound61
${numberik} ${prefix}sound62
${numberik} ${prefix}sound63
${numberik} ${prefix}sound64
${numberik} ${prefix}sound65
${numberik} ${prefix}sound66
${numberik} ${prefix}sound67
${numberik} ${prefix}sound68
${numberik} ${prefix}sound69
${numberik} ${prefix}sound70

 *Owner Menu*
${numberik} ${prefix}setmenu location
${numberik} ${prefix}setmenu document
${numberik} ${prefix}setmenu list
${numberik} ${prefix}setmenu troli
${numberik} ${prefix}setmenu troli2
${numberik} ${prefix}setmenu katalog
${numberik} ${prefix}setmenu katalog2
${numberik} ${prefix}off
${numberik} ${prefix}on
${numberik} ${prefix}buggc
${numberik} ${prefix}bc
${numberik} ${prefix}bcimage
${numberik} ${prefix}bcgif
${numberik} ${prefix}bcvideo
${numberik} ${prefix}bcaudio
${numberik} ${prefix}bcsticker
${numberik} ${prefix}ban
${numberik} ${prefix}unban
${numberik} ${prefix}block
${numberik} ${prefix}unblock
${numberik} ${prefix}status
${numberik} ${prefix}clearall
${numberik} ${prefix}self
${numberik} ${prefix}public
${numberik} ${prefix}join
${numberik} ${prefix}out
${numberik} ${prefix}clearall
${numberik} ${prefix}readall
${numberik} ${prefix}unreadall
${numberik} ${prefix}archive
${numberik} ${prefix}unarchive
${numberik} ${prefix}pin
${numberik} ${prefix}delthischat
${numberik} ${prefix}unpin
${numberik} ${prefix}setthumb
${numberik} ${prefix}settarget
${numberik} ${prefix}setfakeimg
${numberik} ${prefix}setreply
${numberik} ${prefix}term _code_
${numberik} < _code_
${numberik} x or > _code_
${numberik} $  _termux code_
${numberik} =>  _eval async_

 *Storage  Menu*
${numberik} ${prefix}addstik 
${numberik} ${prefix}addimg 
${numberik} ${prefix}addvid 
${numberik} ${prefix}addvn   
${numberik} ${prefix}liststick
${numberik} ${prefix}listimg
${numberik} ${prefix}listvid
${numberik} ${prefix}listvn
${numberik} ${prefix}addrespon
${numberik} ${prefix}delrespon
${numberik} ${prefix}listrespon

 *Tag  Menu*
${numberik} ${prefix}hidetag
${numberik} ${prefix}kontag
${numberik} ${prefix}sticktag
${numberik} ${prefix}totag
${numberik} ${prefix}ganteng 
${numberik} ${prefix}cantik 
${numberik} ${prefix}jelek 
${numberik} ${prefix}goblok  
${numberik} ${prefix}bego 
${numberik} ${prefix}pinter 
${numberik} ${prefix}jago 
${numberik} ${prefix}nolep 
${numberik} ${prefix}monyet  
${numberik} ${prefix}babi 
${numberik} ${prefix}beban 
${numberik} ${prefix}baik 
${numberik} ${prefix}jahat 
${numberik} ${prefix}anjing 
${numberik} ${prefix}haram 
${numberik} ${prefix}kontol 
${numberik} ${prefix}pakboy 
${numberik} ${prefix}pakgirl 
${numberik} ${prefix}wibu 
${numberik} ${prefix}hebat 
${numberik} ${prefix}sadboy 
${numberik} ${prefix}sadgirl  

 *Up Eswe*
${numberik} ${prefix}upswteks
${numberik} ${prefix}upswimage
${numberik} ${prefix}upswvideo

*Kerang Ajaib*
${numberik} ${prefix}bisakah [query]
${numberik} ${prefix}apakah [query]
${numberik} ${prefix}kapankah [query]

 *Nsfw & Sfw*
${numberik} ${prefix}hentaivid
${numberik} ${prefix}ahegao
${numberik} ${prefix}ass
${numberik} ${prefix}bdsm
${numberik} ${prefix}blowjob
${numberik} ${prefix}blowjob2
${numberik} ${prefix}cuckold
${numberik} ${prefix}cum
${numberik} ${prefix}ero
${numberik} ${prefix}femdom
${numberik} ${prefix}foot
${numberik} ${prefix}gangbang
${numberik} ${prefix}glasses
${numberik} ${prefix}jahy
${numberik} ${prefix}manga
${numberik} ${prefix}masturbation
${numberik} ${prefix}neko
${numberik} ${prefix}orgy
${numberik} ${prefix}panties
${numberik} ${prefix}pussy
${numberik} ${prefix}tentacles
${numberik} ${prefix}thighs
${numberik} ${prefix}yuri
${numberik} ${prefix}feet
${numberik} ${prefix}lewdkemo
${numberik} ${prefix}woof
${numberik} ${prefix}gasm
${numberik} ${prefix}solo
${numberik} ${prefix}8ball
${numberik} ${prefix}goose
${numberik} ${prefix}avatar
${numberik} ${prefix}hololewd
${numberik} ${prefix}gecg
${numberik} ${prefix}holo
${numberik} ${prefix}fox_girl
${numberik} ${prefix}tits
${numberik} ${prefix}eroyuri
${numberik} ${prefix}holoyero
${numberik} ${prefix}lizard
${numberik} ${prefix}keta
${numberik} ${prefix}eron
${numberik} ${prefix}erok
${numberik} ${prefix}kemonomimi
${numberik} ${prefix}cum_jpg
${numberik} ${prefix}nsfw_avatar
${numberik} ${prefix}erofeet
${numberik} ${prefix}meow
${numberik} ${prefix}wallpaper
${numberik} ${prefix}waifu
${numberik} ${prefix}trap
${numberik} ${prefix}lewd
${numberik} ${prefix}pussy_jpg
${numberik} ${prefix}futanari
${numberik} ${prefix}lewdk
${numberik} ${prefix}solog
${numberik} ${prefix}smug
${numberik} ${prefix}cum
${numberik} ${prefix}slap
${numberik} ${prefix}les
${numberik} ${prefix}erokemo
${numberik} ${prefix}bj
${numberik} ${prefix}pwankg
${numberik} ${prefix}pat
${numberik} ${prefix}poke
${numberik} ${prefix}feed
${numberik} ${prefix}nsfw_neko_gif
${numberik} ${prefix}pussy
${numberik} ${prefix}feetg
${numberik} ${prefix}baka
${numberik} ${prefix}hug
${numberik} ${prefix}kiss
${numberik} ${prefix}tickle
${numberik} ${prefix}spank
${numberik} ${prefix}kuni
${numberik} ${prefix}classic
${numberik} ${prefix}boobs
${numberik} ${prefix}anal
${numberik} ${prefix}ngif
${numberik} ${prefix}cuddle
${numberik} ${prefix}zettai

 *Telegram Stiker*
${numberik} ${prefix}awoawo
${numberik} ${prefix}benedict
${numberik} ${prefix}chat
${numberik} ${prefix}dbfly
${numberik} ${prefix}dino_kuning
${numberik} ${prefix}doge
${numberik} ${prefix}gojosatoru
${numberik} ${prefix}hope_boy
${numberik} ${prefix}jisoo
${numberik} ${prefix}kr_robot
${numberik} ${prefix}kucing
${numberik} ${prefix}lonte
${numberik} ${prefix}manusia_lidi
${numberik} ${prefix}menjamet
${numberik} ${prefix}meow
${numberik} ${prefix}nicholas
${numberik} ${prefix}patrick
${numberik} ${prefix}popoci
${numberik} ${prefix}sponsbob
${numberik} ${prefix}kawan_sponsbob
${numberik} ${prefix}tyni

 *Cecan  Menu* 
${numberik} ${prefix}china
${numberik} ${prefix}indonesia
${numberik} ${prefix}malaysia
${numberik} ${prefix}thailand
${numberik} ${prefix}korea
${numberik} ${prefix}japan
${numberik} ${prefix}vietnam
${numberik} ${prefix}jenni
${numberik} ${prefix}jiso
${numberik} ${prefix}lisa
${numberik} ${prefix}rose

 *Quotes  Menu*
${numberik} ${prefix}katailham  
${numberik} ${prefix}dare   
${numberik} ${prefix}truth  
${numberik} ${prefix}katabijak_lucu   
${numberik} ${prefix}katacaklontong  
${numberik} ${prefix}katadilan  

 *Cogan  Menu* 
${numberik} ${prefix}baekhyung  
${numberik} ${prefix}dohkyungsoo  
${numberik} ${prefix}huangzitao  
${numberik} ${prefix}jhope  
${numberik} ${prefix}jimin 
${numberik} ${prefix}jungkook 
${numberik} ${prefix}kimjondae  
${numberik} ${prefix}kimjong  
${numberik} ${prefix}kimjunmyeon  
${numberik} ${prefix}kimminseok 
${numberik} ${prefix}kimnanjoon  
${numberik} ${prefix}kimseok  
${numberik} ${prefix}kimtaehyung  
${numberik} ${prefix}luhan  
${numberik} ${prefix}ohsehun 
${numberik} ${prefix}parkchanyeol 
${numberik} ${prefix}suga  
${numberik} ${prefix}wuyifan

 *Asupan  Menu* 
${numberik} ${prefix}rikagusriani 
${numberik} ${prefix}ukhty 
${numberik} ${prefix}santuy 
${numberik} ${prefix}geayubi   
${numberik} ${prefix}bocil
${numberik} ${prefix}asupan
${numberik} ${prefix}chika 
${numberik} ${prefix}delvira 
${numberik} ${prefix}ayu   
${numberik} ${prefix}bunga
${numberik} ${prefix}aura
${numberik} ${prefix}nisa 
${numberik} ${prefix}ziva 
${numberik} ${prefix}yana   
${numberik} ${prefix}viona
${numberik} ${prefix}syania
${numberik} ${prefix}riri   
${numberik} ${prefix}syifa
${numberik} ${prefix}mama_gina
${numberik} ${prefix}alcakenya 
${numberik} ${prefix}mangayutri

 *Anime  Menu*
${numberik} ${prefix}anna
${numberik} ${prefix}asuna_yuki 
${numberik} ${prefix}ayuzawa 
${numberik} ${prefix}chitoge 
${numberik} ${prefix}emilia
${numberik} ${prefix}erza 
${numberik} ${prefix}hinata 
${numberik} ${prefix}inori 
${numberik} ${prefix}kaga_kouko 
${numberik} ${prefix}kaori_miyazono 
${numberik} ${prefix}kotori_minami
${numberik} ${prefix}mikasa 
${numberik} ${prefix}mio_akiyama 
${numberik} ${prefix}mizore_sirayuki 
${numberik} ${prefix}nakiri_alice 
${numberik} ${prefix}naruto 
${numberik} ${prefix}riyas_gremori
${numberik} ${prefix}sakura 
${numberik} ${prefix}sasuke 
${numberik} ${prefix}sento_isuzu 
${numberik} ${prefix}shana 
${numberik} ${prefix}shiina 
${numberik} ${prefix}shinka
${numberik} ${prefix}winry
${numberik} ${prefix}yukino 
${numberik} ${prefix}yuzuki 
${numberik} ${prefix}akame
${numberik} ${prefix}mikosiba

❏───「 *WHATSAPP BOT* 」───❏
`
}

const fun = (prefix) => {
	return`┌❑  *FUN & GAME MENU* ❑
│
├❒ ${prefix}start
├❒ ${prefix}leave
├❒ ${prefix}skip
├❒ ${prefix}jelajah
├❒ ${prefix}adventure
├❒ ${prefix}nambang
├❒ ${prefix}nebang
├❒ ${prefix}mancing
├❒ ${prefix}lebur
├❒ ${prefix}jualikan
├❒ ${prefix}jualcoal
├❒ ${prefix}jualstone
├❒ ${prefix}jualingot
├❒ ${prefix}jualkayu
├❒ ${prefix}slot
├❒ ${prefix}inventory
├❒ ${prefix}dompet
├❒ ${prefix}suit
├❒ ${prefix}judi
├❒ ${prefix}fitnah
├❒ ${prefix}absen
├❒ ${prefix}absensi
├❒ ${prefix}tebakgambar
├❒ ${prefix}caklontong
├❒ ${prefix}family100
├❒ ${prefix}tebakanime
├❒ ${prefix}tebakkalimat
├❒ ${prefix}susunkata
├❒ ${prefix}tekateki
├❒ ${prefix}siapaaku
├❒ ${prefix}tebaklirik
├❒ ${prefix}tebakkata
├❒ ${prefix}fitnahpc text|balasan
├❒ ${prefix}kontak 62xxx|text
├❒ ${prefix}tictactoe @user
├❒ ${prefix}delttt
├❒ ${prefix}voting
├❒ ${prefix}delvote
├❒ ${prefix}jadibot
├❒ ${prefix}stopjadibot
└❒ ${prefix}listbot
`
}

const maker = (prefix) => {
	return`┌❑  *MAKER MENU* ❑
│
├❒ ${prefix}sticker
├❒ ${prefix}smeme [text]
├❒ ${prefix}memegen [atas|bawah]
├❒ ${prefix}ktpmaker
├❒ ${prefix}attp
├❒ ${prefix}ttp
├❒ ${prefix}ttp1
├❒ ${prefix}ttp2
├❒ ${prefix}ttp3
├❒ ${prefix}ttp4
├❒ ${prefix}swm author|packname
├❒ ${prefix}take author|packname
│❒ ${prefix}fdeface
│❒ ${prefix}amongus 
│❒ ${prefix}tweettrump text
│❒ ${prefix}cmm text
│❒ ${prefix}kanna text
│❒ ${prefix}nulis text
│❒ ${prefix}tahta text
│❒ ${prefix}ytgold text
│❒ ${prefix}ytsilver
└❒ ${prefix}emoji 👼
`
}

const textpro = (prefix) => {
	return`┌❑  *TEXTPRO MENU* ❑
│
├❒ ${prefix}halloween2 text|text2
├❒ ${prefix}horror text|text2
├❒ ${prefix}game8bit text|text2
├❒ ${prefix}layered text|text2
├❒ ${prefix}glitch2 text|text2
├❒ ${prefix}coolg text|text2
├❒ ${prefix}coolwg text|text2
├❒ ${prefix}realistic text|text2
├❒ ${prefix}space3d text|text2
├❒ ${prefix}gtiktok text|text2
├❒ ${prefix}stone text|text2
├❒ ${prefix}marvel text|text2
├❒ ${prefix}marvel2 text|text2
├❒ ${prefix}pornhub text|text2
├❒ ${prefix}avengers text|text2
├❒ ${prefix}metalr text|text2
├❒ ${prefix}metalg text|text2
├❒ ${prefix}metalg2 text|text2
├❒ ${prefix}halloween2 text|text2
├❒ ${prefix}lion text|text2
├❒ ${prefix}wolf_bw text|text2
├❒ ${prefix}wolf_g text|text2
├❒ ${prefix}ninja text|text2
├❒ ${prefix}3dsteel text|text2
├❒ ${prefix}horror2 text|text2
├❒ ${prefix}lava text|text2
├❒ ${prefix}bagel text|text2
├❒ ${prefix}blackpink text
├❒ ${prefix}rainbow2 text
├❒ ${prefix}water_pipe text
├❒ ${prefix}halloween text
├❒ ${prefix}sketch text
├❒ ${prefix}sircuit text
├❒ ${prefix}discovery text
├❒ ${prefix}metallic2 text
├❒ ${prefix}fiction text
├❒ ${prefix}demon text
├❒ ${prefix}transformer text
├❒ ${prefix}berry text
├❒ ${prefix}thunder text
├❒ ${prefix}magma text
├❒ ${prefix}3dstone text
├❒ ${prefix}neon text
├❒ ${prefix}glitch text
├❒ ${prefix}harry_potter text
├❒ ${prefix}embossed text
├❒ ${prefix}broken text
├❒ ${prefix}papercut text
├❒ ${prefix}gradient text
├❒ ${prefix}glossy text
├❒ ${prefix}watercolor text
├❒ ${prefix}multicolor text
├❒ ${prefix}neon_devil text
├❒ ${prefix}underwater text
├❒ ${prefix}bear text
├❒ ${prefix}wonderfulg text
├❒ ${prefix}christmas text
├❒ ${prefix}neon_light text
├❒ ${prefix}snow text
├❒ ${prefix}cloudsky text
├❒ ${prefix}luxury2 text
├❒ ${prefix}gradient2 text
├❒ ${prefix}summer text
├❒ ${prefix}writing text
├❒ ${prefix}engraved text
├❒ ${prefix}summery text
├❒ ${prefix}3dglue text
├❒ ${prefix}metaldark text
├❒ ${prefix}neonlight text
├❒ ${prefix}oscar text
├❒ ${prefix}minion text
├❒ ${prefix}holographic text
├❒ ${prefix}purple text
├❒ ${prefix}glossyb text
├❒ ${prefix}deluxe2 text
├❒ ${prefix}glossyc text
├❒ ${prefix}fabric text
├❒ ${prefix}neonc text
├❒ ${prefix}newyear text
├❒ ${prefix}newyear2 text
├❒ ${prefix}metals text
├❒ ${prefix}xmas text
├❒ ${prefix}blood text
├❒ ${prefix}darkg text
├❒ ${prefix}joker text
├❒ ${prefix}wicker text
├❒ ${prefix}natural text
├❒ ${prefix}firework text
├❒ ${prefix}skeleton text
├❒ ${prefix}balloon text
├❒ ${prefix}balloon2 text
├❒ ${prefix}balloon3 text
├❒ ${prefix}balloon4 text
├❒ ${prefix}balloon5 text
├❒ ${prefix}balloon6 text
├❒ ${prefix}balloon7 text
├❒ ${prefix}steel text
├❒ ${prefix}gloss text
├❒ ${prefix}denim text
├❒ ${prefix}decorate text
├❒ ${prefix}decorate2 text
├❒ ${prefix}peridot text
├❒ ${prefix}rock text
├❒ ${prefix}glass text
├❒ ${prefix}glass2 text
├❒ ${prefix}glass3 text
├❒ ${prefix}glass4 text
├❒ ${prefix}glass5 text
├❒ ${prefix}glass6 text
├❒ ${prefix}glass7 text
├❒ ${prefix}glass8 text
├❒ ${prefix}captain_as2 text
├❒ ${prefix}robot text
├❒ ${prefix}equalizer text
├❒ ${prefix}toxic text
├❒ ${prefix}sparkling text
├❒ ${prefix}sparkling2 text
├❒ ${prefix}sparkling3 text
├❒ ${prefix}sparkling4 text
├❒ ${prefix}sparkling5 text
├❒ ${prefix}sparkling6 text
├❒ ${prefix}sparkling7 text
├❒ ${prefix}decorative text
├❒ ${prefix}chocolate text
├❒ ${prefix}strawberry text
├❒ ${prefix}koifish text
├❒ ${prefix}bread text
├❒ ${prefix}matrix text
├❒ ${prefix}blood2 text
├❒ ${prefix}neonligth2 text
├❒ ${prefix}thunder2 text
├❒ ${prefix}3dbox text
├❒ ${prefix}neon2 text
├❒ ${prefix}roadw text
├❒ ${prefix}bokeh text
├❒ ${prefix}gneon text
├❒ ${prefix}advanced text
├❒ ${prefix}dropwater text
├❒ ${prefix}wall text
├❒ ${prefix}chrismast text
├❒ ${prefix}honey text
├❒ ${prefix}drug text
├❒ ${prefix}marble text
├❒ ${prefix}marble2 text
├❒ ${prefix}ice text
├❒ ${prefix}juice text
├❒ ${prefix}rusty text
├❒ ${prefix}abstra text
├❒ ${prefix}biscuit text
├❒ ${prefix}wood text
├❒ ${prefix}scifi text
├❒ ${prefix}metalr text
├❒ ${prefix}purpleg text
├❒ ${prefix}shiny text 
├❒ ${prefix}jewelry text
├❒ ${prefix}jewelry2 text
├❒ ${prefix}jewelry3 text
├❒ ${prefix}jewelry4 text
├❒ ${prefix}jewelry5 text
├❒ ${prefix}jewelry6 text
├❒ ${prefix}jewelry7 text
├❒ ${prefix}jewelry8 text
├❒ ${prefix}metalh text
├❒ ${prefix}golden text
├❒ ${prefix}glitter text
├❒ ${prefix}glitter2 text
├❒ ${prefix}glitter3 text
├❒ ${prefix}glitter4 text
├❒ ${prefix}glitter5 text
├❒ ${prefix}glitter6 text
├❒ ${prefix}glitter7 text
├❒ ${prefix}metale text
├❒ ${prefix}carbon text
├❒ ${prefix}candy text
├❒ ${prefix}metalb text
├❒ ${prefix}gemb text
├❒ ${prefix}3dchrome text
├❒ ${prefix}metalb2 text
├❒ ${prefix}metalg text
└❒ ${prefix}metalg text
`
}

const photooxy = (prefix) => {
	return`┌❑  *PHOTOOXY MENU* ❑
│
├❒ ${prefix}captain_as text|text2
├❒ ${prefix}smoke text|text2
├❒ ${prefix}tiktok2 text|text2 
├❒ ${prefix}arcade text|text2
├❒ ${prefix}battlefield text|text2
├❒ ${prefix}pubg text|text2
├❒ ${prefix}shadow text
├❒ ${prefix}cname text
├❒ ${prefix}romantic text
├❒ ${prefix}burnpaper text
├❒ ${prefix}funnycup text
├❒ ${prefix}love text
├❒ ${prefix}undergrass text          
├❒ ${prefix}heart text
├❒ ${prefix}coffeecup text
├❒ ${prefix}wood text          
├❒ ${prefix}flower text         
├❒ ${prefix}wooden text 
├❒ ${prefix}3dsummer text
├❒ ${prefix}wolf_metal text
├❒ ${prefix}3dnature text
├❒ ${prefix}underwater text          
├❒ ${prefix}goldenrose text
├❒ ${prefix}vector text
├❒ ${prefix}typography text
├❒ ${prefix}typography2 text 
├❒ ${prefix}underfall text  
├❒ ${prefix}smokyneon text 
├❒ ${prefix}rainbow text 
├❒ ${prefix}graffiti text
├❒ ${prefix}camouflage text
├❒ ${prefix}3dglowing text          
├❒ ${prefix}vintage text
├❒ ${prefix}honey text 
├❒ ${prefix}whitecube text
├❒ ${prefix}avatar text 
├❒ ${prefix}glowrainbow text
├❒ ${prefix}nightsky text
├❒ ${prefix}fur text
├❒ ${prefix}flaming text          
├❒ ${prefix}crisp text
├❒ ${prefix}embroidery text
├❒ ${prefix}bcake text          
├❒ ${prefix}3dligth text
├❒ ${prefix}metallic text 
├❒ ${prefix}striking text
├❒ ${prefix}watermelon text         
├❒ ${prefix}butterfly text
├❒ ${prefix}harry text
├❒ ${prefix}glowneon text
├❒ ${prefix}coffecup2 text          
├❒ ${prefix}luxury text 
├❒ ${prefix}cemetery text
├❒ ${prefix}woodblock text
├❒ ${prefix}sweet text
├❒ ${prefix}simple text
├❒ ${prefix}bevel text
├❒ ${prefix}underflower text         
└❒ ${prefix}underflower2 text
`
}

const other = (prefix) => {
	return`┌❑  *GROUP MENU* ❑
│
├❒ ${prefix}add 62xxx
├❒ ${prefix}kick 62xxx
├❒ ${prefix}ping
├❒ ${prefix}antilink [on / off]
├❒ ${prefix}get [link]
├❒ ${prefix}getpp _@user_
├❒ ${prefix}getbio _@user_
├❒ ${prefix}getname [reply msg user]
├❒ ${prefix}size _reply media_
├❒ ${prefix}colongsw _reply sw_
├❒ ${prefix}tagall
├❒ ${prefix}listonline
├❒ ${prefix}caripesan query
├❒ ${prefix}caripesan2 [query]
├❒ ${prefix}searchmsg [query|total]
├❒ ${prefix}sider [reply pesan bot]
├❒ ${prefix}del [reply pesan bot]
├❒ ${prefix}q [reply pesan]
├❒ ${prefix}afk [reason]
├❒ ${prefix}getsider [reply pesan bot]
├❒ ${prefix}tagall
├❒ ${prefix}revoke
├❒ ${prefix}setname
├❒ ${prefix}ppcouple
├❒ ${prefix}promoteall
├❒ ${prefix}demoteall
├❒ ${prefix}admin
├❒ ${prefix}hentai
├❒ ${prefix}jadian
├❒ ${prefix}trapnime
├❒ ${prefix}sewa add/del waktu
├❒ ${prefix}listsewa
├❒ ${prefix}ceksewa
├❒ ${prefix}premium add @user waktu
├❒ ${prefix}cekpremium
├❒ ${prefix}listprem
├❒ ${prefix}belipremium
├❒ ${prefix}sewabot
├❒ ${prefix}verify
├❒ ${prefix}limit
├❒ ${prefix}profile
├❒ ${prefix}buylimit
├❒ ${prefix}buyglimit
├❒ ${prefix}blowjob
├❒ ${prefix}awoo
└❒ ${prefix}megumin
`
}

const ownermenu = (prefix) => {
	return`┌❑  *OWNER MENU* ❑
│
├❒ ${prefix}setmenu location
├❒ ${prefix}setmenu document
├❒ ${prefix}setmenu list
├❒ ${prefix}setmenu troli
├❒ ${prefix}setmenu troli2
├❒ ${prefix}setmenu katalog
├❒ ${prefix}setmenu katalog2
├❒ ${prefix}off
├❒ ${prefix}on
├❒ ${prefix}buggc
├❒ ${prefix}bc
├❒ ${prefix}bcimage
├❒ ${prefix}bcgif
├❒ ${prefix}bcvideo
├❒ ${prefix}bcaudio
├❒ ${prefix}bcsticker
├❒ ${prefix}ban
├❒ ${prefix}unban
├❒ ${prefix}block
├❒ ${prefix}unblock
├❒ ${prefix}status
├❒ ${prefix}clearall
├❒ ${prefix}self
├❒ ${prefix}public
├❒ ${prefix}join 
├❒ ${prefix}out
├❒ ${prefix}readall
├❒ ${prefix}unreadall
├❒ ${prefix}archive
├❒ ${prefix}unarchive
├❒ ${prefix}pin
├❒ ${prefix}delthischat
├❒ ${prefix}unpin
├❒ ${prefix}autoread <query> [on / off]
├❒ ${prefix}setthumb
├❒ ${prefix}settarget
├❒ ${prefix}setfakeimg
├❒ ${prefix}setreply
├❒ ${prefix}term _code_
├❒  < _code_
├❒ $  _termux code_
├❒ =>  _eval async_
└❒ x or > _code_
`
}

const setStcCmd = (prefix) => {
	return`┌❑  *SET STC CMD* ❑
│
├❒ ${prefix}set_stc_menu
├❒ ${prefix}set_stc_ping
├❒ ${prefix}set_stc_gclose
├❒ ${prefix}set_stc_gopen
├❒ ${prefix}set_stc_itos
├❒ ${prefix}set_stc_toimg
├❒ ${prefix}set_stc_self
└❒ ${prefix}set_stc_public

Cara penggunaan :
> ${prefix}set_stc_menu _fileLenght sticker_

Example :
> ${prefix}set_stc_menu 7446
`
}

const storage = (prefix) => {
	return`┌❑  *STORAGE MENU* ❑
│
├❒ ${prefix}addstik 
├❒ ${prefix}addimg 
├❒ ${prefix}addvid 
├❒ ${prefix}addvn   
├❒ ${prefix}liststick
├❒ ${prefix}listimg
├❒ ${prefix}listvid
├❒ ${prefix}listvn
├❒ ${prefix}addrespon
├❒ ${prefix}delrespon
└❒ ${prefix}listrespon
`
}
const cecanmenu = (prefix) => {
	return`┌❑  *GACHA CECAN* ❑
│
├❒ ${prefix}china
├❒ ${prefix}indonesia
├❒ ${prefix}malaysia
├❒ ${prefix}thailand
├❒ ${prefix}korea
├❒ ${prefix}japan
├❒ ${prefix}vietnam
├❒ ${prefix}jenni
├❒ ${prefix}jiso
├❒ ${prefix}lisa
└❒ ${prefix}rose
`
}

const tag = (prefix) => {
	return`┌❑  *TAG MENU* ❑
│
├❒ ${prefix}hidetag
├❒ ${prefix}kontag
├❒ ${prefix}sticktag
├❒ ${prefix}totag
├❒ ${prefix}ganteng 
├❒ ${prefix}cantik 
├❒ ${prefix}jelek 
├❒ ${prefix}goblok  
├❒ ${prefix}bego 
├❒ ${prefix}pinter 
├❒ ${prefix}jago 
├❒ ${prefix}nolep 
├❒ ${prefix}monyet  
├❒ ${prefix}babi 
├❒ ${prefix}beban 
├❒ ${prefix}baik 
├❒ ${prefix}jahat 
├❒ ${prefix}anjing 
├❒ ${prefix}haram 
├❒ ${prefix}kontol 
├❒ ${prefix}pakboy 
├❒ ${prefix}pakgirl 
├❒ ${prefix}wibu 
├❒ ${prefix}hebat 
├❒ ${prefix}sadboy 
└❒ ${prefix}sadgirl  
`
}

const upmenu = (prefix) => {
	return`┌❑  *UP ESWE* ❑
│
├❒ ${prefix}upswteks
├❒ ${prefix}upswimage
└❒ ${prefix}upswvideo
`
}
const nsfw = (prefix) => {
	return`┌❑  *NSFW & SFW* ❑
│
├❒ ${prefix}hentaivid
├❒ ${prefix}ahegao
├❒ ${prefix}ass
├❒ ${prefix}bdsm
├❒ ${prefix}blowjob
├❒ ${prefix}blowjob2
├❒ ${prefix}cuckold
├❒ ${prefix}cum
├❒ ${prefix}ero
├❒ ${prefix}femdom
├❒ ${prefix}foot
├❒ ${prefix}gangbang
├❒ ${prefix}glasses
├❒ ${prefix}jahy
├❒ ${prefix}manga
├❒ ${prefix}masturbation
├❒ ${prefix}neko
├❒ ${prefix}orgy
├❒ ${prefix}panties
├❒ ${prefix}pussy
├❒ ${prefix}tentacles
├❒ ${prefix}thighs
├❒ ${prefix}yuri
├❒ ${prefix}feet
├❒ ${prefix}lewdkemo
├❒ ${prefix}woof
├❒ ${prefix}gasm
├❒ ${prefix}solo
├❒ ${prefix}8ball
├❒ ${prefix}goose
├❒ ${prefix}avatar
├❒ ${prefix}hololewd
├❒ ${prefix}gecg
├❒ ${prefix}holo
├❒ ${prefix}fox_girl
├❒ ${prefix}tits
├❒ ${prefix}eroyuri
├❒ ${prefix}holoyero
├❒ ${prefix}lizard
├❒ ${prefix}keta
├❒ ${prefix}eron
├❒ ${prefix}erok
├❒ ${prefix}kemonomimi
├❒ ${prefix}cum_jpg
├❒ ${prefix}nsfw_avatar
├❒ ${prefix}erofeet
├❒ ${prefix}meow
├❒ ${prefix}wallpaper
├❒ ${prefix}waifu
├❒ ${prefix}trap
├❒ ${prefix}lewd
├❒ ${prefix}pussy_jpg
├❒ ${prefix}futanari
├❒ ${prefix}lewdk
├❒ ${prefix}solog
├❒ ${prefix}smug
├❒ ${prefix}cum
├❒ ${prefix}slap
├❒ ${prefix}les
├❒ ${prefix}erokemo
├❒ ${prefix}bj
├❒ ${prefix}pwankg
├❒ ${prefix}pat
├❒ ${prefix}poke
├❒ ${prefix}feed
├❒ ${prefix}nsfw_neko_gif
├❒ ${prefix}pussy
├❒ ${prefix}feetg
├❒ ${prefix}baka
├❒ ${prefix}hug
├❒ ${prefix}kiss
├❒ ${prefix}tickle
├❒ ${prefix}spank
├❒ ${prefix}kuni
├❒ ${prefix}classic
├❒ ${prefix}boobs
├❒ ${prefix}anal
├❒ ${prefix}ngif
├❒ ${prefix}cuddle
└❒ ${prefix}zettai
`
}
const asupan = (prefix) => {
	return`┌❑  *ASUPAN MENU* ❑
│
├❒ ${prefix}rikagusriani 
├❒ ${prefix}ukhty 
├❒ ${prefix}santuy 
├❒ ${prefix}geayubi   
├❒ ${prefix}bocil
├❒ ${prefix}asupan
├❒ ${prefix}chika 
├❒ ${prefix}delvira 
├❒ ${prefix}ayu   
├❒ ${prefix}bunga
├❒ ${prefix}aura
├❒ ${prefix}nisa 
├❒ ${prefix}ziva 
├❒ ${prefix}yana   
├❒ ${prefix}viona
├❒ ${prefix}syania
├❒ ${prefix}riri   
├❒ ${prefix}syifa
├❒ ${prefix}mama_gina
├❒ ${prefix}alcakenya 
└❒ ${prefix}mangayutri
`
}
const telestiker = (prefix) => {
	return`┌❑  *STICKERS MENU* ❑
│
├❒ ${prefix}awoawo
├❒ ${prefix}benedict
├❒ ${prefix}chat
├❒ ${prefix}dbfly
├❒ ${prefix}dino_kuning
├❒ ${prefix}doge
├❒ ${prefix}gojosatoru
├❒ ${prefix}hope_boy
├❒ ${prefix}jisoo
├❒ ${prefix}kr_robot
├❒ ${prefix}kucing
├❒ ${prefix}lonte
├❒ ${prefix}manusia_lidi
├❒ ${prefix}menjamet
├❒ ${prefix}meow
├❒ ${prefix}nicholas
├❒ ${prefix}patrick
├❒ ${prefix}popoci
├❒ ${prefix}sponsbob
├❒ ${prefix}kawan_sponsbob
└❒ ${prefix}tyni
`
}
const image_effect_menu = (prefix) => {
	return`┌❑  *IMAGE EFFECT* ❑
│
├❒ ${prefix}trigger
├❒ ${prefix}gay
├❒ ${prefix}glass
├❒ ${prefix}passed
├❒ ${prefix}jail
├❒ ${prefix}comrade
├❒ ${prefix}green
├❒ ${prefix}blue
├❒ ${prefix}greyscale
├❒ ${prefix}invert
├❒ ${prefix}invertgreyscale
├❒ ${prefix}red
├❒ ${prefix}blurple
├❒ ${prefix}blurple2
├❒ ${prefix}wasted
├❒ ${prefix}wanted
├❒ ${prefix}utatoo
├❒ ${prefix}unsharpen
├❒ ${prefix}thanos
├❒ ${prefix}sniper
├❒ ${prefix}sharpen
├❒ ${prefix}scary
├❒ ${prefix}rip
├❒ ${prefix}rejected
├❒ ${prefix}redple
├❒ ${prefix}posterize
├❒ ${prefix}ps4
├❒ ${prefix}pixelize
├❒ ${prefix}missionpassed
├❒ ${prefix}moustache
├❒ ${prefix}lookwhatkarenhave
├❒ ${prefix}instagram
├❒ ${prefix}glitch
├❒ ${prefix}frame
├❒ ${prefix}fire
├❒ ${prefix}distort
├❒ ${prefix}dictator
├❒ ${prefix}deepfry
├❒ ${prefix}ddungeon
├❒ ${prefix}circle
├❒ ${prefix}challenger
├❒ ${prefix}burn
├❒ ${prefix}brazzers
├❒ ${prefix}beautiful
└❒ ${prefix}sepia
`
}
const coganmenu = (prefix) => {
	return`┌❑ *GACHA COGAN* ❑
│
├❒ ${prefix}baekhyung  
├❒ ${prefix}dohkyungsoo  
├❒ ${prefix}huangzitao  
├❒ ${prefix}jhope  
├❒ ${prefix}jimin 
├❒ ${prefix}jungkook 
├❒ ${prefix}kimjondae  
├❒ ${prefix}kimjong  
├❒ ${prefix}kimjunmyeon  
├❒ ${prefix}kimminseok 
├❒ ${prefix}kimnanjoon  
├❒ ${prefix}kimseok  
├❒ ${prefix}kimtaehyung  
├❒ ${prefix}luhan  
├❒ ${prefix}ohsehun 
├❒ ${prefix}parkchanyeol 
├❒ ${prefix}suga  
└❒ ${prefix}wuyifan  
`
}

const quotesmenu = (prefix) => {
	return `┌❑ *QUOTES MENU* ❑
│
├❒ ${prefix}katailham  
├❒ ${prefix}dare   
├❒ ${prefix}truth  
├❒ ${prefix}katabijak_lucu   
├❒ ${prefix}katacaklontong  
└❒ ${prefix}katadilan  
`
}
const shopmenu = (prefix) => {
	return `┌❑ *SHOP MENU* ❑
│
├❒ ${prefix}shop  
├❒ ${prefix}price  
├❒ ${prefix}pubg   
├❒ ${prefix}ml   
├❒ ${prefix}ff   
├❒ ${prefix}aov   
├❒ ${prefix}cod  
├❒ ${prefix}sausage   
├❒ ${prefix}lol  
└❒ ${prefix}valo  
`
}
const animemenu = (prefix) => {
	return`┌❑ *ANIME MENU* ❑
│
├❒ ${prefix}anna
├❒ ${prefix}asuna_yuki 
├❒ ${prefix}ayuzawa 
├❒ ${prefix}chitoge 
├❒ ${prefix}emilia
├❒ ${prefix}erza 
├❒ ${prefix}hinata 
├❒ ${prefix}inori 
├❒ ${prefix}kaga_kouko 
├❒ ${prefix}kaori_miyazono 
├❒ ${prefix}kotori_minami
├❒ ${prefix}mikasa 
├❒ ${prefix}mio_akiyama 
├❒ ${prefix}mizore_sirayuki 
├❒ ${prefix}nakiri_alice 
├❒ ${prefix}naruto 
├❒ ${prefix}riyas_gremori
├❒ ${prefix}sakura 
├❒ ${prefix}sasuke 
├❒ ${prefix}sento_isuzu 
├❒ ${prefix}shana 
├❒ ${prefix}shiina 
├❒ ${prefix}shinka
├❒ ${prefix}winry
├❒ ${prefix}yukino 
├❒ ${prefix}yuzuki 
├❒ ${prefix}akame
└❒ ${prefix}mikosiba
`
}

const groupmenu = (prefix) => {
	return`┌❑ *GROUP MENU* ❑
│
├❒ ${prefix}add 62***
├❒ ${prefix}kick _@user_
├❒ ${prefix}radd _reply pesan @user_
├❒ ${prefix}rkick _reply pesan @user_
├❒ ${prefix}ping
├❒ ${prefix}nsfw [on / off]
├❒ ${prefix}antilink [on / off]
├❒ ${prefix}get [link]
├❒ ${prefix}getpp _@user_
├❒ ${prefix}getname [reply msg user]
├❒ ${prefix}size [reply media]
├❒ ${prefix}colongsw [reply sw]
├❒ ${prefix}getbio _@user_
├❒ ${prefix}tagall
├❒ ${prefix}listonline
├❒ ${prefix}caripesan query
├❒ ${prefix}caripesan2 [query]
├❒ ${prefix}searchmsg [query|total]
├❒ ${prefix}sider [reply pesan bot]
├❒ ${prefix}del [reply pesan bot]
├❒ ${prefix}q [reply pesan]
├❒ ${prefix}afk [reason]
├❒ ${prefix}getsider [reply pesan bot]
├❒ ${prefix}promoteall
├❒ ${prefix}ppcouple
├❒ ${prefix}setname [text]
├❒ ${prefix}revoke
├❒ ${prefix}setdesk [text]
├❒ ${prefix}spam text|jumlah
├❒ ${prefix}demoteall
├❒ ${prefix}welcome [on / off]
├❒ ${prefix}antibug [on / off]
├❒ ${prefix}nsfw [on / off]
├❒ ${prefix}antilink [on / off]
├❒ ${prefix}antidelete [on / off]
├❒ ${prefix}anticall [on / off]
├❒ ${prefix}autoketik [on / off]
├❒ ${prefix}autobio [on / off]
├❒ ${prefix}antihidetag [on / off]
├❒ ${prefix}autovn [on / off]
├❒ ${prefix}register [on / off]
├❒ ${prefix}autorespon [on / off]
├❒ ${prefix}admin
├❒ ${prefix}listpc
├❒ ${prefix}listgroup
├❒ ${prefix}hentai
├❒ ${prefix}jadian
├❒ ${prefix}trapnime
├❒ ${prefix}sewa add/del waktu
├❒ ${prefix}listsewa
├❒ ${prefix}ceksewa
├❒ ${prefix}premium add 62xxx waktu
├❒ ${prefix}cekpremium
├❒ ${prefix}listprem
├❒ ${prefix}belipremium
├❒ ${prefix}sewabot
├❒ ${prefix}verify
├❒ ${prefix}limit
├❒ ${prefix}profile
├❒ ${prefix}buylimit
├❒ ${prefix}buyglimit
├❒ ${prefix}awoo
└❒ ${prefix}megumin
`
}

const kerangmenu = (prefix) =>{
	return`┌❑ *KERANG MENU* ❑
│
├❒ ${prefix} ${prefix}bisakah [query]
├❒ ${prefix} ${prefix}apakah [query]
└❒ ${prefix} ${prefix}kapankah [query]
`
}

const soundmenu = (prefix) =>{
	return`┌❑ *SOUND MENU* ❑
│
├❒ ${prefix}sound1
├❒ ${prefix}sound2
├❒ ${prefix}sound3
├❒ ${prefix}sound4
├❒ ${prefix}sound5
├❒ ${prefix}sound6
├❒ ${prefix}sound7
├❒ ${prefix}sound8
├❒ ${prefix}sound9
├❒ ${prefix}sound10
├❒ ${prefix}sound11
├❒ ${prefix}sound12
├❒ ${prefix}sound13
├❒ ${prefix}sound14
├❒ ${prefix}sound15
├❒ ${prefix}sound16
├❒ ${prefix}sound17
├❒ ${prefix}sound18 
├❒ ${prefix}sound19
├❒ ${prefix}sound20
├❒ ${prefix}sound21
├❒ ${prefix}sound22
├❒ ${prefix}sound23
├❒ ${prefix}sound24
├❒ ${prefix}sound25
├❒ ${prefix}sound26
├❒ ${prefix}sound27
├❒ ${prefix}sound28
├❒ ${prefix}sound29
├❒ ${prefix}sound30
├❒ ${prefix}sound31
├❒ ${prefix}sound32
├❒ ${prefix}sound33
├❒ ${prefix}sound34
├❒ ${prefix}sound35
├❒ ${prefix}sound36
├❒ ${prefix}sound37
├❒ ${prefix}sound38
├❒ ${prefix}sound39
├❒ ${prefix}sound40
├❒ ${prefix}sound41
├❒ ${prefix}sound42
├❒ ${prefix}sound43
├❒ ${prefix}sound44
├❒ ${prefix}sound45
├❒ ${prefix}sound46
├❒ ${prefix}sound47
├❒ ${prefix}sound48
├❒ ${prefix}sound49
├❒ ${prefix}sound50
├❒ ${prefix}sound51
├❒ ${prefix}sound52
├❒ ${prefix}sound53
├❒ ${prefix}sound54
├❒ ${prefix}sound55
├❒ ${prefix}sound56
├❒ ${prefix}sound57
├❒ ${prefix}sound58
├❒ ${prefix}sound59
├❒ ${prefix}sound60
├❒ ${prefix}sound61
├❒ ${prefix}sound62
├❒ ${prefix}sound63
├❒ ${prefix}sound64
├❒ ${prefix}sound65
├❒ ${prefix}sound66
├❒ ${prefix}sound67
├❒ ${prefix}sound68
├❒ ${prefix}sound69
└❒ ${prefix}sound70
`}

exports.kerangmenu = kerangmenu
exports.soundmenu = soundmenu
exports.helpmenu = help
exports.convertmenu = convert
exports.funmenu = fun
exports.downloadmenu = download
exports.makermenu = maker
exports.textpromenu = textpro
exports.photooxymenu = photooxy
exports.othermenu = other
exports.ownermenu = ownermenu
exports.storagemenu = storage
exports.tagmenu = tag
exports.telestiker = telestiker
exports.cecanmenu= cecanmenu
exports.set_stc_cmd =  setStcCmd
exports.upmenu = upmenu
exports.nsfwmenu = nsfw
exports.asupanmenu = asupan
exports.allmenu = allmenu
exports.coganmenu = coganmenu
exports.image_effect = image_effect_menu
exports.quotesmenu = quotesmenu
exports.animemenu = animemenu
exports.shopmenu = shopmenu
exports.groupmenu = groupmenu
