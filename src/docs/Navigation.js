import React, {PropTypes} from 'react';

const Navigation = ({components, setPage}) => {
  return (
    <ul className="navigation">
      {
        components.map( (name, index) => {
          return (
            <li key={name}>
              <a href={`#${name}`}>{name}</a>
            </li>
          )
        })
      }
    </ul>
  )
}

React.propTypes = {
  components: PropTypes.array.isRequired,
  setPage: PropTypes.func.isRequired
};

export default Navigation;
