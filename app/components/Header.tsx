import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/Githubicon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

export const Header = () => { 
return ( 
    <header className=" top-0 py-4"> 
       <Section className="flex items-baseline"> 
        <h1 className="text-lg font-bold text-primary">NicolasBaldo.com</h1>
        <div className="flex-1" />
        <ul className=" flex items-center gap-2">
        <Link href="https://github.com/NicolasBaldo" className={cn(buttonVariants({variant:"outline"}),"size-6 p-0" )}>
          <GithubIcon size={25} className="text-foreground" />
          </Link>
          <Link href="https://www.linkedin.com/in/nicolas-baldo-0751b32a9/" className={cn(buttonVariants({variant:"outline"}),"size-6 p-0" )}>
          <LinkedInLogoIcon fontSize={25} className="text-foreground" />
          </Link>
          
          </ul>
       </Section>
    </header>
)
};