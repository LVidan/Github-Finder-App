import React from 'react';
import PropTypes from 'prop-types'

const UserItem = ({user: { id, login, avatar_url, html_url }}) => {
  return (
    <div className="card text-center">
      <img 
        src={avatar_url} 
        alt={login} 
        className="round-img" 
        style={ {width: '60px'} } 
      />
      
      <h3 id={id}>{login}</h3>
      
      <div>
        <a href={html_url} className="btn btn-dark btn=sm my-1">
          More Info
        </a>
      </div>
    </div>
  );
}

UserItem.prototypes = {
  user: PropTypes.object.isRequired
}

export default UserItem
