const tasks = [
  { label: 'Apply fertilizer', meta: 'Block A · 08:00', done: true },
  { label: 'Irrigation check', meta: 'Block B · 13:00', done: false },
  { label: 'Pest scouting', meta: 'Block C · 15:30', done: false },
];

/** Agri-tech field dashboard mock UI (app-agri). */
export default function AgriScreen() {
  return (
    <div className="app-agri appbody">
      <div className="agri-top">
        <div className="agri-field">
          <span>Field A · Paddy</span>
          <b>Healthy</b>
          <div className="hp">Growth 78% · Day 42</div>
        </div>
        <div className="agri-weather">
          <div className="ic">{'⛅'}</div>
          <b>31°</b>
          <span>Banyuwangi</span>
        </div>
      </div>
      <div className="agri-tasks">
        <div className="h">Today's tasks</div>
        {tasks.map((t) => (
          <div className="agri-task" key={t.label}>
            <span className={t.done ? 'ck done' : 'ck'}>{t.done ? '✓' : ''}</span>
            <div>
              <b>{t.label}</b>
              <small>{t.meta}</small>
            </div>
          </div>
        ))}
      </div>
      <div className="tabbar" style={{ marginTop: 'auto' }}>
        <i />
        <i />
        <i className="on" />
        <i />
      </div>
    </div>
  );
}
