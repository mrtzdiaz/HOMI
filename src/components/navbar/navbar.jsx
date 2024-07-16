const Navbar = function () {
        //<img src="https://www.homi.com.mx/cdn/shop/files/Logo.png?v=1720505122&width=140" alt="HOMI" />
    return (
        <header className="sticky top-0">
            <nav className="bg-zinc-950  min-h-20 flex flex-row justify-between items-center">
                <div className="basis-1/6">
                    <a href="../index.html">
                    LOGO
                    </a>
                </div>
                <section className="text-2xl text-center grid grid-cols-5 mx-10 basis-5/6">
                    {
                        [['Inicio', '/index.html'],
                        ['Costos', '/html/costos.html'],
                        ['Productos', '/html/productos.html'],
                        ['Ingresos', '/html/ingresos.html'],
                        ['Egresos', '/html/egresos.html']
                    ].map(([name, url]) => {
                        const state = (location.href.includes(url)) ? "text-yellow-400" : "text-white"
                        return (
                            <strong key={url}>
                                <a key={name} href={`..${url}`} className={state}>{name}</a>
                            </strong>
                        )
                    })
                }
                </section>
            </nav>
        </header>
    )
}

export default Navbar;