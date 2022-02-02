const Contact = ({ phone, email, sendMailLink }) => {
  return (
    <div>
      <h2 class="h3 text mb-3">Contact</h2>
      <div class="row">
        <div class="col-md-7 d-print-none">
          <div class="my-2">
            <form action={sendMailLink} method="POST">
              <div class="row">
                <div class="col-6">
                  <input
                    class="form-control"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div class="col-6">
                  <input
                    class="form-control"
                    type="email"
                    id="email"
                    name="_replyto"
                    placeholder="Your E-mail"
                    required=""
                  />
                </div>
              </div>
              <div class="form-group my-2">
                <textarea
                  class="form-control"
                  style={{ resize: "none" }}
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required=""
                ></textarea>
              </div>
              <button class="btn btn-primary mt-2" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
        <div class="col">
          <div class="mt-2">
            <h3 class="h6">Phone</h3>
            <div class="pb-2 text-secondary">
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
            <h3 class="h6">Email</h3>
            <div class="pb-2 text-secondary">
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
