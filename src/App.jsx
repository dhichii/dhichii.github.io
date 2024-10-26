import './styles/style.css';
import { getAllSkill } from './data';
import Header from './components/header/Header';
import Project from './components/project/Project';
import Social from './components/Social';
import Footer from './components/Footer';
import Skill from './components/skill/Skill';

function App() {
  const skills = getAllSkill()

  return (
    <>
      <Header/>

      <main>
        <Social part="main-social"/>

        <section id="home" className="home">
          <div className="home-content">
            <h4 className="greet">Hi,</h4>
            <h2 className="name">I am Adhicitta Masran</h2>
            <h3 className="role">Back-End Developer</h3>
            <a className="btn" href="mailto:adhicittamasran@gmail.com">Contact Me</a>
          </div>
        </section>

        <Project/>

        <section id="skills" className="skills">
          <h1 className="heading-1">Skills</h1>
          <Skill data={skills}/>
        </section>
      </main>

      <Footer/>
    </>
  )
}

export default App
