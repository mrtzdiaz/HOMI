const Navbar = function () {

    const pages = [
        {
            name: "Inicio",
            url: "/index.html",
        },
        {
            name: "Costos",
            url: "/html/costos.html",
        },
        {
            name: "Productos",
            url: "/html/productos.html",
        },
        {
            name: "Ingresos",
            url: "/html/ingresos.html",
        },
        {
            name: "Egresos",
            url: "/html/egresos.html",
        }]

    return (
        <header className="sticky top-0">
            <nav className="bg-zinc-950  min-h-20 flex flex-row justify-between items-center">
                <div className="basis-1/6">
                    <a href="../index.html">
                        <img src="https://www.homi.com.mx/cdn/shop/files/Logo.png?v=1720505122&width=140" alt="HOMI" />
                    </a>
                </div>
                <section className="text-2xl text-center grid grid-cols-5 mx-10 basis-5/6">
                    {pages.map(page => {
                        const { name, url } = page
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