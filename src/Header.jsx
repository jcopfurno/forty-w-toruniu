import { Link } from "react-router-dom"
import FortyGlowneDropdown from "./header/FortyGlowneDropdown";
import FortyPosrednieDropdown from "./header/FortyPosrednieDropdown";
import ObiektyRdzenia from "./header/ObiektyRdzeniaDropDown";

function Header() {
    return (
        <>
            <header> 
                <div></div>
                <Link to="/"> 
                    <button className="headerButton">
                        FortyTorun.pl
                    </button> 
                </Link>
                
                <div class="line"></div>

                <div class="dropdown">
                        <button className="headerButton">
                            Forty Główne
                        </button>
                        <FortyGlowneDropdown> </FortyGlowneDropdown>
                </div>
                
                <div class="line"></div>

                <div class="dropdown">
                    <button className="headerButton">
                        Forty pośrednie
                    </button>
                    <FortyPosrednieDropdown></FortyPosrednieDropdown>
                </div>

                <div class="line"></div>

                <div class="dropdown">
                    <button className="headerButton">
                        Obiekty Rdzenia
                    </button>
                    <ObiektyRdzenia></ObiektyRdzenia>
                </div>

                <div class="line"></div>

                <Link to="/Kontakt">
                    <button className="headerButton">
                        Kontakt
                    </button>
                </Link>
                <div></div>
            </header>
        </>
    )
}
    
export default Header