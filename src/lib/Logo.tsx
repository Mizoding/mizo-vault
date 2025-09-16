import { Link } from "react-router-dom";

interface LogoProperties{
    url: string;
    logoImg?: string;
    logoImgAlt?: string;
    logoText?: string;
    style?: any;
}

export const Logo = ({url, logoImg, logoImgAlt, logoText, style}: LogoProperties) => {
    const defaultStyles = {width:"auto"}
    return(
        <Link to={url} className="flex items-center gap-4 ">
            <img src={logoImg ? logoImg : ""} alt={ logoImgAlt ? logoImgAlt : ""} style={style ? style : defaultStyles}/>
            <span className="text-white font-bold text-md">{logoText ? logoText : "template text"}</span>
        </Link>
    )
}