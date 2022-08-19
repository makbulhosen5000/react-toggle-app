import React from 'react'
import PropTypes from 'prop-types';
function User(props) {
  return (
    <div>
        <h1>{props.userName}</h1>
        <h1>{props.userId}</h1>
    </div>
  )
}
User.PropsTypes = {
   userName:PropTypes.string,
   userId:PropTypes.number,
}
User.defaultProps ={
   userName:"default name",
   userId:0,
}
export default User