import Student from "./Student";

export default function MainBody() {
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
        />
        <Student
          experience={7}
          name="Marc Opolo"
          headshot="https://api.lorem.space/image/calendar?w=150&h=144"
        />
        <Student
          experience={5}
          name="Marcus Demetrius"
          headshot="https://api.lorem.space/image/calendar?w=150&h=153"
        />
      </div>
    </div>
  );
}
