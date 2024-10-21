import './Contact.css';

const Contact = () => {

  return (
    <section>
     <form className="dark-form" >
      <h2>Contact Me</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </section>
  );
}
export default Contact;
