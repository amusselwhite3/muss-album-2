import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";
import albumData from '../albums.json';
import { Rating } from 'react-simple-star-rating'


/**
* The Home function defines the content that makes up the main content of the Home page
*
* This component is attached to the /about path in router.jsx
* The function in app.jsx defines the page wrapper that this appears in along with the footer
*/

const Album = props => {
  /* We use state to set the hello string from the array https://reactjs.org/docs/hooks-state.html
     - We'll call setHello when the user clicks to change the string
  */


  const [currentAlbum, setCurrentAlbum] = React.useState({title: "click me!", art: "https://community.mp3tag.de/uploads/default/original/2X/a/acf3edeb055e7b77114f9e393d1edeeda37e50c9.png"})
  
  
  /* The wiggle function defined in /hooks/wiggle.jsx returns the style effect and trigger function
     - We can attach this to events on elements in the page and apply the resulting style
  */
  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });


  const loadAlbums = () => {
    console.log(albumData)
    const loadedData = JSON.stringify(albumData);
    const json = JSON.parse(loadedData);

    const randomNumber = Math.floor(Math.random() * json.length);
    setCurrentAlbum(json[randomNumber])
  }

  const loadGenreAlbum = (genre) => {
    console.log(genre)

    const loadedData = JSON.stringify(albumData);
    const json = JSON.parse(loadedData);
    const filteredJSON = json.filter(function(item){
        return item.genre.includes(genre);         
    });

    const randomNumber = Math.floor(Math.random() * filteredJSON.length);
    setCurrentAlbum(filteredJSON[randomNumber])
  }

  // When the user clicks we change the header language
  const handleChangeHello = () => {    

    if (props.genre) {
        loadGenreAlbum(props.genre)
    } else {
        loadAlbums()
    }
  };

  const launchSpotify = () => {
    window.open(currentAlbum.link);
  }
  return (
    <>
      {props.genre && <h1 className="title">{props.genre}</h1>}
      <h1 className="title">{currentAlbum.title}</h1>
      {/* When the user hovers over the image we apply the wiggle style to it */}
      <animated.div onMouseEnter={trigger} style={style}>
        <img
          src={currentAlbum.art}
          className="illustration"
          onClick={handleChangeHello}
          alt="Illustration click to change language"
        />
      </animated.div>
      <div className="page">
      <p className="page" >{currentAlbum.artist}</p>
      <p className="page" >{currentAlbum.genre}</p>
      <Rating
        initialValue={currentAlbum.rating}
        allowFraction = {true}
        readonly = {true}
      />
      <p className="page" >{currentAlbum.year}</p>
      <p className="btn--click-me" onClick={launchSpotify}>{currentAlbum.link}</p>


        {/* When the user hovers over this text, we apply the wiggle function to the image style */}
        <animated.div onMouseEnter={trigger}>
          <p className="btn--click-me" onClick={handleChangeHello}>
            Load New Album
          </p>
        </animated.div>
      </div>
    </>
  );
}

export default Album