import React from "react";
import "./dashboard.scss"
import WelcomeDashCard from "../components/WelcomeDash/welcomedash";
import CreditSales from "../components/CreditSales/CreditSales";
import UtilsCard from "../components/UtilsCard/UtilsCard";
import Wallet from "../assets/wallet.svg"
import Download from "../assets/download.svg"
import Copy from "../assets/copy.svg"
import PeopleTable from "../components/PeopleTable/PeopleTable";
import Revenue from "../components/Revenue/Revenue";
import Spending from "../components/Spending/Spending";
import Performance from "../components/Performance/Performance"
import { BsArrowUpRight, BsEyeFill } from 'react-icons/bs';
import Inventory from "../components/Inventory/inventory";

const Dashboard = () => {
    return(
        <div className="main">
            <div className="major">
                <h1>Dashboard</h1>
                <WelcomeDashCard />
                <CreditSales />
                <Performance />
                <div className="chini-cont">
                    <Spending />
                    <PeopleTable />
                </div>
            </div>
            <div className="analysis">
                <Revenue />
                <div className="cards_cont">
                    <UtilsCard icon={Copy}
                            value="12"
                            text1="Pending"
                            text2="Credit sales"
                            bg="#2D62ED"
                            bs={<BsArrowUpRight/>} />
                    <UtilsCard icon={Download}
                                value="400"
                                text1="My"
                                text2="Customers"
                                bg="#FD9C29"
                                bs={<BsArrowUpRight/>} />
                    <UtilsCard icon={Download}
                            value="32"
                            text1="Items"
                            text2="Out of stock"
                            bg="#FE2929"
                            bs={<BsArrowUpRight/>} />
                    <UtilsCard icon={Wallet}
                                value="KES ****"
                                text1="Wallet"
                                text2="Balance"
                                bg="#9329FE"
                                bs= {<BsEyeFill/>}/>
                </div>
                <Inventory />
            </div>
        </div>
    )
}

export default Dashboard