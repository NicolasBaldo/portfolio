import { Card } from "@/components/ui/card";

export const Projets = () => {
    return (
        <section className="flex flex-col items-center px-4 py-8">
            <HoverEffect>
                <Card className="w-full max-w-2xl p-4 mb-8">
                    <div className="text-center">
                        <h2 className="text-xl font-bold mb-2">Mes projets</h2>
                        <p className="mb-4">Projets réalisés en groupe pour THP</p>
                    </div>
                    <div className="flex flex-col gap-4">
                    <center><h1>Menu?</h1></center> 
                        <ProjetItem
                            titre=""
                            lien="https://github.com/Jokeraware/MENU.git"
                            image="/Menu.png"
                        />
                         <center><h1>Chapatte</h1></center> 
                        <ProjetItem
                            titre=""
                            lien="https://github.com/NicolasBaldo/Chapattte.git"
                            image="/Chapatte.png"
                        />
                    </div>
                </Card>
            </HoverEffect>

            <div className="w-full max-w-xl flex flex-col gap-4">
                <HoverEffect>
                    <Card className="p-4">
                        <h2 className="text-xl font-bold mb-2">Téléchargez mon CV</h2>
                        <p className="mb-4">
                            <a href="/CV.pdf" className="text-blue-500 hover:underline">Téléchargez mon CV</a>
                        </p>
                    </Card>
                </HoverEffect>
                <HoverEffect>
                    <Card className="p-4">
                        <h2 className="text-xl font-bold mb-2">Contactez-moi</h2>
                        <p className="mb-4">
                            Pour me contacter, envoyez un email à <a href="mailto:votre@email.com" className="text-blue-500 hover:underline">votre@email.com</a>.
                        </p>
                    </Card>
                </HoverEffect>
            </div>
        </section>
    );
}

// Composant pour afficher chaque projet individuel
const ProjetItem = ({ titre, lien, image }) => {
    return (
        <a href={lien} className="block">
            <div className="flex flex-col items-center">
                <img src={image} className="w-full h-auto mb-2" alt={titre} />
                <h3 className="text-lg font-semibold">{titre}</h3>
            </div>
        </a>
    );
}

// Composant pour ajouter l'effet de survol sur les cartes
const HoverEffect = ({ children }) => {
    return (
        <div className="hover:border-1 transform-scale-105 transform-scale-095 rotate-z-1.7">
            {children}
        </div>
    );
}
