import { Card } from "@/components/ui/card";

export const Projets = () => { 
    return (
        <section className="flex flex-col items-center px-4 py-8"> 
            <Card className="w-full max-w-2xl p-4 mb-8"> 
                <div className="text-center">
                    <h2 className="text-xl font-bold mb-2">Mes projets</h2>
                    <p className="mb-4">Divers Projets réalisés pour THP.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <ProjetItem
                        titre="Menu?"
                        lien="https://github.com/Jokeraware/MENU.git"
                        image="/Menu.png"
                    />
                    <ProjetItem
                        titre="Chapatte"
                        lien="https://github.com/NicolasBaldo/Chapattte.git"
                        image="/Chapatte.png"
                    />
                   
                </div>
            </Card>

            <div className="w-full max-w-xl flex flex-col gap-4">
                <Card className="p-4"> 
                    <h2 className="text-xl font-bold mb-2">Téléchargez mon CV</h2>
                    <p className="mb-4">Insérez ici un lien vers votre CV à télécharger.</p>
                </Card>
                <Card className="p-4"> 
                    <h2 className="text-xl font-bold mb-2">Contactez-moi</h2>
                    <p className="mb-4">Insérez ici vos informations de contact ou un formulaire de contact.</p>
                </Card>
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
