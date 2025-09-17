import { RoundedDecorText } from "../ui/DecorText"

export const LandingPage = () => {
    return(
        <section className="relative overflow-x-hidden w-full h-screen">
            {/* Hero Section */}
            <div className="border w-full p-4 flex">
                {/* Left Side */}
                <div className="border w-[60%]">
                    <h1 className="text-[#ccc] font-black text-[5rem]"><span className="text-amber-200">SECURITY SO STRONG</span> <br /> WE DON'T NEED TO STORE A THING</h1>
                </div>
                {/* Right Side */}
                <div className="w-[40%] flex flex-col items-center justify-center gap-6">
                    <p className="text-white font-light text-[1.2rem]">Our deterministic vault never stores your passwords on a server. <br />
                    Your data, your rules. Giving you the ultimate peace of mind</p>
                    <div className="flex gap-6">
                        <RoundedDecorText text="Try it for free"/>
                        <RoundedDecorText text="Get started" />
                    </div>
                </div>
            </div>
        </section>
    )
}