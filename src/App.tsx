import './App.css'
import { AboutmeSection, ProjectsSection, CertificationsSection, SkillSection, FooterSection } from './components'
import { NavbarMenu } from './components/NavbarMenu/NavbarMenu';
import { HomeSection } from './components/HomeSection/HomeSection';

function App() {
  return (
    <>
      <div id="app-root">
        <div id="content-wrapper">
          <NavbarMenu/>
          <HomeSection/>
          <ProjectsSection />
          <AboutmeSection />
          <CertificationsSection />
          <SkillSection />
          <FooterSection />
        </div>
      </div>
    </>
  )
}

export default App
