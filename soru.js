function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
     this.soruMetni = soruMetni;
     this.cevapSecenekleri = cevapSecenekleri;
     this.dogruCevap = dogruCevap;
 }
 
 Soru.prototype.cevabiKontrolEt = function(cevap) {
     return cevap === this.dogruCevap
 }

 let sorular = [
     new Soru("1-Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" }, "c"),
     new Soru("2-Hangisi frontend kapsaminda degerlendirilmez?", { a: "css", b: "Html", c: "JavaScript" , d: "Sql"}, "d"),
     new Soru("3-Hangisi backend kapsaminda degerlendirilir?", { a: "Node.js", b: "Typescript", c: "angular", d: "React" }, "a"),
     new Soru("4-Hangisi javascript javascript proqramlama dilini kullanmaz?", { a: "React", b: "Angular", c: "Vue.js" , d: "Asp.net"}, "d")
 ];