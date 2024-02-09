import { faker } from "@faker-js/faker";

function Student(props) {
  const fullName = "Darius Beniamin Zdroba";
  const programmingExp = 2;
  return (
    <div className="col-4 py-2">
      <div className="row border">
        <div className="col-2">
          <img className="w-100 m-1" src={props.headshot} alt="initials" />
        </div>
        <div className="col-10">
          {props.name} <br />
          Coding experience: {props.experience} years
        </div>
      </div>
    </div>
  );
}
export default Student;
