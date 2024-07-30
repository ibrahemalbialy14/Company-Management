import './sidebar.css'
import SideBarItems from './Components/SidebarItems';

function  SideBar() {
    return(
        <div className="sidebar">
            <div className='header'>
                <img src="/assets/avatar.png" alt="headerimg"/>
                <span className='content'>
                    <h3>Legacy Code</h3>
                    <p className='subContent'>Admin</p>
                </span>
            </div>
            <div className="sidebarItem">
                <SideBarItems title="Dashboard" icon="fa-solid fa-house" href="#" contnet="Dashboard"/>
                <SideBarItems title="Apps" icon="fa-solid fa-landmark" href="#"/>
                <SideBarItems title="Charts" icon="fa-solid fa-chart-line" href="#"/>
                <SideBarItems title="Bootstrap" icon="fa-brands fa-bootstrap" href="#"/>
                <SideBarItems title="plugins" icon="fa-solid fa-heart" href="#"/>
                <SideBarItems title="Widget" icon="fa-solid fa-user-plus" href="#"/>
                <SideBarItems title="Forms" icon="fa-solid fa-align-left" href="#"/>
                <SideBarItems title="Table" icon="fa-solid fa-table" href="#"/>
                <SideBarItems title="Pages" icon="fa-solid fa-book" href="#"/>
            </div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css" />
        </div>
    )
}

export default SideBar;