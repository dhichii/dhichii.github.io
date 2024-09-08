import PropTypes from 'prop-types';

export default function SkillItem({title, src}) {
  return (
    <li className='skill-item'>
      <img src={src} alt={src} className='skill-logo'/>
      <p className="skill-title">{title}</p>
    </li>
  )
}

SkillItem.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}
