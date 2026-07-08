/** Real-estate listing mock UI (app-prop). */
export default function PropertyScreen() {
  return (
    <div className="app-prop appbody">
      <div className="prop-img">
        <span className="badge">FOR SALE</span>
      </div>
      <div className="prop-info">
        <div className="price">Rp 2,4 M</div>
        <div className="addr">Modern Villa · Surabaya</div>
      </div>
      <div className="prop-specs">
        <span>
          <b>4</b>Beds
        </span>
        <span>
          <b>3</b>Baths
        </span>
        <span>
          <b>220</b>m²
        </span>
      </div>
      <div className="prop-map">
        <span className="pin">{'📍'}</span>
      </div>
      <div className="prop-cta">
        <div className="b1">Mortgage calculator</div>
        <div className="b2">{'★'}</div>
      </div>
      <div className="tabbar" style={{ marginTop: 'auto' }}>
        <i className="on" />
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
