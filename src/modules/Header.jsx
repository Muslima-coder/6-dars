import { NavLink } from 'react-router-dom'
import { PageRouteList } from '../components/routesList'

const Header = () => {
    return (
    <header className=" shadow-xl shadow-white flex items-center py-5 justify-center gap-[20px] ">
        {PageRouteList.map(item => <NavLink key={item.id} className={'text-white font-bold '} to={item.path}>{item.title}</NavLink>)}
    </header>
    )
}

export default Header