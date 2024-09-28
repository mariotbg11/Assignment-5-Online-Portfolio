import ProjectItem from "../components/ProjectItem";
import projects from "../data/projects";

function Project() {
  return (
    <div className="py-10 px-3">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold text-white">
        Project
      </h1>
      <div className="divider"></div>
      <p className="mb-6 text-white text-center">This is my recent project</p>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((projectItem) => (
            <ProjectItem
              key={projectItem.title}
              imgURL={projectItem.imgURL}
              title={projectItem.title}
              stack={projectItem.stack}
              link={projectItem.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
