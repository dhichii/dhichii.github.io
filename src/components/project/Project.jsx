import { useState } from "react";
import { getAllProject } from "../../data"
import ProjectList from "./ProjectList"

export default function Project() {
  const tags = ['all', 'backend', 'frontend', 'android']
  const [selectedTag, setSelectedTag] = useState('all')

  const projects = getAllProject()

  return (
    <section id="projects" className="projects">
      <h1 className="heading-1">Projects</h1>
      <div className="project-filter">
        {tags.map( v => (
          <label className="tag-btn" key={v}>
            <input type="radio" name="project-filter" value={v} checked={selectedTag === v} onChange={(e) => setSelectedTag(e.target.value)}/>
            {v}
          </label>
        ))}
      </div>

      <ProjectList data={
        selectedTag === 'all' ? projects : projects.filter(v => v.tags.includes(selectedTag))
      }/>
    </section>
  )
}