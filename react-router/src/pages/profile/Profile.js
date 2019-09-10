import React from 'react';

const data = {
  woochul: {
    name: 'Woochul Hyun',
    description: 'Hello'
  },
  gildong: {
    name: 'Gildong Hong',
    description: 'Hi'
  }
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];

  if (!profile) {
    return <div>User does not exist</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
