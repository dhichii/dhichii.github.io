import { getAllProject } from "../../data"
import ProjectList from "./ProjectList"

export default function Project() {
  const projects = getAllProject()

  return (
    <section id="projects" className="projects">
      <h1 className="heading-1">Projects</h1>
      <ProjectList data={projects}/>
    </section>
  )
}