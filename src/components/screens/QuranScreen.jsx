/**
 * Qur'an reading mock UI (app-quran). Defaults to Al-Ikhlas for the Work
 * grid; the hero passes Al-Fatihah props.
 */
export default function QuranScreen({
  name = 'Al-Ikhlas',
  meta = 'SINCERITY · 4 AYAH',
  ayahs = [
    { ar: 'قُلْ هُوَ اللَّهُ أَحَدٌ', n: '١', tr: 'Say, He is Allah, the One.' },
    { ar: 'اللَّهُ الصَّمَدُ', n: '٢', tr: 'Allah, the Eternal Refuge.' },
  ],
  playerLabel = 'Murottal',
}) {
  return (
    <div className="app-quran appbody">
      <div className="q-head">
        <div className="sname">{name}</div>
        <div className="smeta">{meta}</div>
      </div>
      {ayahs.map((a, i) => (
        <div className="ayah" key={i}>
          <div className="ar">
            {a.ar} <span className="n">{a.n}</span>
          </div>
          <div className="tr">{a.tr}</div>
        </div>
      ))}
      <div className="q-player">
        <div className="pp">{'▶'}</div>
        <div className="prog">
          <b />
        </div>
        <small>{playerLabel}</small>
      </div>
    </div>
  );
}
