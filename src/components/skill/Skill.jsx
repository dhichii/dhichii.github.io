import PropTypes from 'prop-types';
import SkillItem from './SkillItem';

export default function Skill({data}) {
  return (
    <>
      <ul className="skill-grid">
      {
          data?.map((item) => (
              <SkillItem key={item.id} {...item}/>
          ))
        }
      </ul>
    </>
  )
}

Skill.propTypes = {
  data: PropTypes.array.isRequired,
}
