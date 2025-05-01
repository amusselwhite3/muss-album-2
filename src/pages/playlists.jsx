import * as React from "react";


/**
* The About function defines the component that makes up the About page
* This component is attached to the /about path in router.jsx
*/

export default function Playlists() {
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */
  const iframe2024 = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5Y4BctBwjqhX9ovbUMwACa?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'; 
  const iframePostPunk = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2zcbmJHY0XCoLcjFEl5icD?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
  const iframeElectronic = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/42gGoRljSH7OvR1a2J6QqP?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
  const iframeIndieTwang = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3fwlj5E3gSDjgNLMtVljwo?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
  const iframeFolkPunk = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0spS6BY0ZSDeL5cgqOwJau?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
  function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
  }
 
  return (
    <div className="page">
      <Iframe iframe={iframe2024} />    
      <Iframe iframe={iframePostPunk} />    
      <Iframe iframe={iframeElectronic} />    
      <Iframe iframe={iframeIndieTwang} />    
      <Iframe iframe={iframeFolkPunk} />    

    </div>
  );
}
