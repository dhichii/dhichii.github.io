import PropTypes from 'prop-types';
import sourceCodeLogo from '../../assets/images/source-code.svg';
import externalLinkLogo from '../../assets/images/external-link.svg';

export default function ProjectItem({title, description, tech, tags, code, src}) {
  let dataCategory = ''
  const tagsLength = tags.length
  tags.forEach((v, i) => {
    if (i != tagsLength-1) {
      dataCategory += v + ' '
    } else {
      dataCategory += v
    }
  })

  return (
    <li className='card project-item' data-category={dataCategory}>
      <h2>{title}</h2>
      <p className="project-item-desc">{description}</p>
      <ul className="project-tech">
        {
          tech?.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
      <div className="project-btn-container">
        {
          code ? (
            <a href={code} target="_blank" rel="noopener noreferrer" className="project-btn">
              <img src={sourceCodeLogo} alt="source-code" /*title='Source Code'*/ />
              <p>Source Code</p>
            </a>
          ) : null
        }
        {
          src ? (
            <a href={src} target="_blank" rel="noopener noreferrer" className="project-btn">
              <img src={externalLinkLogo} alt="external-link" /* title='External Link' */ />
              <p>External Link</p>
            </a>
          ) : null
        }
      </div>
    </li>
  )
}

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  code: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}
