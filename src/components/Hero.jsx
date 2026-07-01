import profilImg from "../assets/profil.jpg"

function Hero() {
    return (
        <section className="sticky top-0 h-screen z-10 bg-black text-white p-8 min-h-screen flex flex-col items-center justify-center text-center relative">
            <img src={profilImg} alt="Matthieu Cartiere" className="w-40 h-40 rounded-full object-cover mx-auto mb-4 border-2 border-red-400"></img>

            <div className="bg-red-400 px-4 py-1 rounded-full inline-flex items-center gap-2 mx-auto mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-white text-sm font-medium">Disponible</span>
            </div>

            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-medium">
                    Développeur 
                    <span className="text-red-400"> Flutter</span>
                    <span> & Mobile</span>
                </h1>
                <p className="text-neutral-400 mt-4 max-w-xl mx-auto">
                    Je crée des applications mobiles. 2 applications publiées sur le Play Store, je me forme actuellement à React.
                </p>

                <div className="flex gap-4 mt-8 justify-center">
                    <a href="#projets" className="bg-red-400 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-red-500 transition-colors">
                        Voir mes projets
                    </a>
                    <a href="#contact" className="border border-white/20 text-white px-5 py-2.5 rounded-lg text-sm hover:bg-white/5 transition-colors">
                        Me contacter
                    </a>
                </div>
            </div>
            
        </section>
    )
}

export default Hero;