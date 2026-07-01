import { progress } from "framer-motion";

import { SiFlutter, SiFirebase, SiGit, SiReact, SiTailwindcss, SiJavascript, SiProxmox } from "react-icons/si"

const competencesOK = [
    { nom: "Flutter", progress: "2 Applis", icon: SiFlutter, color: "text-cyan-400"},
    { nom: "Firebase", progress: "Expérimenté", icon: SiFirebase, color: "text-red-900"},
    { nom: "Git", progress: "Maîtrisé", icon: SiGit, color: "text-orange-800"},
    { nom: "Proxmox", progress: "Pratiqué", icon: SiProxmox, color: "text-orange-400"},
]

const competencesInProg = [
    { nom: "React", progress: "En cours", icon: SiReact, color: "text-cyan-400"},
    { nom: "Tailwind", progress: "En cours", icon: SiTailwindcss, color: "text-sky-500"},
    { nom: "JavaScript", progress: "En cours", icon: SiJavascript, color: "text-yellow-400"},
]

function Competences() {
    return (
        <>
            <section id="competences" className="relative z-20 bg-[#171717] text-white py-20 px-8">
                <h2 className="text-white text-xl font-medium text-center mb-6">
                    Compétences
                </h2>

                <div className="max-w-3xl mx-auto">
                    <h1 className="m-5 font-medium text-white/40">Maîtrisé - En production</h1>
                    <div className="flex flex-wrap sm:flex-row gap-6 justify-center">
                        {competencesOK.map((competence) => {
                            const Icon = competence.icon;
                            return (
                                <div key={competence.nom} className="flex flex-col flex-1 min-w-gl items-center gap-4 h-40 w-40 border border-white/10 rounded-2xl mg-6 py-6 px-6 hover:border-red-400 hover:scale-110 duration-400">
                                    <Icon className={`${competence.color} mx-auto w-8 h-8`}></Icon>
                                    <span>{competence.nom}</span>
                                    <span className="bg-red-400/10 border border-red-400/20 rounded-full px-2 py-1.2 text-sm text-red-400">{competence.progress}</span>
                                </div>
                            )
                        })}
                    </div>

                    <hr className="border-white/10 my-10" />
                    
                    <h1 className="m-5 font-medium text-white/40">En apprentissage</h1>
                    <div className="flex flex-wrap sm:flex-row gap-6 justify-center">
                        {competencesInProg.map((competence) => {
                            const Icon = competence.icon;
                            return (
                                <div key={competence.nom} className="flex flex-col flex-1 items-center gap-4 h-40 w-40 border bg-black/10 border-white/10 border-dashed rounded-2xl max-h-sm mg-6 py-6 px-6 hover:border-red-400 hover:scale-110 duration-400">
                                    <Icon className={`${competence.color} mx-auto w-8 h-8`}></Icon>
                                    <span>{competence.nom}</span>
                                    <span className="bg-red-400/10 border border-red-400/20 rounded-full px-2 py-1.2 text-sm text-red-400">{competence.progress}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Competences;