import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";
import albumData from '../albums.json';
import { Rating } from 'react-simple-star-rating'

// Our language strings for the header
const strings = [
  "Hello React",
  "Salut React",
  "Hola React",
  "안녕 React",
  "Hej React"
];

// Utility function to choose a random value from the language array
function randomLanguage() {
  return strings[Math.floor(Math.random() * strings.length)];
}

/**
* The Home function defines the content that makes up the main content of the Home page
*
* This component is attached to the /about path in router.jsx
* The function in app.jsx defines the page wrapper that this appears in along with the footer
*/

export default function Home() {
  /* We use state to set the hello string from the array https://reactjs.org/docs/hooks-state.html
     - We'll call setHello when the user clicks to change the string
  */


  const [currentAlbum, setCurrentAlbum] = React.useState({title: "click me!", art: "https://community.mp3tag.de/uploads/default/original/2X/a/acf3edeb055e7b77114f9e393d1edeeda37e50c9.png"})
  const [hello, setHello] = React.useState(strings[0]);
  
  
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

  // When the user clicks we change the header language
  const handleChangeHello = () => {    
    loadAlbums()
  };

  const launchSpotify = () => {
    window.open(currentAlbum.link);
  }
  return (
    <>
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
      <div className="navigation">
      <p className="title" >Artist: {currentAlbum.artist}</p>
      <p className="title" >Genre: {currentAlbum.genre}</p>
      <Rating
        initialValue={currentAlbum.rating}
        allowFraction = {true}
        readonly = {true}
      />
      <p className="title" >Year: {currentAlbum.year}</p>
      <p className="btn--click-me" onClick={launchSpotify}>Listen: {currentAlbum.link}</p>


        {/* When the user hovers over this text, we apply the wiggle function to the image style */}
        <animated.div onMouseEnter={trigger}>
          <a className="btn--click-me" onClick={handleChangeHello}>
            Load New Album
          </a>
        </animated.div>
      </div>
    </>
  );
}
