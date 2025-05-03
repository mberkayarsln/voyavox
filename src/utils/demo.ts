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
    voice1: {
        tr: [
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
        en: [
            { text: "Hello, I am Voya, the AI assistant of Voyadent. Am I speaking with Oylum Günay?", start: 3.6 },
            { text: "Yes, this is Oylum Günay.", start: 9 },
            { text: "Hello Ms. Oylum, you have an appointment with Doctor Emirhan Maciter on May 2nd, 2025 between 09:00 and 09:30. Can you confirm that you will be able to attend this appointment?", start: 12.9 },
            { text: "Unfortunately, I won't be able to make it. Can I reschedule for a week later?", start: 26.3 },
            { text: "Of course, let me check the availability of Doctor Emirhan Maciter for the date one week later, which is May 9th, 2025. Would you prefer morning or afternoon?", start: 34 },
            { text: "Actually, if it's possible for May 8th at two in the afternoon, that would be better.", start: 45.3 },
            { text: "There is no availability on May 8th at two in the afternoon. However, there is availability at three in the afternoon. Would that time work for you?", start: 55 },
            { text: "Yes, that works. Thank you.", start: 62.3 },
            { text: "Your appointment has been successfully rescheduled to May 8th, 2025 at three in the afternoon with Doctor Emirhan Maciter. Thank you for confirming. We wish you healthy days ahead.", start: 70 },
            { text: "Good day, thank you.", start: 82.3 },
        ],
    },
    voice2: {
        tr: [],
        en: [],
    },
};
