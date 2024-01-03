import '../styles/About.css';

const About = () => {
  return (
    <div className='about'>
      <div className='order-1 order-lg-2 col-lg-5'>
        <div className='thumbnail'>
          <div className='inner'>
            <img
              src='assets/images/avatar.png'
              alt='Personal Portfolio Images'
            />
          </div>
        </div>
      </div>
      <div className='inner'>
        <span className='subtitle'>Welcome to my world</span>
        <h1 className='title'>
          Hi, I’m <span>Ahmet Aydın</span>
          <span className='header-caption' id='page-top'>
            <span className='cd-headline clip is-full-width'>
              <span> a </span>

              <span className='cd-words-wrapper'>
                <b className='is-hidden'>Software Engineer</b>
              </span>
            </span>
          </span>
        </h1>

        <div>
          <p className='description'>
            I am a person who is skilled in learning quickly, open to
            development, and constantly values personal growth. I am interested
            in the field of mobile development and strive to improve my skills
            in this area. As I gain experience in development, I try to become
            knowledgeable about new technologies and methodologies and apply
            them to my projects. I also value teamwork and collaboration, and I
            always aim to improve myself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
