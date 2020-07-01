import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {

  const history = useHistory()

  return (
    <React.Fragment>
      <h1>About page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        distinctio obcaecati est optio dolores numquam pariatur et repudiandae
        ex cupiditate.
      </p>
      <button className="btn" onClick={()=>{history.push('/')}}>Back to work</button>
    </React.Fragment>
  );
};
