import './App.css'
import { HeroSection} from "./components/HeroSection.tsx";
import { Header } from "./components/Header.tsx";
import { Helper } from "./components/Helper.tsx";
import { InfoCards } from "./components/InfoCards.tsx";
import { RegionsSection } from "./components/RegionsSection.tsx";
import { FormatsSection } from "./components/FormatsSection.tsx";
import { TestimonialsSection } from "./components/TestimonialsSection.tsx";
import { PartnersSection } from "./components/PartnersSection.tsx";
import { FaqSection } from "./components/FaqSection.tsx";
import { Footer } from "./components/Footer.tsx";

function App() {
    return (
        <>
            <Header />
            <Helper />
            <HeroSection />
            <InfoCards />
            <RegionsSection />
            <FormatsSection />
            <TestimonialsSection />
            <PartnersSection />
            <FaqSection />
            <Footer />
        </>
    )
}

export default App
