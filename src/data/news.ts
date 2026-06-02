export type NewsItem = {
  title: string;
  title_he: string;
  date: string;
  dateColor?: string;
  subtitle: string;
  subtitle_he: string;
  description?: string;
  description_he?: string;
  image: string;
  imageAlt: string;
  imageAlt_he?: string;
  link?: string;
};

export const news: NewsItem[] = [
  {
    title: 'Suddenly, just when you thought it was gone',
    date: 'July – November 2025',
    subtitle: 'Solo Exhibition at Petach Tikva Museum of Art',
    description: 'Curated by Neta Gal-Azmon. Multimedia installation exploring childhood memories from Kibbutz Gesher and the War of Attrition.',
    image: '/images/suddenly-invite.jpg',
    imageAlt: 'Petach Tikva Museum',
    link: '/suddenly-just-when-you-thought-it-was-gone',
  },
  {
    title: 'Untitled',
    date: '2025',
    subtitle: 'Solo Exhibition at Rishon LeZion Municipal Gallery',
    image: '/images/rishon-lezion-01.jpg',
    imageAlt: 'Rishon LeZion Municipal Gallery',
    link: '/untitled',
  },
  {
    title: 'Out There',
    date: '2024',
    subtitle: 'Solo Exhibition at Wilfrid Israel Museum, Kibbutz Hazorea',
    image: '/images/out-there-01.jpg',
    imageAlt: 'Out There, Wilfrid Israel Museum',
    link: '/Out-There',
  },
  {
    title: 'Without Leaving Home',
    date: 'April – May 2024',
    subtitle: 'Solo Exhibition at Gordon Gallery, Tel Aviv',
    image: '/images/without-leaving-home-01.jpg',
    imageAlt: 'Without Leaving Home',
    link: '/Without-Leaving-Home',
  },
  {
    title: 'Flying Cargo',
    date: '2020',
    subtitle: 'Art on the Road — Painted Truck Project',
    description: 'Two fantastical landscape scenes painted on a Flying Cargo truck, inspired by hikes in the Jerusalem hills near the artist’s home during the pandemic.',
    image: '/images/flying-cargo.jpg',
    imageAlt: 'Flying Cargo painted truck',
    link: 'https://www.artontheroad.co.il/en/%D7%90%D7%9C%D7%94%D7%90%D7%9E%D7%99%D7%AA%D7%99%D7%A1%D7%93%D7%95%D7%91%D7%A1%D7%A7%D7%99',
  },
  {
    title: 'Glasshouse',
    date: '2019',
    subtitle: 'Solo Exhibition at Gordon Gallery, Tel Aviv',
    image: '/images/glasshouse-01.jpg',
    imageAlt: 'Glasshouse',
    link: '/Glasshouse',
  },
  {
    title: 'KimonoMatrix',
    date: 'May 2019',
    subtitle: 'Shenkar Exhibition at Wilfrid Israel Museum, Kibbutz Hazorea',
    description: 'Student exhibition curated by Ella Amitay Sadovsky.',
    image: '/images/kimono-matrix-01.jpg',
    imageAlt: 'KimonoMatrix at Wilfrid Israel Museum',
  },
  {
    title: 'I to eye',
    date: 'Jun 2018 – Jun 2019',
    subtitle: 'Exhibition at Israel Museum, Jerusalem',
    description: 'Curator: Shir Meller-Yamaguchi.',
    image: '/images/news-01.jpg',
    imageAlt: 'I to eye',
  },
  {
    title: '7 MINUTES',
    date: 'Winner: Rosenblatt Prize 2016',
    dateColor: '#d4af37',
    subtitle: 'Solo Show at The Artist House, Tel Aviv',
    description: 'Curator: Orly Hoffman. Solo prize exhibition of the 2016 Ann and Ari Rosenblatt Prize for Visual Art.',
    image: '/images/seven-01.jpg',
    imageAlt: '7 Minutes',
    link: '/seven',
  },
  {
    title: 'Post-Postmodernism ≠ Utopia',
    date: 'July 2016',
    subtitle: 'Group Exhibition at Haifa Museum of Art',
    description: 'Curator: Svetlana Reingold.',
    image: '/images/news-03.jpg',
    imageAlt: 'Haifa Museum',
  },
  {
    title: 'Sam and Adele Golden Foundation',
    date: 'June – July 2016',
    subtitle: 'Artist Residency, New Berlin, NY, USA',
    image: '/images/img-4560-copy_orig.jpg',
    imageAlt: 'Golden Foundation',
  },
  {
    title: 'MIX & MATCH 2',
    date: 'Oct – Nov 2015',
    subtitle: 'Group Exhibition at The Artist House, Tel Aviv',
    image: '/images/220452_orig.jpg',
    imageAlt: 'Mix & Match',
  },
  {
    title: 'Homage to The Red Sea',
    date: 'July 2015',
    subtitle: 'Janco-Dada Museum, Ein Hod',
    description: '120th Anniversary of Marcel Janco.',
    image: '/images/3653321_orig.jpg',
    imageAlt: 'Janco-Dada',
  },
  {
    title: 'The MacDowell Colony',
    date: 'April – May 2015',
    subtitle: 'Fellowship, New Hampshire, USA',
    image: '/images/1813007_orig.jpg',
    imageAlt: 'MacDowell Colony',
  },
];
