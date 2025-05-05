export const handleDemoStart = (setIsPlaying: (arg0: boolean) => void) => {

    setIsPlaying(true);
    const body = document.querySelector("body");
    if (body)
        body.style.backgroundColor = "black";
}

export const handleDemoStop = (setIsPlaying: (arg0: boolean) => void) => {

    setIsPlaying(false);
    const body = document.querySelector("body");
    if (body)
        body.style.backgroundColor = "transparent";
}

export const transcripts = {
    voice1: [
        { text: "Merhaba ben Voyadent yapay zeka asistanı Voya. Oylum Günay ile mi görüşüyorum?", start: 3.6 },
        { text: "Evet ben Oylum Günay.", start: 9 },
        { text: "Merhaba Oylum Hanım, 2 Mayıs 2025 tarihinde saat 09:00 ile 09:30 arasında Doktor Emirhan Maciter ile bir randevunuz bulunmakta. Bu randevunuza gelebileceğinizi teyit edebilir misiniz?", start: 12.9 },
        { text: "Maalesef gelemeyeceğim. Bir hafta sonraya alabilir miyim?", start: 26.3 },
        { text: "Tabii ki, bir hafta sonraki tarih olan 9 Mayıs 2025 için Doktor Emirhan Maciter'in müsaitlik durumuna bakacağım. Öğleden önce mi yoksa öğleden sonra mı tercih edersiniz?", start: 34 },
        { text: "Aslında sekiz Mayıs saat öğleden sonra iki gibi olursa daha iyi.", start: 45.3 },
        { text: "8 Mayıs tarihinde öğleden sonra 2'de müsaitlik bulunmuyor. Ancak öğleden sonra 3'te müsaitlik var. Bu saat sizin için uygun olur mu?", start: 55 },
        { text: "Evet olur teşekkür ederim.", start: 62.3 },
        { text: "Randevunuz 8 Mayıs 2025 tarihinde, öğleden sonra saat 3'te Doktor Emirhan Maciter ile olacak şekilde başarıyla değiştirildi. Onayladığınız için teşekkür ederiz. Sağlıklı günler dileriz.", start: 70 },
        { text: "İyi günler, teşekkürler.", start: 82.3 },
    ],
    voice2: [],
    voice3: [],
    voice4: [],
};
