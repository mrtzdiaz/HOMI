import { useState } from "react"

const Navbar = function () {
    
    const [stateNavbar, changeNavbar] = useState(false);
    const visibility = stateNavbar? "visible":"invisible";
    const handleNavbar = function(){
        changeNavbar(!stateNavbar);
    }
    
    
    return (
        <header className="sticky top-0">
            <nav className="flex flex-row justify-between items-center min-h-20 bg-blackH">
                <div className="ml-5">
                    <a href="../index.html">
                        <img src="https://www.homi.com.mx/cdn/shop/files/Logo.png?v=1720505122&width=140" alt="HOMI" />
                    </a>
                </div>
                <ul className="flex mr-10 text-2xl text-center font-bold">
                    {
                        [['Inicio', '/index.html'],
                        ['Costos', '/html/costos.html'],
                        ['Productos', '/html/productos.html'],
                        ['Ingresos', '/html/ingresos.html'],
                        ['Egresos', '/html/egresos.html']
                        ].map(([name, url]) => {
                            const state = (location.href.includes(url)) ? "text-yellow-400" : "text-white hover:text-yellow-400"
                            return (
                                <li key={url} className="mx-5 hidden md:block">
                                    <a key={name} href={`..${url}`} className={state}>{name}</a>
                                </li>
                            )
                        })
                    }
                    <li className="mr-5 md:hidden" onClick={handleNavbar}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </li>
                </ul>
            </nav>

            <nav className={`${visibility} absolute top-0 right-0 md:hidden w-64 bg-blackH`}>
                <ul className="my-16 ml-10 text-2xl text-left font-bold">
                    <li onClick={handleNavbar}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="5 0 24 24" strokeWidth={1.5} stroke="white" className="size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </li>
                    {
                        [['Inicio', '/index.html'],
                        ['Costos', '/html/costos.html'],
                        ['Productos', '/html/productos.html'],
                        ['Ingresos', '/html/ingresos.html'],
                        ['Egresos', '/html/egresos.html']
                        ].map(([name, url]) => {
                            const state = (location.href.includes(url)) ? "text-yellow-400" : "text-white hover:text-yellow-400"
                            return (
                                <li key={url} className="my-2">
                                    <a key={name} href={`..${url}`} className={state}>{name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;