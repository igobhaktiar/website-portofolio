// Single source of truth for all portfolio content, derived from the CV.
// Edit here to update the site — components read from these structures.

export const profile = {
  name: 'Firgo Bhaktiar Hamsah',
  role: 'Mobile Engineer',
  eyebrow: 'Flutter · Android Native · Mobile & TV',
  lede:
    "Hi, I'm Firgo Bhaktiar Hamsah — a Mobile Engineer specializing in Flutter and Android Native (Kotlin), building scalable apps with Clean Architecture and BLoC for local and international teams.",
  email: 'igobhaktiar07@gmail.com',
  resume: 'Firgo_Bhaktiar_Hamsah-CV-2026.pdf',
  stats: [
    { value: '6+', label: 'Apps shipped' },
    { value: '2+', label: 'Years in mobile' },
    { value: '3.84', label: 'GPA · B.Sc IT' },
  ],
};

export const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { action: 'showcase', label: 'Showcase' },
  { href: '#contact', label: 'Contact' },
];

// Marquee belt of technologies (rendered twice for a seamless loop).
export const techBelt = [
  'Flutter',
  'Dart',
  'Kotlin',
  'BLoC',
  'Clean Architecture',
  'Android TV',
  'Play Asset Delivery',
  'Java',
];

// `screens` is an ordered list of mock-UI keys from components/screens —
// add more entries to show additional screenshots for a project.
export const projects = [
  {
    id: 'altara',
    screens: ['quran'],
    index: '01 / Altara Inovation Group',
    title: "Al-Qur'an, Quran TV & Juz Amma for Kids",
    role: 'Mobile Engineer · Malang · Oct 2025–Present',
    description:
      'Architected and built three Islamic apps in Flutter with Clean Architecture for a maintainable, testable codebase. Used BLoC to handle complex interactions, audio streaming, and async data flows, and optimized SVG rendering and media playback across mobile and TV to eliminate UI jank.',
    tags: ['Flutter', 'Clean Architecture', 'BLoC', 'Audio Streaming', 'SVG', 'Android TV'],
    facts: [
      { value: '3 Apps', label: 'Quran · TV · Kids' },
      { value: 'Mobile + TV', label: 'Multi-screen' },
      { value: 'Clean Arch', label: '+ BLoC' },
    ],
  },
  {
    id: 'galaxy',
    screens: ['property'],
    index: '02 / Galaxy Property',
    title: 'Galaxy Property — real estate app',
    role: 'Mobile Developer · Surabaya · Oct 2024–Present',
    description:
      'Designed and implemented features for real estate needs: property search, detailed property views, map integration, and mortgage calculators. Built accessible, user-friendly UI, tuned performance for a smooth experience, and responded quickly to user-reported bugs — all on BLoC and Feature-Based architecture.',
    tags: ['Flutter', 'BLoC', 'Feature-Based', 'Maps', 'Mortgage Calc'],
    facts: [
      { value: 'iOS + Android', label: 'Cross-platform' },
      { value: 'Live Maps', label: 'Property search' },
      { value: 'Feature-Based', label: 'Architecture' },
    ],
  },
  {
    id: 'aliflammim',
    screens: ['quranList'],
    index: '03 / Alif Lam Mim — Kuwait \u{1F1F0}\u{1F1FC}',
    title: "Qur'an app for an international team",
    role: 'Mobile Engineer · Remote · Feb 2025–Feb 2026',
    description:
      "Developed a cross-platform Qur'an application in Flutter for a Kuwait-based client. Integrated Play Asset Delivery to manage and stream large asset packs — improving load times and scalability — optimized SVG rendering for smoother rendering, and handled ongoing bug fixing and maintenance for long-term reliability.",
    tags: ['Flutter', 'Play Asset Delivery', 'SVG Rendering', 'Cross-platform'],
    facts: [
      { value: '\u{1F1F0}\u{1F1FC} International', label: 'Remote, Kuwait' },
      { value: 'Asset Delivery', label: 'Large packs' },
      { value: 'Faster loads', label: 'Optimized SVG' },
    ],
  },
  {
    id: 'pandawa',
    screens: [
      'pandawaBeranda',
      'pandawaTugas',
      'pandawaKalender',
      'pandawaPanen',
      'pandawaTanam',
      'pandawaLainnya',
    ],
    index: '04 / Pandawa Agri Indonesia',
    title: 'Pandawa Agri — agri-tech app',
    role: 'Mobile Developer (Flutter) · Banyuwangi · Oct 2023–Oct 2024',
    description:
      'Developed Android and iOS apps in Flutter, securely integrating third-party APIs. Managed store launch on Google Play and the App Store with policy compliance, ran training sessions and demos for internal teams and clients, and owned ongoing maintenance, bug fixing, and feature enhancements post-launch.',
    tags: ['Flutter', 'Android + iOS', 'REST APIs', 'Play Store', 'App Store'],
    facts: [
      { value: 'iOS + Android', label: 'Single codebase' },
      { value: 'Play + App Store', label: 'Full launch' },
      { value: '3rd-party APIs', label: 'Secure integration' },
    ],
  },
];

// Skill tiles. Each group has one accent `tint` (not a rainbow per item) so
// the grid reads as calm and organized; `sq` is the little badge label.
export const skillGroups = [
  {
    title: 'Languages',
    tint: '#2DD4E4',
    items: [
      { sq: 'Dt', label: 'Dart' },
      { sq: 'Kt', label: 'Kotlin' },
      { sq: 'Jv', label: 'Java' },
      { sq: 'C#', label: 'C#' },
      { sq: '{}', label: 'XML / JSON' },
    ],
  },
  {
    title: 'Frameworks & Architecture',
    tint: '#7C5CFF',
    items: [
      { sq: 'Fl', label: 'Flutter' },
      { sq: 'BL', label: 'BLoC' },
      { sq: 'CA', label: 'Clean Architecture' },
      { sq: 'FB', label: 'Feature-Based' },
      { sq: 'SD', label: 'Android SDK' },
    ],
  },
  {
    title: 'Platforms',
    tint: '#34D399',
    items: [
      { sq: 'An', label: 'Android' },
      { sq: 'iO', label: 'iOS' },
      { sq: 'TV', label: 'Android TV' },
      { sq: 'XP', label: 'Cross-platform' },
    ],
  },
  {
    title: 'Craft & Delivery',
    tint: '#FF7597',
    items: [
      { sq: 'UX', label: 'UI/UX Design' },
      { sq: 'Sv', label: 'SVG Optimization' },
      { sq: 'PA', label: 'Play Asset Delivery' },
      { sq: 'RE', label: 'REST APIs' },
      { sq: 'St', label: 'Play & App Store' },
    ],
  },
];

export const experience = [
  {
    when: 'Oct 2025 — Present',
    title: 'Mobile Engineer',
    company: 'Altara Inovation Group · Malang, Indonesia',
    description:
      "Building three Islamic apps (Al-Qur'an, Quran TV, Juz Amma for Kids) in Flutter with Clean Architecture and BLoC, optimizing media and SVG performance across mobile and TV.",
  },
  {
    when: 'Feb 2025 — Feb 2026',
    title: 'Mobile Engineer',
    company: 'Alif Lam Mim · Remote, Kuwait \u{1F1F0}\u{1F1FC}',
    description:
      "Developed a cross-platform Qur'an app in Flutter, integrating Play Asset Delivery for large asset packs and optimizing SVG rendering, plus ongoing maintenance.",
  },
  {
    when: 'Oct 2024 — Present',
    title: 'Mobile Developer',
    company: 'Galaxy Property · Surabaya, Indonesia',
    description:
      'Real estate features including property search, map integration, and mortgage calculators, built on BLoC and Feature-Based architecture with accessible UI.',
  },
  {
    when: 'Oct 2023 — Oct 2024',
    title: 'Mobile Developer (Flutter)',
    company: 'Pandawa Agri Indonesia · Banyuwangi, Indonesia',
    description:
      'Shipped Android & iOS apps in Flutter with secure third-party API integration, managed store launches, and ran client training and demos.',
  },
  {
    when: 'Aug 2023 — Mar 2024',
    title: 'Android Engineering',
    company: 'Synergy Academy · Remote',
    description:
      'Android app development in Kotlin using the Android SDK, building and shipping native Android apps.',
  },
  {
    when: 'Sep 2019 — Oct 2023',
    title: 'B.Sc Information Technology · GPA 3.84 / 4.00',
    company: 'State Polytechnic of Jember · Jember, Indonesia',
    description:
      'Built a mobile app and website for the Innovation Garden e-commerce platform, and designed an Augmented Reality exhibition-booth mobile app.',
  },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/igobhaktiar', primary: false },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/firgo-bhaktiar-hamsah/', primary: false },
  { label: 'WhatsApp', href: 'https://wa.me/6282331562744', primary: false },
];
