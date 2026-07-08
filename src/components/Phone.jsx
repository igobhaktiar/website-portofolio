/**
 * The device frame: dynamic-island notch + a faux status bar, wrapping any
 * app "screen" passed as children.
 */
export default function Phone({ children, glow = true, time = '9:41' }) {
  return (
    <div className={glow ? 'phone glow' : 'phone'}>
      <div className="screen">
        <div className="island" />
        <div className="scr-status">
          <span>{time}</span>
          <span className="r">{'📶'} {'🔋'}</span>
        </div>
        {children}
      </div>
    </div>
  );
}
