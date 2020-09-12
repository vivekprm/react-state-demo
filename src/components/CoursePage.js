import React, { useEffect, useState } from "react";
import { getCourses } from "../api/courseApi";

function CoursePage() {
  const [courses, setCourses] = useState([]);

  /**
   * It's important to pass [] array. So that useEffect runs only when it's empty.
   */
  useEffect(() => {
    getCourses().then((_courses) => {
      setCourses(_courses);
    });
  }, []);
  return (
    <>
      <h2>Courses</h2>         
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            return (
              <tr>
                <td>{course.title}</td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CoursePage;
