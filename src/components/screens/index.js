import QuranScreen from './QuranScreen.jsx';
import PropertyScreen from './PropertyScreen.jsx';
import QuranListScreen from './QuranListScreen.jsx';
import AgriScreen from './AgriScreen.jsx';
import { makeImageScreen } from './ImageScreen.jsx';

// Real Pandawa Agri screenshots (cropped from the app store composite),
// served from public/pandawa/.
const pandawaShots = {
  pandawaBeranda: ['/pandawa/beranda.png', 'Pandawa Agri — home dashboard'],
  pandawaTugas: ['/pandawa/tugas.png', 'Pandawa Agri — task list'],
  pandawaKalender: ['/pandawa/kalender.png', 'Pandawa Agri — activity calendar'],
  pandawaPanen: ['/pandawa/panen.png', 'Pandawa Agri — harvest data'],
  pandawaTanam: ['/pandawa/tanam.png', 'Pandawa Agri — planting'],
  pandawaLainnya: ['/pandawa/lainnya.png', 'Pandawa Agri — more menu'],
};

// Maps a project's `screen` key (see data/portfolio.js) to its mock UI.
export const screens = {
  quran: QuranScreen,
  property: PropertyScreen,
  quranList: QuranListScreen,
  agri: AgriScreen,
  ...Object.fromEntries(
    Object.entries(pandawaShots).map(([key, [src, alt]]) => [
      key,
      makeImageScreen(src, alt),
    ]),
  ),
};
