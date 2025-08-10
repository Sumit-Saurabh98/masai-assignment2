import BottomMainRight from "./BottomMainRight";

export default function MainRight({ name }) {
  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <h2>Main Right</h2>
      <BottomMainRight name={name} />
    </div>
  );
}
