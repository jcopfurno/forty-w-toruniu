import { Link } from "react-router-dom"

const ObiektyRdzeniaDropDown = () => {

    return (
        <div className="FortyDropdown">
            <div> <Link to="/forty-w-toruniu/ObiektyRdzenia/BastionI"> <button> Bastion I "Nowy" </button> </Link> </div>
            <div> <Link to="/forty-w-toruniu/ObiektyRdzenia/BateriaDobrzynska"> <button> Bateria Dobrzynska </button> </Link> </div> 
            <div> <Link to="/forty-w-toruniu/ObiektyRdzenia/BramaKolejowa"> <button> Brama Kolejowa </button> </Link> </div>
            <div> <Link to="/forty-w-toruniu/ObiektyRdzenia/FortJakuba"> <button> Fort Jakuba </button> </Link> </div>
            <div> <Link to="/forty-w-toruniu/ObiektyRdzenia/FortKolejowy"> <button> Fort Kolejowy </button> </Link> </div>
            <div> <Link to="/forty-w-toruniu/ObiektyRdzenia/MagazynProwiantowy"> <button> Magazyn prowiantowy </button> </Link> </div>
            <div> <Link to="/forty-w-toruniu/ObiektyRdzenia/PrzyczolekMostowy"> <button> Przyczółek Mostowy </button> </Link> </div>
        </div>
    );
};

export default ObiektyRdzeniaDropDown;