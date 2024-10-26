import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

export default function ProjectList({data}) {
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

ProjectList.propTypes = {
  data: PropTypes.array.isRequired,
}
