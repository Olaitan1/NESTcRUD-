// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { AllContext } from "../../context/types";
import { AuthButton } from "../Buttons/Buttons";
// import style from "./navbar.module.css";
// import { AiOutlineLogin } from "react-icons/ai";


// interface NavbarProps
// {
//   onLogin: () => void;
//   onLogout: () => void;
// }

// const Navbar = () => {
//   const { handleLogout, changeForm, handleDeleteAccount, isLoggedIn } = useContext(DataContext) as AllContext;
//   const [showMenu, setShowMenu] = useState("hide");

//   const handleMenu = () => {
//     showMenu === "hide" ? setShowMenu("show") : setShowMenu("hide");
//   };

//   const deleteWarn = () =>{
//     const result = confirm("Are you sure you want to delete your account? This action is irreversible.")
//     if(result === true){
//       handleDeleteAccount()
//     }
//     return;
//   }

//   return (
//     <div className={style["nav-container"]}>
//       <div>
//         <Link to="/" placeholder="CHAMSMOBILE">
//           CHAMSMOBILE
//         </Link>
//       </div>
//       <div className={style["auth-container"]}>
//         {!isLoggedIn && (
//           <>
//             <AuthButton text="Login" onClick={() => changeForm("login")} />
//             <AuthButton text="Signup" onClick={() => changeForm("signup")} />
//           </>
//         )}
//         {isLoggedIn && (
//           <><span className={style["logout"]} onClick={handleLogout}>
//             Logout
//           </span>
//           <span  className={style["logout"]} onClick={()=>deleteWarn()}>
//             Delete account
//           </span>
//           </>
//         )}
//       </div>

//       <div className={style["small-screen"]}>
//         <AiOutlineLogin onClick={handleMenu} />
//         <div className={style["small-screen-auth"] + " " + style[showMenu]}>
//           {!isLoggedIn && (
//             <>
//               <div>
//                 <AuthButton text="Login" onClick={() => changeForm("login")} />
//               </div>
//               <div>
//                 <AuthButton
//                   text="Signup"
//                   onClick={() => changeForm("signup")}
//                 />
//               </div>
//             </>
//           )}
//           <div>
//             {isLoggedIn && (
//               <span className={style["logout"]} onClick={handleLogout}>
//                 Logout
//               </span>
//             )}
//           </div>
//           <div>
//           {isLoggedIn && (
//           <span  className={style["logout"]} onClick={()=>deleteWarn()}>
//             Delete account
//           </span>)}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLogin } from 'react-icons/ai';
import style from './Navbar.module.css';
// import { AuthButton } from '../';
// import { DataContext, AllContext } from '../../contexts';

interface NavbarProps
{
  onLogin: () => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogin, onLogout }) =>
{
  const { handleLogout, changeForm, handleDeleteAccount, isLoggedIn } =
    useContext(DataContext) as AllContext;
  const [showMenu, setShowMenu] = useState('hide');

  const handleMenu = () =>
  {
    showMenu === 'hide' ? setShowMenu('show') : setShowMenu('hide');
  };

  const deleteWarn = () =>
  {
    const result = window.confirm(
      'Are you sure you want to delete your account? This action is irreversible.'
    );
    if (result === true) {
      handleDeleteAccount();
    }
    return;
  };

  return (
    <div className={style['nav-container']}>
      <div>
        <Link to='/' placeholder='CHAMSMOBILE'>
          CHAMSMOBILE
        </Link>
      </div>
      <div className={style['auth-container']}>
        {!isLoggedIn && (
          <>
            <AuthButton text='Login' onClick={() => changeForm('login')} />
            <AuthButton text='Signup' onClick={() => changeForm('signup')} />
          </>
        )}
        {isLoggedIn && (
          <>
            <span className={style['logout']} onClick={onLogout}>
              Logout
            </span>
            <span className={style['logout']} onClick={() => deleteWarn()}>
              Delete account
            </span>
          </>
        )}
      </div>

      <div className={style['small-screen']}>
        <AiOutlineLogin onClick={handleMenu} />
        <div className={style['small-screen-auth'] + ' ' + style[showMenu]}>
          {!isLoggedIn && (
            <>
              <div>
                <AuthButton
                  text='Login'
                  onClick={() => changeForm('login')}
                />
              </div>
              <div>
                <AuthButton
                  text='Signup'
                  onClick={() => changeForm('signup')}
                />
              </div>
            </>
          )}
          <div>
            {isLoggedIn && (
              <span className={style['logout']} onClick={onLogout}>
                Logout
              </span>
            )}
          </div>
          <div>
            {isLoggedIn && (
              <span className={style['logout']} onClick={() => deleteWarn()}>
                Delete account
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

