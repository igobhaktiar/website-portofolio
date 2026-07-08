/** A flat, frameless screenshot card wrapping any app "screen" as children. */
export default function Phone({ children }) {
  return (
    <div className="phone">
      <div className="screen">{children}</div>
    </div>
  );
}
