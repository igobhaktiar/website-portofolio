const surahs = [
  { n: '1', name: 'Al-Fatihah', meta: 'The Opening · 7', ar: 'الفاتحة' },
  { n: '2', name: 'Al-Baqarah', meta: 'The Cow · 286', ar: 'البقرة' },
  { n: '3', name: "Ali 'Imran", meta: 'Family of Imran · 200', ar: 'آل عمران' },
  { n: '4', name: 'An-Nisa', meta: 'The Women · 176', ar: 'النساء' },
];

/** Surah list with Play Asset Delivery download bar (app-qlist). */
export default function QuranListScreen() {
  return (
    <div className="app-qlist appbody">
      <div className="assetbar">
        <div className="t">
          <span>Downloading Mushaf pack</span>
          <span>82%</span>
        </div>
        <div className="track">
          <b />
        </div>
      </div>
      {surahs.map((s) => (
        <div className="surahrow" key={s.n}>
          <span className="num">
            <span>{s.n}</span>
          </span>
          <div>
            <b>{s.name}</b>
            <small>{s.meta}</small>
          </div>
          <span className="ar-s">{s.ar}</span>
        </div>
      ))}
      <div className="tabbar" style={{ marginTop: 'auto' }}>
        <i />
        <i className="on" />
        <i />
        <i />
      </div>
    </div>
  );
}
