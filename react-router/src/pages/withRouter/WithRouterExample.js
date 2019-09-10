import React from 'react';
import { withRouter } from 'react-router-dom';

const WithRouterExample = ({ location, match, history }) => {
  return (
    <div>
      <h4>Location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      ></textarea>
      <h4>Match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={7}
        readOnly={true}
      ></textarea>
    </div>
  );
};

export default withRouter(WithRouterExample);
