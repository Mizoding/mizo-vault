import mizvaultlogo from "../assets/mizovault_logo.svg";
export const Header = () => {
    return(
        <header className="w-full bg-dark-10 p-4">
            <div className="w-full flex items-center justify-between p-2">
                {/* Logo */}                
                <div className="flex items-center gap-4">
                    <img src={mizvaultlogo} alt="MizoVault - Logo" width="60px"/>
                    <span className="text-white font-bold text-xl">Mizo<span className="text-darkgrey-10">Vault</span></span>
                </div>
                {/* Navigation */}
                <nav>
                    <ul className="gap-2 flex">
                        <button className="bg-white font-bold px-4 py-2 rounded-md">Log In</button>
                        <button className="text-white font-bold px-4 py-2 border rounded-md">Register</button>
                    </ul>
                </nav>
            </div>
        </header>
    )
}