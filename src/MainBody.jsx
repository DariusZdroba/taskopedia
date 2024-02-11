import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";

const MainBody = () => {
  return (
    <div>
      <p> Learning about rendering</p>
      <ul>
        <li>List item !?</li>
        <li>Another list item !?</li>
        {/*  Enter task:{" "} */}
        {/*  <input maxLength={5} readOnly={false} placeholder="Ben"></input>*/}
      </ul>
      <div>
        <div className="row">Students Enrolled:</div>
        <Student
          experience={2}
          name="Zdroba Darius"
          headshot="https://api.lorem.space/image/calendar?w=150&h=150"
        >
          <StudentReview />
        </Student>
        <Student
          experience={7}
          name="Marc Opolo"
          headshot="https://api.lorem.space/image/calendar?w=150&h=144"
        >
          <StudentReview />
        </Student>
        <Student
          experience={5}
          name="Marcus Demetrius"
          headshot="https://api.lorem.space/image/calendar?w=150&h=153"
        />
      </div>
    </div>
  );
};
export default MainBody;
