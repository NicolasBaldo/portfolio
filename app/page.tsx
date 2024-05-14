import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projets } from "./components/Projets";
import { Spacing } from "./components/Spacing";
import { Technos } from "./components/Technos"
import './globals.css'

export default function Home() {
  return (
  <main>
    <Header /> 
<Spacing size="md" /> 
  <Hero />
  <Spacing size="md" /> 
  <Projets /> 
  <Spacing size="md" /> 
  <Technos />
   </main>
  
  ); } 

   