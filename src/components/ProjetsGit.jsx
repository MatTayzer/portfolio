import { FaGithub } from "react-icons/fa"
import { FcDataBackup } from "react-icons/fc"

import BackupW11 from "../assets/backup-w11.png"

const projetsGit = [
    {nom: "Sauvegarde Profils W11", image: BackupW11, description: "Permet de faire des sauvegarde de profils Windows 11.", lang: [], href: "https://www.google.com"}
]

function ProjetsGit() {
    return (
        <section id="projetsGit" className="relative z-20 bg-[#171717] text-white py-20 px-8">
            <svg
                className="absolute top-0 left-0 w-full h-24 -translate-y-full"
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,64 C360,120 1080,0 1440,64 L1440,120 L0,120 Z"
                    fill="#171717"
                />
            </svg>
            <h2 className="text-white text-xl font-medium text-center mb-12">
                Projets publiés
            </h2>
            <div className="flex flex-wrap sm:flex-row justify-center gap-6">
                {projetsGit.map((projet) => (
                    <div key={projet.name} className="flex flex-col max-w-sm px-6 py-6 gap-2 bg-[#171717] border border-white/10 rounded-2xl shadow-lg hover:border-red-400 hover:scale-105 duration-400 ">
                        <img src={projet.image} className="w-30 h-30 rounded-lg shadow-lg"></img>
                        <h1 className="font-medium">{projet.nom}</h1>
                        <p className="text-white/40">{projet.description}</p>
                        <div className="flex gap-2">
                            {projet.lang.map((item) => (
                                <span className="bg-red-400/10 text-red-400 py-1 px-4 text-xs rounded-full border border-red-400/20">{item}</span>
                            ))}
                        </div>
                        <hr className="border-white/10 my-4" />
                        <a href={projet.href} className="flex flex-row gap-6 items-center py-2 px-4 bg-black/20 border border-white/20 rounded-sm">
                            <FaGithub className="text-red-400"></FaGithub>
                            <span className="font-medium text-sm">Disponnible sur GitHub</span>
                        </a>
                    </div>
                ))}
            </div>
            </section>
    )
}

export default ProjetsGit;