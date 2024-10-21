import ProjectCard from '../components/ProjectCard/ProjectCard';

const Home = () => {
  return (
    <section className='portfolio_section'>
        <ProjectCard githubUrl='https://github.com/jeaq01/Task-board-to-manage-a-project.git' projectImage= "../assets/Task board pic.png"  name='Task board' description="This is a website meant for task management it allows to the create cards add a date to it edit and delete them "></ProjectCard>
        <ProjectCard githubUrl='https://github.com/jeaq01/Employee-payroll-tracker.git' projectImage ="../assets/employee tracker.png" name='Employee tracker'description="A payroll tracker that could allow a company to track first name, last name, and salary of employees."></ProjectCard>
        <ProjectCard githubUrl='https://github.com/jeaq01/My-blog.git' projectImage ="../assets/blog pic.png" name='Blog' description="A personal that is presented with the landing page containing a form with labels and inputs for username, blog title, and blog content."></ProjectCard>
        <ProjectCard githubUrl='https://github.com/jeaq01/Marketing-agency-website.git' projectImage ="../assets/marketing agemcy pic.png"name='Marketing agency' description="The HTML and CSS was build correctly but with lack of sequential order, CSS was consolidated to keep the code dry, semantic elements and accessibility added, i was able to identify those issues and modified the source code"></ProjectCard>
        <ProjectCard githubUrl='https://github.com/jeaq01/NoSQL-Social-Network-API.git' projectImage ="../assets/Social network API.png"name='Social network API' description="An API social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list."></ProjectCard>
        <ProjectCard githubUrl='https://github.com/jeaq01/5-day-weather-forecast-dashboard.git' projectImage ="../assets/weather dashboard.png"name='Weather dashboard' description="A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS"></ProjectCard>
    </section>
  );
};

export default Home;