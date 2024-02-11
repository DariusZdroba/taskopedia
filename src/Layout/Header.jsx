import logo from "../images/react.png";

const Header = () => {
  return (
    <>
      <MainHeader />
      <SubHeader />
    </>
  );
};
function MainHeader() {
  return (
    <div className="pt-3 pl-2" style={{ backgroundColor: "black" }}>
      <img
        src={logo}
        alt="react"
        style={{ height: "35px", verticalAlign: "top" }}
      />
      <span className="h2 pt-4 text-white-50"> React Course</span>
    </div>
  );
}
const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgray",
};
function SubHeader() {
  return (
    <h2 style={subHeaderStyle} className="text-center">
      <em>This is an exciting course!!</em>
    </h2>
  );
}
export default Header;
