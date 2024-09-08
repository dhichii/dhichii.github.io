import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

export default function Project({data}) {
  return (
      <ul className="project-grid">
        {
          data?.map((item) => (
              <ProjectItem key={item.id} {...item}/>
          ))
        }
      </ul>
  );
}

Project.propTypes = {
  data: PropTypes.array.isRequired,
}
