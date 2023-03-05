function About() {
  return (
    <>
      <h1 className="text-4xl mb-4">Github Finder</h1>
      <p className="text-xl font-light mb-4">
        This is a React application to search github profiles and see profile
        details. The project was made by
        <strong>
          <a href="https://github.com/sohrabzsf" target="_blank">
            {" "}
            Sohrab&nbsp;Zarshamfar
          </a>
        </strong>
        .
      </p>
      <p className="text-xl font-light">
        Version: <span className="font-normal ml-1">1.0.0</span>
      </p>
    </>
  );
}

export default About;
