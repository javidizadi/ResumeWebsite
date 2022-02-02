const Contact = ({ phone, email, sendMailLink }) => {
  return (
    <div>
      <h2 className="h3 text mb-3">Contact</h2>
      <div className="row">
        <div className="col-md-7 d-print-none">
          <div className="my-2">
            <form action={sendMailLink} method="POST">
              <div className="row">
                <div className="col-6">
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-6">
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="_replyto"
                    placeholder="Your E-mail"
                    required=""
                  />
                </div>
              </div>
              <div className="form-group my-2">
                <textarea
                  className="form-control"
                  style={{ resize: "none" }}
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required=""
                ></textarea>
              </div>
              <button className="btn btn-primary mt-2" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="col">
          <div className="mt-2">
            <h3 className="h6">Phone</h3>
            <div className="pb-2 text-secondary">
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
            <h3 className="h6">Email</h3>
            <div className="pb-2 text-secondary">
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
