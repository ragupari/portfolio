import React from 'react';

const Coursework = ({ coursework }) => (
  <div>
    <h2>My Coursework</h2>
    <div className="accordion" id="courseworkAccordion">
      {coursework.map((semester, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={`semester${index}Header`}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#semester${index}`} aria-expanded="true">
              {semester.semester}
            </button>
          </h2>
          <div id={`semester${index}`} className="accordion-collapse collapse">
            <div className="accordion-body">
              <div className="list-group">
                {semester.courses.map((course, courseIndex) => (
                  <div className="list-group-item" key={courseIndex}>
                    <h5 className="mb-1">{course.name}</h5>
                    <small>{course.description}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Coursework;
