import "../App.css";
const Spin = () => {
  return (
    <button
      onClick={() => {
        document.getElementById("spin").classList.remove("App-logo");
        document.getElementById("spin").classList.add("App-logo-new");
      }}
      className="clickme"
    >
      don't like the spin?
      <br /> Click here to fix
    </button>
  );
};
export default Spin