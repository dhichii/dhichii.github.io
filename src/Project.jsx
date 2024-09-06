import ProjectItem from './components/project/ProjectItem';
import PropTypes from 'prop-types';

export default function Project({data}) {
  return (
      <ul className="project-grid">
        {
          data?.map((item) => (
            <li key={item.id}>
              <ProjectItem {...item}/>
            </li>
          ))
        }
      </ul>
  );
}

Project.propTypes = {
  data: PropTypes.array.isRequired,
}
