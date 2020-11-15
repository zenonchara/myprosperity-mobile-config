import React from "react";

export default class PhoneColors extends React.Component {
  render() {

    const {
      headerImage,
      headerBackground,
      tileColor1,
      tileColor2,
      tileColor3,
      tileColor4,
      tileColor5,
      appBackground,
      circleColor
    } = this.props;

    return (
      <div className="phone-colors-wrapper">
        <div className="phone-colors-container">
          {headerImage ? (
            <img src={headerImage} className="header-image" />
          ): null}
          <svg width="257" height="541" viewBox="0 0 257 541" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path fillRule="evenodd" clipRule="evenodd" d="M257 509.819C257 527.281 242.784 541.434 225.246 541.434H31.7536C14.2162 541.434 0 527.281 0 509.819V31.6152C0 14.1529 14.2162 0 31.7536 0H225.246C242.784 0 257 14.1529 257 31.6152V509.819Z" fill="white" stroke="#C6CED1"/>
              <path d="M239.069 71.0096H17.79V464.586H239.069V71.0096Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M152.221 50.7383C152.221 51.9936 151.353 53.0058 150.284 53.0058H110.543C109.472 53.0058 108.606 51.9917 108.606 50.7383V45.6378C108.606 44.3824 109.474 43.3702 110.543 43.3702H150.284C151.353 43.3702 152.221 44.3844 152.221 45.6378V50.7383Z" stroke="#C6CED1"/>
              <path d="M130.476 29.494C133.752 29.494 136.407 26.8386 136.407 23.5631C136.407 20.2876 133.752 17.6323 130.476 17.6323C127.201 17.6323 124.545 20.2876 124.545 23.5631C124.545 26.8386 127.201 29.494 130.476 29.494Z" stroke="#C6CED1"/>
              <path d="M128.578 521.755C139.54 521.755 148.427 512.903 148.427 501.984C148.427 491.065 139.54 482.213 128.578 482.213C117.616 482.213 108.73 491.065 108.73 501.984C108.73 512.903 117.616 521.755 128.578 521.755Z" stroke="#C6CED1"/>
              <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="18" y="70" width="222" height="395">
                <rect x="18.0557" y="70.5773" width="221.58" height="393.919" fill="#C4C4C4"/>
              </mask>
              <g mask="url(#mask0)">
                <rect x="18.5557" y="71.0773" width="220" height="392.919" fill={appBackground} stroke="#DDE6E9"/>
                <rect x="25.8848" y="142.367" width="103.54" height="96.1439" rx="8" fill={tileColor1}/>
                <rect x="136.82" y="142.367" width="90.5971" height="96.1439" rx="8" fill={tileColor2}/>
                <rect x="25.8848" y="379.28" width="55.4676" height="55.4676" rx="27.7338" fill={circleColor}/>
                <rect x="99.8423" y="381.128" width="55.4676" height="55.4676" rx="27.7338" fill={circleColor}/>
                <rect x="173.799" y="381.128" width="55.4676" height="55.4676" rx="27.7338" fill={circleColor}/>
                <rect x="27.6836" y="445.834" width="55.4676" height="55.4676" rx="27.7338" fill={circleColor}/>
                <rect x="101.641" y="447.683" width="55.4676" height="55.4676" rx="27.7338" fill={circleColor}/>
                <rect x="175.598" y="447.683" width="55.4676" height="55.4676" rx="27.7338" fill={circleColor}/>
                <rect x="136.82" y="245.906" width="90.5971" height="57.3165" rx="8" fill={tileColor3}/>
                <rect x="136.82" y="310.619" width="90.5971" height="57.3165" rx="8" fill={tileColor5}/>
                <rect x="25.8848" y="247.755" width="103.54" height="118.331" rx="8" fill={tileColor4}/>
                <rect x="19" y="72" width="219" height="57.86" fill={headerBackground}/>
              </g>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="257" height="541" fill="white"/>
            </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    );

  }
}