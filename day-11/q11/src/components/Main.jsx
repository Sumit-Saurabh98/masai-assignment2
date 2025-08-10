import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

export default function Main({ name }) {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <MainLeft />
      <MainRight name={name} />
    </div>
  );
}
