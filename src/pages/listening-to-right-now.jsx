import * as React from "react";
import Album from '../components/album'


/**
* The About function defines the component that makes up the About page
* This component is attached to the /about path in router.jsx
*/

export default function ListeningTo() {
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */
  
  return (
    <div className="page">
      <h1 className="title">
        2025 Albums
      </h1>
      <p>
       This is the best stuff i've heard this year
      </p>
      <Album current={true}></Album>

    </div>
  );
}
