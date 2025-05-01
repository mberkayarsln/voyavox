import Image from "next/image";

const logos = [
    "/partner_logo/dentaline_120x90.png",
    "/partner_logo/dentpedia_120x90.png",
    "/partner_logo/goksel_120x90.png",
    "/partner_logo/medikor_120x90.png",
    "/partner_logo/voyadent_120x90.png",
]

const LogoSlider = () => {

    return (
        <div className="bg-[url('/logo_slider_background.png')] bg-cover bg-center h-[90px] min-[340px]:w-[310px] min-[420px]:w-[390px] min-[500px]:w-[470px] min-[580px]:w-[550px] sm:w-full rounded-[40px] overflow-x-hidden flex items-center justify-between gap-[106px]">
            <div className="flex items-center justify-between min-w-full gap-16 flex-shrink-0 animate-marquee">
                {logos.map((logo, index) => (
                    <Image
                        key={index}
                        src={logo}
                        alt="Logo"
                        width={120}
                        height={90}
                    />
                ))}
            </div>
            <div className="flex items-center justify-between min-w-full gap-16 flex-shrink-0 animate-marquee">
                {logos.map((logo, index) => (
                    <Image
                        key={index}
                        src={logo}
                        alt="Logo"
                        width={120}
                        height={90}
                    />
                ))}
            </div>
        </div>
    )
}

export default LogoSlider