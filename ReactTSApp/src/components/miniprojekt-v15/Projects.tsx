const Projects = () => {
  const projects = [
    {
      id: 1,
      titel: "Redesign",
      tech: ["HTML, Sass/CSS"],
      repo: "https://github.com/lloydelery",
      development: "Frontend",
      deployed: false,
      deploymentPlattform: null,
      api: false,
    },
    {
      id: 2,
      titel: "Hangman",
      tech: ["JavaScript, HTML, CSS"],
      repo: "https://github.com/lloydelery",
      development: "Frontend",
      deployed: false,
      deploymentPlattform: null,
      api: false,
    },
    {
      id: 3,
      titel: "Todo App",
      tech: ["PHP, HTML, CSS"],
      repo: "https://github.com/lloydelery",
      development: "Backend",
      deployed: false,
      deploymentPlattform: null,
      api: false,
    },
    {
      id: 4,
      titel: "IMDB Clone",
      tech: ["Laravel/PHP, Tailwind/CSS"],
      repo: "https://github.com/lloydelery",
      development: "Backend",
      deployed: true,
      deploymentPlattform: "Vercel",
      deploymentLink: "http://länk.se",
      api: false,
    },
    {
      id: 5,
      titel: "Recipe App",
      tech: ["Angular/TypeScript, HTML, Tailwind/CSS"],
      repo: "https://github.com/lloydelery",
      development: "Frontend",
      deployed: true,
      deploymentPlattform: "Render & Netlify",
      deploymentLink: "http://länk.se",
      api: true,
    },
    {
      id: 6,
      titel: "Weather App",
      tech: ["React/TypeScript, XML/HTML, Tailwind/CSS"],
      repo: "https://github.com/lloydelery",
      development: "Frontend",
      deployed: true,
      deploymentPlattform: "Netlify",
      deploymentLink: "http://länk.se",
      api: true,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center flex-wrap align-center bg-gray-200 h-screen">
        <h2>My projects:</h2>
        {projects.map((project) => (
          <div className="w-65 md:max-w-850 h-auto bg-white rounded-lg m-10 shadow-md scroll-margin-12 scroll-snap-align-center">
            <h3 className="text-left font-bold p-10">{project.titel}</h3>
            <br />
            <div className="text-center px-0 py-0 pb-10 flex flex-wrap items-center justify-evenly">
              <strong>Tech-stack: {project.tech}</strong>
              <br />
              <strong>Development: {project.development}</strong>
              <br />
              {project.deployed == true ? (
                <strong>Deployed on: {project.deploymentPlattform}</strong>
              ) : null}
              <br />
            </div>
            <button className="block relative px-10 py-2 text-lg bg-transparent cursor-pointer select-none overflow-hidden text-right text-black border border-solid">
              View deployed page
            </button>
            <br />
            <strong>{project.api}</strong>
            <br />
            <a href={project.repo}>GitHub Repository</a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
