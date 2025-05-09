import { Link } from "react-router-dom"

const FortyPosrednieDropdown = () => {

    return (
        <div className="FortyDropdown">
            <div> <Link to="/FortyPosrednie/Fort_I"> <button> Fort I "Jan III Sobieski" </button> </Link> </div>
            <div> <Link to="/FortyPosrednie/Fort_VI"> <button> Fort VI "Jaremi Wiśniowiecki" </button> </Link> </div> 
            <div> <Link to="/FortyPosrednie/Fort_VIII"> <button> Fort VIII "Kazimierz Wielki" </button> </Link> </div>
            <div> <Link to="/FortyPosrednie/Fort_X"> <button> Bateria Nadbrzeżna (Fort X) </button> </Link> </div>
            <div> <Link to="/FortyPosrednie/Fort_XII"> <button> Fort XII "Władysław Jagiełło" </button> </Link> </div>
            <div> <Link to="/FortyPosrednie/Fort_XIV"> <button> Fort XIV "Józef Bem" </button> </Link> </div>
        </div>
    );
};

export default FortyPosrednieDropdown;