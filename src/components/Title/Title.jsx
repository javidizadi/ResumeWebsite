const Title = ({ name, position }) => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-8 col-md-7 text-center text-md-start">
          <h2
            className="h1 mt-2"
          >
            {name}
          </h2>
          <p>
            {position}
          </p>
          <div className="d-print-none">
            <a className="btn btn-success shadow-sm mt-1" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
