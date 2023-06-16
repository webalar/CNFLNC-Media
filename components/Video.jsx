
const Video = ({src, loop, autoplay, controls, classes}) => {

  return (
    <section id="video">
      <video src={src} loop={loop} autoPlay={autoplay} controls={controls} className={`${classes}`} type="video/mp4"></video>
    </section>
  )
}

export default Video;