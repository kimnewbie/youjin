import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href={() => false} className="work__button">
        Demo
        <box-icon name="right-arrow-alt" class="work__button-icon" />
      </a>
    </div>
  );
};

export default WorkItems;
