const Video = () => {
  return (
    <> 
        <section className="video-banner mb-5">
          <video autoPlay muted loop playsInline className="w-100" style={{ maxHeight: '420px', objectFit: 'cover' }}>
            <source src="/videomichi2.mp4" type="video/mp4" />
          </video>
        </section>
    </>
  );
}

export default Video