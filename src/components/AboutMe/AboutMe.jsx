const AboutMe = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <h2 className="h3 mb-3">About Me</h2>
        <p>
          Living in Isfahan.I start Learning Flutter and also still Learning
          about .Net and Linux. Interested in teamwork.
        </p>
      </div>
      <div className="col-md-5 offset-md-1">
        <div className="row mt-2">
          <div className="col-sm-4">
            <div className="pb-1">Email</div>
          </div>
          <div className="col-sm-8">
            <div className="pb-1 text-secondary">
              <a href="mailto:javid.izadi1384@gmail.com">
                javid.izadi1384@gmail.com
              </a>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="pb-1">Phone</div>
          </div>
          <div className="col-sm-8">
            <div className="pb-1 text-secondary">
              <a href="tel:+989031556890">+98 903 155 6890</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
