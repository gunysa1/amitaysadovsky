export type WorkImage = {
  src: string;
  caption?: string;
};

export type Work = { 
  slug: string; 
  title: string; 
  images: WorkImage[];
};

export const works: Work[] = [
  { 
    slug: 'suddenly-just-when-you-thought-it-was-gone', 
    title: 'Suddenly, just when you thought it was gone 2025',
    images: [
      { src: '/images/suddenly-01.jpg', caption: 'Installation view, 2025' },
      { src: '/images/suddenly-02.jpg', caption: 'Oil on canvas, 2025' },
      { src: '/images/suddenly-03.jpg', caption: 'Oil on canvas, 2025' },
      { src: '/images/suddenly-04.jpg', caption: 'Oil on canvas, 2025' },
      { src: '/images/suddenly-05.webp', caption: 'Stop-motion animation still, 2025' },
      { src: '/images/suddenly-06.jpg', caption: 'Oil on canvas, 2025' },
      { src: '/images/suddenly-07.jpg', caption: 'Oil on canvas, 2025' },
      { src: '/images/suddenly-08.jpg', caption: 'Oil on canvas, 2025' },
      { src: '/images/suddenly-09.jpg', caption: 'Oil on canvas, 2025' },
      { src: '/images/suddenly-10.jpg', caption: 'Oil on canvas, 2025' },
      { src: '/images/suddenly-11.jpg', caption: 'Oil on canvas, 2025' },
      { src: '/images/suddenly-12.jpg', caption: 'Oil on canvas, 2025' },
      { src: '/images/suddenly-13.jpg', caption: 'Oil on canvas, 2025' },
      { src: '/images/suddenly-14.jpg', caption: 'Oil on canvas, 2025' },
      { src: '/images/suddenly-15.jpg', caption: 'Oil on canvas, 2025' },
      { src: '/images/suddenly-16.jpg', caption: 'Oil on canvas, 2025' },
      { src: '/images/suddenly-17.webp', caption: 'Documentation, 2025' }
    ]
  },
  { 
    slug: 'Without-Leaving-Home', 
    title: 'Without Leaving Home 2024',
    images: [
      { src: '/images/without-leaving-home-01.jpg', caption: 'Oil on Canvas, 2024' },
      { src: '/images/without-leaving-home-02.jpg', caption: 'Green Sofa and Toile, 2023, Oil and Fabric on Canvas, 215x150 cm' },
      { src: '/images/without-leaving-home-03.jpg', caption: 'Untitled (A Couple on a Boat), 2023, Oil on Torn Fabric Mounted on Canvas, 215x150 cm' },
      { src: '/images/without-leaving-home-04.jpg', caption: 'Untitled 4, 2022, Oil on Canvas, 100x160 cm' },
      { src: '/images/without-leaving-home-05.jpg', caption: 'Untitled 5, 2022, Oil on Canvas, 100x160 cm' },
      { src: '/images/without-leaving-home-06.jpg', caption: 'Landscape 2, 2021, Oil on Canvas, 135x400 cm' },
      { src: '/images/without-leaving-home-07.jpg', caption: 'Landscape 3, 2021, Oil on Canvas, 135x400 cm' },
      { src: '/images/without-leaving-home-08.jpg', caption: 'Landscape 4, 2021, Oil on Canvas, 135x400 cm' },
      { src: '/images/without-leaving-home-09.jpg', caption: 'Untitled (In The Shower), 2023, Oil and Acrylic on Canvas, 92x148 cm' },
      { src: '/images/without-leaving-home-10.jpg', caption: 'Landscape 1, 2021, Oil on Canvas, 135x400 cm' },
      { src: '/images/without-leaving-home-11.jpg', caption: 'Untitled (Still Life With Peels in the Dark), 2024, Oil on Canvas, 99x78 cm' }
    ]
  },
  { slug: 'Glasshouse', title: 'Glasshouse 2019', images: [
    { src: '/images/glasshouse-01.jpg', caption: 'Green painting from Berkeley, bed and yellow lemons, Oil, Acrylic and Fabric Collage on Canvas, 165x200 cm, 2019' },
    { src: '/images/glasshouse-02.jpg', caption: 'Piano and chair with white cover, watch and blue butterfly lamp, Oil, Acrylic and Fabric Collage on Canvas, 165x200 cm, 2019' },
    { src: '/images/glasshouse-03.jpg', caption: 'Red sofa, yellow pot and Sara in a white dress, Oil, Acrylic and Fabric Collage on Canvas, 165x200 cm, 2019' },
    { src: '/images/glasshouse-04.jpg', caption: 'Tsar Ferdinand and Galila on their way to the Holy Land, Oil, Acrylic and Fabric Collage on Canvas, 210x155 cm, 2019' },
    { src: '/images/glasshouse-05.jpg', caption: 'Attic in Pan, Galila and Mud River, Oil, Acrylic and Fabric Collage on Canvas, 175x155 cm, 2019' },
    { src: '/images/glasshouse-06.jpg', caption: 'Pan\'s Cottage, Oil, Acrylic and Fabric Collage on Canvas, 200x155 cm, 2019' }
  ] },
  { slug: '2018', title: '2018', images: [
    { src: '/images/2018-01.jpg', caption: 'Oil on Canvas, 2018' },
    { src: '/images/2018-02.jpg', caption: 'Oil on Canvas, 2018' },
    { src: '/images/2018-03.jpg', caption: 'Oil on Canvas, 2018' },
    { src: '/images/2018-04.jpg', caption: 'Oil on Canvas, 2018' },
    { src: '/images/2018-05.jpg', caption: 'Oil on Canvas, 2018' },
    { src: '/images/2018-06.jpg', caption: 'Oil on Canvas, 2018' },
    { src: '/images/2018-07.jpg', caption: 'Oil on Canvas, 2018' },
    { src: '/images/2018-08.jpg', caption: 'Oil on Canvas, 2018' },
    { src: '/images/2018-09.jpg', caption: 'Oil on Canvas, 2018' },
    { src: '/images/2018-10.jpg', caption: 'Oil on Canvas, 2018' },
    { src: '/images/2018-11.jpg', caption: 'Oil on Canvas, 2018' },
    { src: '/images/2018-12.jpg', caption: 'Oil on Canvas, 2018' },
    { src: '/images/2018-13.jpg', caption: 'Oil on Canvas, 2018' },
    { src: '/images/2018-14.jpg', caption: 'Oil on Canvas, 2018' },
    { src: '/images/2018-15.jpg', caption: 'Oil on Canvas, 2018' },
    { src: '/images/2018-16.jpg', caption: 'Oil on Canvas, 2018' },
    { src: '/images/2018-17.jpg', caption: 'Oil on Canvas, 2018' },
    { src: '/images/2018-18.jpg', caption: 'Oil on Canvas, 2018' },
    { src: '/images/2018-19.jpg', caption: 'Oil on Canvas, 2018' },
    { src: '/images/2018-20.jpg', caption: 'Oil on Canvas, 2018' },
    { src: '/images/2018-21.jpg', caption: 'Oil on Canvas, 2018' }
  ] },
  { slug: 'seven', title: 'Seven 2016', images: [] },
  { slug: 'Principle-of-Uncertainty', title: 'Principle of Uncertainty 2015', images: [] },
  { slug: 'spare-parts', title: 'Spare Parts 2014-2015', images: [] },
  { slug: 'short-escape', title: 'Short Escape 2011-2013', images: [] },
  { slug: 'dreams-decipherer', title: 'Dreams Decipherer 2010', images: [
    { src: '/images/dreams-decipherer-01.jpg', caption: 'Flower Arrangement, Oil, polymer and pigment on fabric, 215x174 cm, 2010' },
    { src: '/images/dreams-decipherer-02.jpg', caption: 'Everlasting Tenure in the Region of Measure, Oil, polymer and pigment on fabric, 215x139 cm, 2010' },
    { src: '/images/dreams-decipherer-03.jpg', caption: 'In Another Place and Time, Oil, polymer and pigment on fabric, 215x123.5 cm, 2010' },
    { src: '/images/dreams-decipherer-04.jpg', caption: 'Two Fifteen, The Pasta is Ready, Oil, polymer and pigment on canvas, 215x174 cm, 2010' },
    { src: '/images/dreams-decipherer-05.jpg', caption: 'Na\'aman, Finchi, Israeli and Daniel Jesse Lewis, Oil, polymer and pigment on canvas, 215x174 cm, 2010' },
    { src: '/images/dreams-decipherer-06.jpg', caption: 'The Waterfall, the Illuminating Lamp and the Shirt, Oil, polymer and pigment on fabric, 174x215 cm, 2009' },
    { src: '/images/dreams-decipherer-07.jpg', caption: 'The Maids of Honor, Oil and acrylic on canvas, 174x216 cm, 2009' },
    { src: '/images/dreams-decipherer-08.jpg', caption: 'Pleasure Is Not The First of All Possessions, Oil, polymer and pigment on fabric, 166x126 cm, 2010' },
    { src: '/images/dreams-decipherer-09.jpg', caption: 'She Is Here, Oil on canvas, 66.5x60 cm, 2010' },
    { src: '/images/dreams-decipherer-10.jpg', caption: 'Roman, Turkish and the One for the Train, Oil, polymer, acrylic and pigment on fabric, 63.5x64 cm, 2008' },
    { src: '/images/dreams-decipherer-11.jpg', caption: 'Untitled (Diptych), Oil and acrylic on canvas, 100x90 cm, 2008' }
  ] },
  { slug: 'wall-installation', title: 'Wall Installation 2009', images: [] },
  { slug: 'in-between', title: 'In Between 2006-2008', images: [
    { src: '/images/in-between-01.jpg', caption: 'Oil on canvas, 2006-2008' },
    { src: '/images/in-between-02.jpg', caption: 'Oil on canvas, 2006-2008' },
    { src: '/images/in-between-03.jpg', caption: 'Oil on canvas, 2006-2008' },
    { src: '/images/in-between-04.jpg', caption: 'Oil on canvas, 2006-2008' },
    { src: '/images/in-between-05.jpg', caption: 'Oil on canvas, 2006-2008' },
    { src: '/images/in-between-06.jpg', caption: 'Oil on canvas, 2006-2008' },
    { src: '/images/in-between-07.jpg', caption: 'Oil on canvas, 2006-2008' },
    { src: '/images/in-between-08.jpg', caption: 'Oil on canvas, 2006-2008' },
    { src: '/images/in-between-09.jpg', caption: 'Oil on canvas, 2006-2008' },
    { src: '/images/in-between-10.jpg', caption: 'Oil on canvas, 2006-2008' },
    { src: '/images/in-between-11.jpg', caption: 'Oil on canvas, 2006-2008' },
    { src: '/images/in-between-12.jpg', caption: 'Oil on canvas, 2006-2008' }
  ] },
  { slug: 'shield-of-the-mighty', title: 'Shield of the Mighty 2011 (paper)', images: [] },
  { slug: 'quiet-island', title: 'Quiet Island - video 2012', images: [] },
  { slug: 'private-investigations', title: 'Private Investigations 2004', images: [] },
];

export const etcLinks = [
  { slug: 'news', title: 'News' },
  { slug: 'publications', title: 'Publications' },
  { slug: 'articles', title: 'Articles' },
];
