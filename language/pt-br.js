/*
   *
     If you find an error in writing a word / sentence please contact me
   *
*/
exports.limit = (prefix) =>{
	return` ⚠️ Seu limite acabou, envie ${prefix}limit para verificar o limite`
}
exports.limitg= (prefix) =>{
	return` ⚠️ Seu limite de jogo acabou, envie ${prefix}limit para verificar o limite`
}
exports.event = (prefix) =>{
	return` ⚠️ O evento do grupo não foi ativado, envie o comando ${prefix}event on para ativar`
}
exports.wait = () => {
	return `⏳ Espere um momento...`
	}
exports.success = () => {
	return `✅ Finalizado ...`
	}
exports.successBc = () => {
	return `✅ Sucesso na transmissão`
	}
exports.wrongFormat = () => {
	return `❎ O formato está errado, tente verificar novamente no menu`
	}
exports.erorStik = () => {
	return `❎ Isso não é um adesivo`
	}
exports.tagStik = () => {
	return `❎ Responder / marcar o adesivo`
	}
exports.erorLink = () => {
	return `❎ Link inválido`
	}
exports.onlygc = () => {
	return `❎ Este recurso é apenas para grupos`
	}
exports.onlyOwner = () => {
	return `❎ Proprietário Especial Bot`
	}
exports.benned = () => {
	return `❎ Desculpe, seu número foi bloqueado`
	}
exports.onlygcAdmin = () => {
	return `❎ Apenas administrador de grupo`
	}
exports.cariCecan = () => {
	return `⏳ Mencari cecan`
	}
exports.cariCogan = () => {
	return `⏳ Mencari cogan`
	}
exports.pesanBot = () => {
	return `❎ Responda à mensagem do bot`
	}
exports.replyFoto = () => {
	return `❎ Responder foto`
	}
exports.tagUser = () => {
	return `❎ Tag @user`
	}
exports.noReply = () => {
	return `❎ A mensagem que você respondeu não continha uma resposta`
	}
exports.changeNmGc = () => {
	return `✅ Mudança bem-sucedida do nome do grupo`
	}
exports.changeDeskGc = () => {
	return `✅ Mesa de grupo alterada com sucesso`
	}
exports.spam = (prefix, command) => {
	return `❎ Exemplo ${prefix + command} texto|quantia`
	}
exports.tahta = (prefix, command) => {
	return `❎ Exemplo ${prefix + command} zeeone|ofc`
	}
exports.noteks = (prefix, command) => {
	return `❎ Exemplo ${prefix + command} zeeone`
	}
exports.botNotAdm = () => {
	return `Faça bot admin para usar este comando`
	}
exports.tryAgain = () => {
	return `❎  Falha, tente novamente ^_^`
	}
exports.anlinOn = () => {
	return `✅ Antilink Di Aktifkan`
	}
exports.anlinOff = () => {
	return `✅ Antilink Di Nonaktifkan`
	}
exports.notregis = (prefix, sender) => {
	return `Hai @${sender.split("@")[0]} kamu belum terdaftar di database, silahkan ketik ${prefix}verify\n\nKamu juga bisa daftar dengan cara mengirimkan kode verifikasi dari web api\nhttps://api-alphabot.herokuapp.com/api/verification`
	}
exports.udahregis = (pushname) => {
	return `Hai ${pushname} kamu sudah terdaftar di database`
	}
exports.enNum = () => {
 return `❎ Digite os números corretamente`
 }
exports.adminGc = () => {
 return `Porque você é o administrador, então o bot não irá desconectá-lo`
 }
 exports.izinDt = () => {
 return `Permissão aceita`
 }
 exports.anjawaOn = (command) => {
	return `✅ ${command} ativado`
	}
exports.anjawaOff = (command) => {
	return `✅ ${command} Desabilitado`
	}
exports.anjawaUdhOn = (command) => {
	return `✅ ${command} esteve ativo antes`
	}
exports.anjawaUdhOon = (command) => {
	return `Selecione ativado para ativar, desativado para desativar`
	}
exports.onORoff = (command) => {
	return `Selecione ativado para ativar, desativado para desativar`
	}
exports.gcOpen = (command) => {
	return `✅  Grupo aberto com sucesso`
	}
exports.gcClose = (command) => {
	return `✅ Grupo fechado com sucesso`
	}
exports.nsfwmo= () => {
	return `O recurso nsfw não foi ativado, entre em contato com o proprietário do bot para ativá-lo`
	}
exports.erorCode = () => {
 return `Kode yang anda masukkan salah silahkan cek kembali\nhttps://api-alphabot.herokuapp.com/api/verification`
 }
 exports.callOwner = () => {
 return `Contate o proprietário para usar este recurso`
 }
 //vote
exports.noSesiVote = () => {
 	return`Sem sessão de votação`
 }
exports.suksesDelVot = () => {
	return`Sessão de votação excluída com sucesso neste grupo`
	}
exports.adaVoting = () => {
	return`Sessão de votação em andamento neste grupo`
	}
exports.caraVoting = (prefix, command) => {
    return`*Voto*\n\n${prefix + command} @tag alvo | razão  | 1 (1 = 1 Minuto)`
    }
exports.caraVot = () => {
 	return`insira o número na linha 3\nExemplo: 1-9999\n1 = 1 Minuto`
    }
//ttt
exports.noSesiTtt = () =>{
	return`Não há sessão de tictactoe neste grupo`
	}
exports.suksesDelTtt = () =>{
	return`Sessão de tictactoe excluída com sucesso neste grupo`
	}
//on & off
exports.ownerOff = () =>{
	return`Meu dono estava de folga`
	}
exports.ownerOn = () =>{
	return`Meu dono está de volta`
	}