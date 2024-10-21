import './Resume.css';

const Resume = () => {
  return (
    <section className='resume_section'>
      <a href= "../assets/JulioEAlvaradoCurriculumvitae.pdf" download={"JulioEAlvaradoCurriculumvitae.pdf"} className='download_resume_button'>Download Resume</a>
      <center>
        <div className='skill_list'>
          <div>Im Fluent With:</div>
          <p>HTML, CSS, Javascript</p>
          <p>NodeJs, ExpressJs</p>
          <p>SQL, NoSql</p>
          <p>React</p>
        </div>
      </center>
    </section>
  );
};

export default Resume;
