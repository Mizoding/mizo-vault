import mizvaultlogo from "../assets/mizovault_logo.svg";
import { Logo } from "../lib/Logo";

export const Header = () => {
    const logoStyles = {width: "40px"}
    return(
        <header className="w-full p-4 border border-b-[#1b1b1b]">
            <div className="w-full flex items-center justify-between p-2">
                {/* Logo */}                
                <div className="flex items-center gap-4">
                    <Logo url="/" logoImg={mizvaultlogo} logoImgAlt="MizoVault Logo" logoText="MizoVault" style={logoStyles}/>
                </div>
                {/* Navigation */}
                <nav>
                    <ul className="text-white flex gap-6 border border-[#1b1b1b] bg-[#060606] px-8 py-4 rounded-full overflow-hidden">
                        <li>Products</li>
                        <li>Solutions</li>
                        <li>Resources</li>
                        <li>Partners</li>
                        <li>Pricing</li>
                    </ul>
                </nav>
                {/* Action Buttons */}
                <nav>
                    <ul className="gap-2 flex">
                        <button className="text-white px-8 py-4 border bg-[#060606] border-[#1b1b1b] rounded-full">Try for free</button>
                    </ul>
                </nav>
            </div>
        </header>
    )
}