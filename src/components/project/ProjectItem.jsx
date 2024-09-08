import PropTypes from 'prop-types';
import sourceCodeLogo from '../../assets/images/source-code.svg';

export default function ProjectItem({title, description, tech, code}) {
  return (
    <li className='card project-item'>
      <h2>{title}</h2>
      <p className="project-item-desc">{description}</p>
      <ul className="project-tech">
        {
          tech?.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
      <a href={code} target="_blank" rel="noopener noreferrer" className="project-btn">
        <img src={sourceCodeLogo} alt="source-code" />
        <p>Source Code</p>
      </a>
    </li>
  )
}

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  code: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}
