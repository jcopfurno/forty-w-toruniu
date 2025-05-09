import { Link } from "react-router-dom"

const FortyGlowneDropdown = () => {

    return (
        <div className="FortyDropdown">
            <div> <Link to="/FortyGlowne/Fort_IV"> <button> Fort IV "Stanisław Żółkiewski" </button> </Link> </div>
            <div> <Link to="/FortyGlowne/Fort_VII"> <button> Fort VII "Tadeusz Kościuszko" </button> </Link> </div> 
            <div> <Link to="/FortyGlowne/Fort_XI"> <button> Fort XI "Stefan Batory" </button> </Link> </div>
        </div>
    );
};

export default FortyGlowneDropdown;