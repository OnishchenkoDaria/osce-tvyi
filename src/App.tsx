import './App.css'
import { HeroSection} from "./components/HeroSection.tsx";
import { Header } from "./components/Header.tsx";
import { Helper } from "./components/Helper.tsx";
import { InfoCards } from "./components/InfoCards.tsx";
import { RegionsSection } from "./components/RegionsSection.tsx";
import { FormatsSection } from "./components/FormatsSection.tsx";

function App() {
    return (
        <>
            <Header />
            <Helper />
            <HeroSection />
            <InfoCards />
            <RegionsSection />
            < FormatsSection />
        </>
    )
}

export default App
