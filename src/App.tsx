import './App.css'
import { HeroSection} from "./components/HeroSection.tsx";
import { Header } from "./components/Header.tsx";
import { Helper } from "./components/Helper.tsx";
import { InfoCards } from "./components/InfoCards.tsx";

function App() {
    return (
        <>
            <Header />
            <Helper />
            <HeroSection />
            <InfoCards />
        </>
    )
}

export default App
