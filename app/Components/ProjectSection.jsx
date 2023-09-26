"use client";
import React, {useState} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
const ProjectSection = () => {

  const projectsData = [
    {
      id: 1,
      title: "Trailersflix",
      technologies: "React, Nodejs, Express, PostgreSQL, TailwindCSS",
      description: "A Fullstack application styled like Netflix made for movie lovers who want to watch all their favorite movie trailers.",
      imgUrl: "/images/projects/trailersflix.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/JoshuaAaronBaker/trailers",
      previewUrl: "https://trailersflix.com/",
    },
    {
      id: 2,
      title: "Spotify By Me",
      technologies: "React, Nodejs, Express, CSS3, Spotify API, O-Auth2",
      description: "A React application made for users who want to have a different experience with Spotify.",
      imgUrl: "/images/projects/spotifybyme.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/JoshuaAaronBaker/spotify-by-me",
      previewUrl: "https://spotify-by-me.joshuabaker.dev",
    },
    {
      id: 3,
      title: "Portfolio Website",
      technologies: "React, Nodejs, Express, TailwindCSS, Nextjs",
      description: "",
      imgUrl: "",
      tag: ["All", "Web"],
      gitUrl: "",
      previewUrl: "",
    },
    {
      id: 4,
      title: "Daily Dose of Space",
      technologies: "JavaScript, HTML5, CSS3, NASA API",
      description: "A web app created in a daily horoscope kind of style for people who want small glimpses into the cosmos.",
      imgUrl: "/images/projects/dailydoseofspace.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/JoshuaAaronBaker/Daily-Dose-of-Space",
      previewUrl: "https://joshuaaaronbaker.github.io/Daily-Dose-of-Space/",
    }
  ];

  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
    <div>{filteredProjects.map((project) =>
    <ProjectCard key={project.id} title={project.title} technologies={project.technologies} description={project.description} imgUrl={project.imgUrl} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>)}
    </div>
    </>
  )
}

export default ProjectSection
