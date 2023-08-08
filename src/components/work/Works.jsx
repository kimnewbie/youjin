import React, { useEffect, useState } from "react";
import { projectNav, projectsData } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  const onClickItem = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  return (
    <div>
      <div className="work__filters">
        {projectNav.map((item, index) => {
          return (
            <span
              //   className="work__item"
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
              onClick={(e) => onClickItem(e, index)}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
