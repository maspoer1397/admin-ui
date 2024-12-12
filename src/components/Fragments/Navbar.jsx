import { Link, NavLink } from "react-router-dom";
import { Icon } from "../Elements/Icon";
import Logo from "../Elements/Logo";

const Navbar = () => {
    const menus = [
        {
            id: "overview",
            link: "/",
            icon: <Icon.Overview />,
            label: "Overview",
        },
        {
            id: "balance",
            link: "/balance",
            icon: <Icon.Balance />,
            label: "Balance",
        },
        {
            id: "transaction",
            link: "/transaction",
            icon: <Icon.Transaction />,
            label: "Transaction",
        },
        {
            id: "bill",
            link: "/bills",
            icon: <Icon.Bills />,
            label: "Bills",
        },
        {
            id: "expenses",
            link: "/expenses",
            icon: <Icon.Expenses />,
            label: "expenses",
        },
        {
            id: "goals",
            link: "/Goals",
            icon: <Icon.Goals />,
            label: "Goals",
        },
        {
            id: "setting",
            link: "/setting",
            icon: <Icon.Setting />,
            label: "setting",
        },
    ];

    return (
        <div className="bg-defaultBlack">
            <nav className="sticky top-8 text-special-bg2 sm:w-72 w-36 min-h-screen px-7 py-12 flex flex-col justify-between">
                <div>
                    <NavLink to="/" className="flex justify-center mb-10">
                        <Logo variant="text-white text-sm sm:text-2xl"/>
                    </NavLink>
                    {menus.map((menu) => (
                        // eslint-disable-next-line react/jsx-key
                        <NavLink 
                            key={menu.id} 
                            to={menu.link}
                            className={({ isActive}) =>
                                isActive 
                                ? "flex bg-primary text-white font-bold px-4 py-3 rounded-md"
                                : "flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md"
                            } >
                            <div className="mx-auto sm:mx-0">{menu.icon}</div>
                            <div className="ms-3 hidden sm:block">{menu.label}</div>
                        </NavLink>
                        
                        // <Link to={menu.link} >
                        //     <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md">
                        //     <div className="mx-auto sm:mx-0">{menu.icon}</div>
                        //     <div className="ms-3 hidden sm:block">{menu.label}</div>
                        //     </div>
                        // </Link>
                    ))}
                </div>
                <div className="sticky bottom-12">
                    <Link to="/logout">
                        <div className="flex bg-special-bg3 px-4 py-3 rounded-md hover:text-white">
                            <div className="mx-auto sm:mx-0"><Icon.Logout/></div>
                            <div className="ms-3 hidden sm:block">Logout</div>
                        </div>
                    </Link>
                    <div className="border-b my-10 border-b-special-bg"></div>
                    <div className="flex justify-between">
                        <div className="mx-auto sm:mx-0">
                            <img src="images/profil.png"></img>
                        </div>
                        <div className="hidden sm:block">
                            <div className="text-whitefont-bold">Username</div>
                            <div className="text-xs">View Profile</div>
                        </div>
                        <div className="hidden sm:block self-center justify-self-end" ><Icon.Menu/></div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;