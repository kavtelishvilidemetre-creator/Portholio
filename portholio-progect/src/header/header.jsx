import "./header.css";

function Header(){
    return(
        <header>
            <ul>
                <li className = "home"><a href="#">home</a></li>
                <li className = "about-me"><a href="#">about me</a></li>
                <li className = "contact-us"><a href="#">contact us</a></li>
            </ul>
        </header>
    );
}

export default Header;