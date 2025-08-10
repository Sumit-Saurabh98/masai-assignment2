export default function BottomMainRight({ name }) {
  return (
    <div style={{ border: "1px solid gray", padding: "15px", marginTop: "10px" }}>
      <h3>Bottom Main Right</h3>
      <p>User's Name: <strong>{name || "Not entered yet"}</strong></p>
    </div>
  );
}
