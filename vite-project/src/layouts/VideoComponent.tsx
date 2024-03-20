import React from 'react'

const VideoComponent: React.FC = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <iframe
          width='853'
          height='480'
          src='https://www.youtube.com/embed/xqyUdNxWazA'
          title='Introducing iPhone 15 Pro | Apple'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        ></iframe>
      </div>
    </div>
  )
}

export default VideoComponent
