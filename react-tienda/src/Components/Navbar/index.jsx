import { NavLink } from "react-router-dom"

const Navbar = () => {

    const activeStyle = 'underline underline-offset-4';

//crear navbar desktop - mobile

    return (
        <nav className='justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light md:flex hidden'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink 
                        to = '/'>
                        Tiendita
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }>
                        Todo
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/ropa'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }>
                        Ropa
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/electronica'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }>
                        Electronica
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/muebles'
                        className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Muebles
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/jugetes'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }>
                        Jugetes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/otros'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }>
                        Otros
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    correo@correo.cl
                </li>
                <li>
                    <NavLink 
                        to = '/my-orders'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/my-account'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/sign-in'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    🛒0
                </li>
            </ul>
        </nav>
    )
}

export default Navbar