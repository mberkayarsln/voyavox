"use client"
import useIsPlayingStore from "@/src/store/useIsPlayingStore"
import useLanguageStore from "@/src/store/useLanguageStore"
import Image from "next/image"
import Link from "next/link"

const footerElements = [
    {
        title: "Demolar",
        links: [
            {
                title: "Diş Hatırlatma",
                link: "/voice1.mp3"
            },
            {
                title: "Randevu Hatırlatma",
                link: "/voice2.mp3"
            },
        ]
    },
    {
        title: "Şartlar",
        links: [
            {
                title: "Gizlilik Politikası",
                link: "/privacy-policy"
            },
            {
                title: "Kullanım Koşulları",
                link: "/terms-of-use"
            },
        ]
    },
    {
        title: "İletişim",
        links: [
            {
                title: "info@voyavox.com",
                link: "mailto:info@voyavox.com"
            },
            {
                title: "+90 5xx xxx xxx",
                link: "tel:+905xxxxxxxxx"
            },
            {
                title: "Instagram",
                link: "https://www.instagram.com/voyavox?igsh=ZW50M2x1YWs3YTMy"
            },
        ]
    }
]

const footerElementsEn = [
    {
        title: "Demos",
        links: [
            {
                title: "Dental Reminder",
                link: "/voice3.mp3"
            },
            {
                title: "Appointment Reminder",
                link: "/voice4.mp3"
            },
        ]
    },
    {
        title: "Terms",
        links: [
            {
                title: "Privacy Policy",
                link: "/privacy-policy"
            },
            {
                title: "Terms of Use",
                link: "/terms-of-use"
            },
        ]
    },
    {
        title: "Contact",
        links: [
            {
                title: "info@voyavox.com",
                link: "mailto:info@voyavox.com"
            },
            {
                title: "+90 5xx xxx xxx",
                link: "tel:+905xxxxxxxxx"
            },
            {
                title: "Instagram",
                link: "https://www.instagram.com/voyavox?igsh=ZW50M2x1YWs3YTMy"
            },
        ]
    }
]

const Footer = () => {

    const { setSource } = useIsPlayingStore();
    const { language } = useLanguageStore();
    const { isPlaying } = useIsPlayingStore();

    return (
        <footer className="flex w-full max-w-[1024px] flex-col-reverse md:flex-row justify-between items-center gap-8 pb-10 px-12">

            <div className="flex md:flex-col justify-between items-center gap-10 w-full sm:px-6">
                {isPlaying ? (
                    <Link href="/" className="w-full">
                        <Image src="/logo/VoyaVox_logo_whitetext_horizontal_cropped.png" alt="Logo" width={150} height={150} />
                    </Link>) : (
                    <Link href="/" className="w-full">
                        <Image src="/logo/VoyaVox_logo2_cropped.png" alt="Logo" width={150} height={150} />
                    </Link>
                )}
                <div className={`text-${isPlaying ? "white" : "navy"} text-xs font-semibold opacity-50 text-start w-full`}>
                    {language === "tr" ? "Copyright © 2024 Voyavox Tüm hakları saklıdır." : "Copyright © 2024 Voyavox All rights reserved."}
                </div>
            </div>

            <div className={`flex justify-between items-start gap-4 sm:gap-16 text-${isPlaying ? "white" : "navy"} md:w-auto w-full sm:px-6`}>
                {(language === "tr" ? footerElements : footerElementsEn).map((element, index) => (
                    <div key={index} className="flex flex-col gap-3 md:flex-1">
                        <h3 className="font-semibold opacity-50">{element.title}</h3>
                        <ul className="flex flex-col gap-2 text-sm font-semibold">
                            {element.links.map((link, index) => (
                                <li key={index}>
                                    {element.title !== "Demolar" && element.title !== "Demos" ? (
                                        <Link target="_blank" href={link.link}>{link.title}</Link>
                                    ) : (
                                        <div className="cursor-pointer" onClick={() => setSource(link.link)}>{link.title}</div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

        </footer>
    )
}

export default Footer