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
    voice3: [
        { text: "Hello, I am Voya, the Voyadent AI assistant. Am I speaking with Reşat Ayvacı?", start: 0.3 },
        { text: "Yes.", start: 4.5 },
        { text: "Great! I'm calling to follow up on your dental cleaning treatment with Doctor Emirhan Maciter, which you had 6 months ago. How have you been since then? Would you like to schedule another appointment for a check-up or cleaning?", start: 5 },
        { text: "I've been good. Uh, yes. I would like to schedule another appointment to follow-up.", start: 16.6 },
        { text: "That's great to hear! Do you have a preference for a morning or afternoon appointment?", start: 21.9 },
        { text: "Uh, this following Tuesday?", start: 27 },
        { text: "Let me check the availability for Doctor Emirhan Maciter on Tuesday, May 6th. Please hold on for a moment.", start: 28.9 },
        { text: "It seems that Doctor Emirhan Maciter is not available on Tuesday, May 6th. Would you like to consider another day, perhaps Monday, May 5th, or another day that suits you?", start: 35 },
        { text: "Not this week. Following Tuesday. Can you check it?", start: 44 },
        { text: "There's availability on Tuesday, May 13th, between 11 AM and 1 PM. Would you like to schedule your appointment during this time?", start: 49 },
        { text: "Um, is that two weeks from now?", start: 55.3 },
        { text: "Yes, Tuesday, May 13th, is two weeks from now. Would you like to schedule your appointment for that day?", start: 59 },
        { text: "Yes.", start: 65 },
        { text: "Great! I'll schedule your appointment with Doctor Emirhan Maciter on Tuesday, May 13th, between 11 AM and 1 PM. Please confirm if this works for you.", start: 65.3 },
        { text: "Confirm", start: 74 },
        { text: "However, I have a question.", start: 76 },
        { text: "Of course! Feel free to ask your question.", start: 78 },
        { text: "Are you gonna send me SMS or text message or email to confirm the meeting and its details?", start: 79.6 },
        { text: "Yes, you will receive a confirmation message with the details of your appointment via SMS or email. If you have any other questions or need further assistance, feel free to reach out. Thank you for scheduling your appointment with us. Wishing you healthy days, and have a great day!", start: 89 },
        { text: "Thank you. Bye.", start: 105 }
    ],
    voice4: [],
};

