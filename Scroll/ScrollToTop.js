import { useEffect, useState } from "react";
import React from "react";

function ScrollToTop() {
    const [ScrollToTop, setScrollToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",() =>  {
            if(window.scrollY > 1) {
                setScrollToTop(true)
            }else{
                setScrollToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0, behavior: "smooth"
        })
    }
  return <div className="App">
    {ScrollToTop &&(
        <button style = {{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",
            fontSize: "25px",
            
        }} onClick = {scrollUp}>
            UP
        </button>
    )}
    </div>
}

export default ScrollToTop