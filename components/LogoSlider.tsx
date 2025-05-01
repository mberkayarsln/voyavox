import Image from "next/image";

const logos = [
    "/partner_logo/dentaline.png",
    "/partner_logo/dentpedia.png",
    "/partner_logo/goksel.png",
    "/partner_logo/medikor.png",
    "/partner_logo/voyadent.png",
]

const LogoSlider = () => {
    return (
        <div className="bg-[url('/logo_slider_background.png')] bg-cover bg-center h-[90px] w-full rounded-[40px] overflow-x-hidden flex items-center justify-between gap-[106px]">
            <div className="flex items-center justify-between min-w-full flex-shrink-0 animate-marquee">
                {logos.map((logo, index) => (
                    <Image
                        key={index}
                        src={logo}
                        alt="Logo"
                        width={120}
                        height={120}
                        className="h-[90px] object-contain"
                    />
                ))}
            </div>
            <div className="flex items-center justify-between min-w-full flex-shrink-0 animate-marquee">
                {logos.map((logo, index) => (
                    <Image
                        key={index}
                        src={logo}
                        alt="Logo"
                        width={120}
                        height={120}
                        className="h-[90px] object-contain"
                    />
                ))}
            </div>
        </div>
    )
}

export default LogoSlider