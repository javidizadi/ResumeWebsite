const AboutMe = ({ aboutMe, email, phone }) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <h2 className="h3 mb-3">About Me</h2>
        <p>{aboutMe}</p>
      </div>
      <div className="col-md-5 offset-md-1">
        <div className="row mt-2">
          <div className="col-sm-4">
            <div className="pb-1">Email</div>
          </div>
          <div className="col-sm-8">
            <div className="pb-1 text-secondary">
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="pb-1">Phone</div>
          </div>
          <div className="col-sm-8">
            <div className="pb-1 text-secondary">
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
