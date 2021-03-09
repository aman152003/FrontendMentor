import React,{useState} from 'react'
import './App.scss'

import image1 from './images/desktop/image-deep-earth.jpg'
import image2 from './images/desktop/image-curiosity.jpg'
import image3 from './images/desktop/image-fisheye.jpg'
import image4 from './images/desktop/image-from-above.jpg'
import image5 from './images/desktop/image-grid.jpg'
import image6 from './images/desktop/image-night-arcade.jpg'
import image7 from './images/desktop/image-pocket-borealis.jpg'
import image8 from './images/desktop/image-soccer-team.jpg'

import bgImage1 from './images/mobile/image-deep-earth.jpg'
import bgImage2 from './images/mobile/image-curiosity.jpg'
import bgImage3 from './images/mobile/image-fisheye.jpg'
import bgImage4 from './images/mobile/image-from-above.jpg'
import bgImage5 from './images/mobile/image-grid.jpg'
import bgImage6 from './images/mobile/image-night-arcade.jpg'
import bgImage7 from './images/mobile/image-pocket-borealis.jpg'
import bgImage8 from './images/mobile/image-soccer-team.jpg'

import Hero from './components/Hero'
import Feature from './components/Feature'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  const [isNavToggled,setIsNavToggled] = useState(false);
  return (
    <div className="app">
      <div style={isNavToggled ? {display: 'flex'} : {display: 'none'}} className="toggled-nav">
        <div className="toggled-nav-logo">
          <svg width="192" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M2.694 26.324a2.694 2.694 0 002.695-2.697V2.697a2.694 2.694 0 10-5.389 0v20.93a2.694 2.694 0 002.694 2.697zm15.506.213c5.92 0 10.317-4.435 10.317-9.898v-.071c0-5.464-4.36-9.827-10.246-9.827-5.92 0-10.317 4.434-10.317 9.898v.07c0 5.464 4.361 9.828 10.246 9.828zm.071-4.648c-2.978 0-4.999-2.448-4.999-5.25v-.071c0-2.803 1.844-5.18 4.928-5.18 2.978 0 5 2.448 5 5.25v.072c0 2.802-1.844 5.18-4.929 5.18zm21.887 4.648c5.921 0 10.317-4.435 10.317-9.898v-.071c0-5.464-4.36-9.827-10.246-9.827-5.92 0-10.317 4.434-10.317 9.898v.07c0 5.464 4.361 9.828 10.246 9.828zm.071-4.648c-2.978 0-4.999-2.448-4.999-5.25v-.071c0-2.803 1.844-5.18 4.928-5.18 2.979 0 5 2.448 5 5.25v.072c0 2.802-1.844 5.18-4.929 5.18zM55.487 32a2.694 2.694 0 002.694-2.696v-5.677c1.277 1.526 3.05 2.839 5.921 2.839 4.503 0 8.65-3.477 8.65-9.827v-.071c0-6.35-4.218-9.827-8.65-9.827-2.8 0-4.609 1.312-5.92 3.086V9.58a2.694 2.694 0 10-5.39 0v19.725A2.694 2.694 0 0055.488 32zm7.232-10.11c-2.517 0-4.608-2.094-4.608-5.251v-.071c0-3.158 2.091-5.25 4.608-5.25 2.518 0 4.645 2.092 4.645 5.25v.07c0 3.193-2.127 5.251-4.645 5.251zm19.087 4.576c4.113 0 7.268-1.916 7.268-6.138v-.07c0-3.478-3.084-4.755-5.743-5.642-2.057-.71-3.865-1.206-3.865-2.27v-.071c0-.745.674-1.313 1.985-1.313 1.135 0 2.589.462 4.113 1.207.355.177.603.248.993.248 1.205 0 2.162-.923 2.162-2.129 0-.922-.496-1.632-1.276-2.022-1.843-.922-3.9-1.454-5.885-1.454-3.83 0-6.949 2.164-6.949 6.03v.072c0 3.69 3.014 4.93 5.673 5.711 2.091.639 3.935 1.03 3.935 2.2v.07c0 .852-.71 1.42-2.27 1.42-1.524 0-3.332-.568-5.14-1.703a2.066 2.066 0 00-1.064-.284c-1.205 0-2.127.923-2.127 2.129 0 .851.461 1.49 1.028 1.845 2.305 1.49 4.822 2.164 7.162 2.164zm15.612-.036c1.17 0 2.092-.142 3.085-.532a2.194 2.194 0 001.382-2.022 2.248 2.248 0 00-2.233-2.235c-.107 0-.461.035-.638.035-1.206 0-1.738-.603-1.738-1.845v-8.124h2.376a2.3 2.3 0 002.304-2.306 2.3 2.3 0 00-2.304-2.306h-2.376V4.718a2.694 2.694 0 10-5.389 0v2.377h-.177a2.3 2.3 0 00-2.304 2.306 2.3 2.3 0 002.304 2.306h.177v9.011c0 4.4 2.234 5.712 5.531 5.712zm13.024.036c2.73 0 4.325-1.455 5.566-3.051v.212a2.694 2.694 0 105.39 0V9.58a2.694 2.694 0 10-5.39 0v8.124c0 2.554-1.311 3.867-3.368 3.867-2.056 0-3.261-1.313-3.261-3.867V9.579a2.694 2.694 0 10-5.39 0v9.827c0 4.363 2.376 7.06 6.453 7.06zm21.994 0c2.8 0 4.609-1.313 5.92-3.087v.248a2.694 2.694 0 105.39 0V2.697a2.694 2.694 0 10-5.39 0v6.882c-1.276-1.526-3.048-2.838-5.92-2.838-4.503 0-8.65 3.476-8.65 9.827v.07c0 6.35 4.218 9.828 8.65 9.828zm1.383-4.577c-2.518 0-4.645-2.093-4.645-5.25v-.071c0-3.193 2.127-5.25 4.645-5.25 2.517 0 4.608 2.092 4.608 5.25v.07c0 3.158-2.091 5.251-4.608 5.251zm16.108-16.71c1.702 0 3.014-.993 3.014-2.554v-.07c0-1.562-1.312-2.52-3.014-2.52-1.702 0-3.013.958-3.013 2.52v.07c0 1.561 1.311 2.555 3.013 2.555zm0 21.145a2.694 2.694 0 002.694-2.697V9.58a2.694 2.694 0 10-5.388 0v14.048a2.694 2.694 0 002.694 2.697zm15.506.213c5.92 0 10.317-4.435 10.317-9.898v-.071c0-5.464-4.361-9.827-10.246-9.827-5.921 0-10.317 4.434-10.317 9.898v.07c0 5.464 4.36 9.828 10.246 9.828zm.07-4.648c-2.977 0-4.998-2.448-4.998-5.25v-.071c0-2.803 1.843-5.18 4.928-5.18 2.978 0 4.999 2.448 4.999 5.25v.072c0 2.802-1.844 5.18-4.928 5.18zm19.23 4.577c4.112 0 7.267-1.916 7.267-6.138v-.07c0-3.478-3.084-4.755-5.743-5.642-2.057-.71-3.865-1.206-3.865-2.27v-.071c0-.745.674-1.313 1.986-1.313 1.134 0 2.588.462 4.112 1.207.355.177.603.248.993.248 1.205 0 2.162-.923 2.162-2.129 0-.922-.496-1.632-1.276-2.022-1.843-.922-3.9-1.454-5.885-1.454-3.83 0-6.949 2.164-6.949 6.03v.072c0 3.69 3.014 4.93 5.673 5.711 2.091.639 3.935 1.03 3.935 2.2v.07c0 .852-.71 1.42-2.27 1.42-1.524 0-3.332-.568-5.14-1.703a2.066 2.066 0 00-1.063-.284c-1.206 0-2.128.923-2.128 2.129 0 .851.461 1.49 1.028 1.845 2.305 1.49 4.822 2.164 7.162 2.164z" fill="#FFF" fill-rule="nonzero"/></svg>
          <svg className="close" onClick={()=>{
            setIsNavToggled(false);
          }} width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z" fill="#FFF" fill-rule="evenodd"/></svg>
        </div>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Support</a></li>
        </ul>       
      </div>
      <Hero isNavToggled={isNavToggled} setIsNavToggled={setIsNavToggled} />
      <Feature />
      <h2>OUR CREATIONS</h2>
      <div className="cards">
        <Card bgImage={bgImage1} image={image1} first="DEEP" last="EARTH"/>
        <Card bgImage={bgImage2} image={image2} first="THE" last="CURIOSITY"/>
        <Card bgImage={bgImage3} image={image3} first="MAKE IT" last="FISHEYE"/>
        <Card bgImage={bgImage4} image={image4} first="FROM UP" last="ABOVE VR"/>
        <Card bgImage={bgImage5} image={image5} first="THE" last="GRID"/>
        <Card bgImage={bgImage6} image={image6} first="NIGHT" last="ARCADE"/>
        <Card bgImage={bgImage7} image={image7} first="POCKET" last="BOREALIS"/>
        <Card bgImage={bgImage8} image={image8} first="SOCCER" last="TEAM VR"/>
      </div>
      <Footer />
    </div>
  )
}

export default App
