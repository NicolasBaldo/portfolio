/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import {Section} from "./Section";
import { ComponentPropsWithoutRef } from "react"; 

const Code = ({className, ...props}: ComponentPropsWithoutRef<"span">) => { 
    return <span className={cn("bg-accent/30 font-mono border border-accent px-1 py-0.5 rounded-sm", className)} {...props} /> 
}

export const Hero = () => { 
    return ( 
        <Section className=" flex max-md:flex-col items-start"> 
        <div className=" flex-[3] w-full flex flex-col gap-2"> 
            <h2 className=" font-caption text-5xl text-primary">Nicolas Baldo</h2>
            <h3 className=" text-3xl font-caption">
                Développeur Fullstack
            </h3>
            <p className=" text-base"> 
            Dévelopeur web Frontend et Backend curieux et passionné. 
            Le choix du métier de dévelopeur est à l’issue d’une reconversion alors que j’étais Boucher depuis 10 ans. 
            J’ai choisi le métier de dévelopeur car j’ai toujours eu l’esprit créatif et j’aime beaucoup le monde du code par son coté logique et exponentiel !
            </p>
        </div>
        <div className="flex-[2] max-md:m-auto ml-auto"> 
    <img
        src="/Moi.jpeg" 
        className="w-full h-auto max-w-xs max-md:w-56 rounded-2xl"
        alt="Nicolas"
    />
</div>

        </Section>
    );
};