//Veri havuzu
const takimlar = [
    { ad: "BEŞİKTAŞ", src: "images/besiktas.png",sampiyonluk: 16 , stad:"İnönü"},
    { ad: "FENERBAHÇE", src: "images/fenerbahce.png" ,sampiyonluk: 19,stad:"Saraçoğlu"},
    { ad: "GALATASARAY", src: "images/galatasaray.png", sampiyonluk: 23,stad:"Ali Sami Yen"},
    { ad: "TRABZONSPOR", src: "images/trabzonspor.png", sampiyonluk: 7, stad:"Avni Aker" },
];

//Sık kullanılan HTML nesneleri
const takim=document.getElementById("takim");
const btnBasla=document.getElementById("btnBasla");
const soru=document.getElementById("soru");
const secenekler=document.getElementById("secenekler");
const sonuc=document.getElementById("sonuc");

//Olay yakalyıcı
btnBasla.addEventListener("click",yaris);

//Fonksiyon tanımı
function yaris(){
    soru.innerHTML="";
    secenekler.innerHTML="";

    let rastgeleTakim = Math.floor(Math.random() * takimlar.length);
    takim.src=takimlar[rastgeleTakim].src;
    soru.innerHTML=takimlar[rastgeleTakim].ad+" kaç kez şampiyon olmuştur?";
    
    const secenek1=document.createElement("button");
    secenekler.appendChild(secenek1);
    secenek1.setAttribute("id", "secenek1");
    secenek1.classList.add("secenek");
    secenek1.innerHTML=takimlar[rastgeleTakim].sampiyonluk;
    secenek1.addEventListener("click", function() {
        if (takimlar[rastgeleTakim].sampiyonluk === takimlar[rastgeleTakim].sampiyonluk) {
            sonuc.innerHTML = "Tebrikler, doğru cevap!";
        } else {
            sonuc.innerHTML = "Maalesef, yanlış cevap!";
        }
        btnBasla.disabled = false;
    });

    const secenek2=document.createElement("button");
    secenekler.appendChild(secenek2);
    secenek2.setAttribute("id", "secenek2");
    secenek2.classList.add("secenek");
    secenek2.innerHTML=takimlar[rastgeleTakim].sampiyonluk+1;
    secenek2.addEventListener("click", ()=> {
        if (takimlar[rastgeleTakim].sampiyonluk === takimlar[rastgeleTakim].sampiyonluk+1) {
            sonuc.innerHTML = "Tebrikler, doğru cevap!";
        } else {
            sonuc.innerHTML = "Maalesef, yanlış cevap!";
        }
        btnBasla.disabled = false;
    });

}
