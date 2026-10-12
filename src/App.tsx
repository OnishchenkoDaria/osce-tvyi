import './App.css'
import { HeroSection} from "./components/HeroSection.tsx";
import { Header } from "./components/Header.tsx";
import { InfoCards } from "./components/InfoCards.tsx";
import { RegionsSection } from "./components/RegionsSection.tsx";
import { FormatsSection } from "./components/FormatsSection.tsx";
import { TestimonialsSection } from "./components/TestimonialsSection.tsx";
import { PartnersSection } from "./components/PartnersSection.tsx";
import { FaqSection } from "./components/FaqSection.tsx";
import { Footer } from "./components/Footer.tsx";
import { NotFoundPage } from "./components/NotFoundPage.tsx";

// The landing page lives only at the site root (BASE_URL). Any other path is a 404.
function isLandingPath(pathname: string) {
    const base = import.meta.env.BASE_URL
    return pathname === base || pathname === `${base}index.html` || pathname === base.replace(/\/$/, '')
}

function App() {
    if (!isLandingPath(window.location.pathname)) {
        return <NotFoundPage />
    }

    return (
        <>
            <Header />
            {/*<Helper />*/}
            <HeroSection />
            <InfoCards id="about" />
            <RegionsSection id="spaces" />
            <FormatsSection id="formats" />
            <TestimonialsSection id="testimonials" />
            <PartnersSection id="partners" />
            <FaqSection id="faq" />
            <Footer />
        </>
    )
}

export default App
