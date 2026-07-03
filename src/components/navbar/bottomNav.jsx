import { Link, NavLink } from "react-router-dom";
import "./bottomNav.css";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function BottomNav() {
  let [navstatuse, setnavstatuse] = useState(false);

  const openMenuhandler = () => {
    setnavstatuse(!navstatuse);
  };
  const closeMenuhandler = () => {
    setnavstatuse(!navstatuse);
  };

  useEffect(() => {
  if (navstatuse) {
    document.body.classList.add("menu-open");
  } else {
    document.body.classList.remove("menu-open");
  }
}, [navstatuse]);


  let [navBotLocation , setNavBotLocation] = useState()

  useEffect(() => {

    window.addEventListener('scroll' , () => {
      if (window.scrollY > 80) {
        setNavBotLocation(true)
      }else{
        setNavBotLocation(false)
      }
    })

  } , [])

  return (
    <>
      <div className="BotNavDisNoneResponsive">
        <div
          className={`bottomNavSec ${navBotLocation ? "fixed-bottom bottomNavPadBot" : "fixed-top bottomNavPadTop"} ${navstatuse ? "hide" : ""}`}
        >
          <div className="bottomNav">
            <NavLink className="navlinkes " to="/">
              صفحه اصلی
            </NavLink>
            <NavLink className="navlinkes" to="/add-article">
              ساخت مقاله
            </NavLink>
            <NavLink className="navlinkes" to="/about">
              درباره ما
            </NavLink>
            <a onClick={openMenuhandler} className="navstatuse navlinkes d-flex">
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
        <div className={`resMenu ${navstatuse ? "" : "height-0"}`}>
          <div className={`${navstatuse ? "" : "hide"}`}>
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="lalezar  m-3 fs-1">پرهام آرتیکل</h2>
              <IoClose
                className=" m-3"
                onClick={closeMenuhandler}
                size="40px"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomNav;
