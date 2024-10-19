import Image from "next/image";
import react, {useEffect,} from "react";
function Theme() {
    useEffect(()=>{
        const mode = localStorage.getItem("mode");
        if(mode){
            document.documentElement.classList.add("dark");
        }
    },[])
    const toggleMode = (mode) => {
        if (mode === "add") {
            document.documentElement.classList.add("dark");
            localStorage.setItem('mode','dark')
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.removeItem('mode')
        
        }
    };
    return (
        <div className="theme_toggle">
            <div className="day_mode" onClick={() => toggleMode("add")} >
                <Image src="/dark.svg" width="20" height="21" alt="night_mood" className="night_mood" />
            </div>
            <div className="night_mode" onClick={() => toggleMode("remove")} >
                <Image src="/day_white.svg" width="20" height="20" alt="day_mood" />
            </div>
        </div>
    )
}

export default Theme