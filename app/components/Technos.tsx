import { Card } from "@/components/ui/card";
import React from 'react';

const TechIcon = ({ src, alt }) => {
    return <img src={src} alt={alt} style={{ width: '50px', height: 'auto',marginRight: '10px'  }} />;
};

export default TechIcon;


export const Technos = () => {
    return (
            <section className="flex flex-col items-center px-4 py-8 border-none">
         
                    <Card className="w-full max-w-2xl p-4 mb-8 border-none" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                        <div className="text-center">
                            <h2 className="text-xl text-lg font-bold text-primary mb-2">Technologies utilisées</h2>
                        </div>
                        <div className="flex justify-center items-center">
                            <TechIcon src="/react-logo.svg" alt="Logo 1" />
                            <TechIcon src="/html.svg" alt="Logo 2" />
                            <TechIcon src="/css.svg" alt="Logo 3" />
                            <TechIcon src="/ruby.svg" alt="Logo 1" />
                            <TechIcon src="/next-js.svg" alt="Logo 2" />
                            <TechIcon src="/javascript.svg" alt="Logo 3" />
                            <TechIcon src="/postgresql.svg" alt="Logo 1" />
                            <TechIcon src="/git-icon.svg" alt="Logo 2" />
                            <TechIcon src="/github.svg" alt="Logo 3" />
                            <TechIcon src="/figma.png" alt="Logo 3" />
                            <TechIcon src="/nodejs.svg" alt="Logo 3" />
                        </div>
                    </Card>
            
            </section>
    
)
};
