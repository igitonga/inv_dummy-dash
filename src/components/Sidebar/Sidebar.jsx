import React from "react";
import "./sidebar.scss"
import Face from "../../assets/me.png"
import { Outlet } from "react-router-dom";
import { BiBell, BiSearch, BiLogOut, BiChevronDown } from 'react-icons/bi';
import ReactTooltip from 'react-tooltip';

const Sidebar = () => {
    return(
        <nav>
            <div className="sidebar-cont"> 

                <p className="logo">Inventron</p>


                <ul className="nav-links">
                    <li>
                        <span className="material-symbols-outlined">home</span>
                        <span class="">Dashboard</span>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">folder</span>
                        <span class="">Inventory</span>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">pie_chart</span>
                        <span class="">Transactions</span>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">group</span>
                        <span class="">People</span>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">storefront</span>
                        <span class="">Shops</span>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">mail</span>
                        <span class="">Chat support</span>
                    </li>
                </ul>

                <div className="menu-cont">
                    <img className="dp" src={Face} alt="" />
                    <div className="profile">
                        <p>Tafari Mwangi</p>
                        <span className="active">
                            <p>Active</p>
                            <BiChevronDown />
                        </span>
                    </div>
                </div>
            </div>
            <div className="right-body">
                <div className="topnav-cont">
                    <div className="topbar__search">
                        <BiSearch />
                        <input type='text' placeholder={'Search'} />
                    </div>
                    <div data-tip={'chat'}
                        data-for={'chat'} className="notification">
                        <BiBell />
                        <span></span>
                        <ReactTooltip
                            id={'chat'}
                            effect={'solid'}
                            arrowColor={'#ffffff'}
                            className="skills_tooltip">
                            Notifications
                        </ReactTooltip>
                    </div>
                    <div data-tip={'logout'}
                        data-for={'logout'} className="notification">
                        <BiLogOut />
                        <ReactTooltip
                            id={'logout'}
                            effect={'solid'}
                            arrowColor={'#ffffff'}
                            className="skills_tooltip">
                            Logout
                        </ReactTooltip>
                    </div>
                </div>
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </nav>
    )
}

export default Sidebar