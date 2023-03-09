import React, {useState} from "react";
import NavigationBar from "./Navbar";
import "./Styles/State.css";

function State() {
    const [getNavbarValue, setNavbarValue] = useState("");
    const changeNavbarValue = () => {
        setNavbarValue("My Contact")
    }
        return (
            <>
                <NavigationBar navValue={getNavbarValue}/>
                <div className="home">  
                    <h1>Ini Homepage</h1>
                    <button onClick={() => changeNavbarValue()}>Ubah Navigasi</button>
                </div>
            </>
        )
    }

export default State