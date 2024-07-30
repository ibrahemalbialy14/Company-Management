import './SidebarItems.css'

function SidebarItems(props) {

    return (
        <ul className='ul'>
            <li className=''>
                <span className='header'>
                <icon className={props.icon}></icon>
                <p><a href={props.href}>{props.title}</a></p>
                <icon className="fa-solid fa-caret-down"></icon>
                </span>
                <span className='content'>
                    <p><a href={props.href}>{props.contnet}</a></p>
                </span>
                </li>
        </ul>
    )
}

export default SidebarItems