import dualball from "../assets/dualball.svg";

function Spinner() {
  return (
    <div>
      <img
        width={100}
        src={dualball}
        alt="Loading..."
        className="text-center mx-auto mt-16"
      />
    </div>
  );
}

export default Spinner;
