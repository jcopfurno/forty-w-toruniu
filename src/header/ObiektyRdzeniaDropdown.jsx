import { Link } from "react-router-dom"

const ObiektyRdzeniaDropDown = () => {

    return (
        <div className="FortyDropdown">
            <div> <Link to="/ObiektyRdzenia/BastionI"> <button> Bastion I "Nowy" </button> </Link> </div>
            <div> <Link to="/ObiektyRdzenia/BateriaDobrzynska"> <button> Bateria Dobrzynska </button> </Link> </div> 
            <div> <Link to="/ObiektyRdzenia/BramaKolejowa"> <button> Brama Kolejowa </button> </Link> </div>
            <div> <Link to="/ObiektyRdzenia/FortJakuba"> <button> Fort Jakuba </button> </Link> </div>
            <div> <Link to="/ObiektyRdzenia/FortKolejowy"> <button> Fort Kolejowy </button> </Link> </div>
            <div> <Link to="/ObiektyRdzenia/MagazynProwiantowy"> <button> Magazyn prowiantowy </button> </Link> </div>
            <div> <Link to="/ObiektyRdzenia/PrzyczolekMostowy"> <button> Przyczółek Mostowy </button> </Link> </div>
        </div>
    );
};

export default ObiektyRdzeniaDropDown;