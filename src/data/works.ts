export type WorkImage = {
  src: string;
  caption?: string;
  caption_he?: string;
};

export type Work = {
  slug: string;
  title: string;
  title_he: string;
  images: WorkImage[];
};

export const works: Work[] = [
  {
    slug: 'suddenly-just-when-you-thought-it-was-gone',
    title: 'Suddenly, just when you thought it was gone 2025',
    title_he: 'פתאום, בדיוק כשחשבת שזה נעלם 2025',
    images: [
      { src: '/images/suddenly-01.jpg', caption: 'Installation view, 2025', caption_he: 'תצוגת התקנה, 2025' },
      { src: '/images/suddenly-02.jpg', caption: 'Oil on canvas, 2025', caption_he: 'שמן על בד, 2025' },
      { src: '/images/suddenly-03.jpg', caption: 'Oil on canvas, 2025', caption_he: 'שמן על בד, 2025' },
      { src: '/images/suddenly-04.jpg', caption: 'Oil on canvas, 2025', caption_he: 'שמן על בד, 2025' },
      { src: '/images/suddenly-05.webp', caption: 'Stop-motion animation still, 2025', caption_he: 'סטיל אנימציה stop-motion, 2025' },
      { src: '/images/suddenly-06.jpg', caption: 'Oil on canvas, 2025', caption_he: 'שמן על בד, 2025' },
      { src: '/images/suddenly-07.jpg', caption: 'Oil on canvas, 2025', caption_he: 'שמן על בד, 2025' },
      { src: '/images/suddenly-08.jpg', caption: 'Oil on canvas, 2025', caption_he: 'שמן על בד, 2025' },
      { src: '/images/suddenly-09.jpg', caption: 'Oil on canvas, 2025', caption_he: 'שמן על בד, 2025' },
      { src: '/images/suddenly-10.jpg', caption: 'Oil on canvas, 2025', caption_he: 'שמן על בד, 2025' },
      { src: '/images/suddenly-11.jpg', caption: 'Oil on canvas, 2025', caption_he: 'שמן על בד, 2025' },
      { src: '/images/suddenly-12.jpg', caption: 'Oil on canvas, 2025', caption_he: 'שמן על בד, 2025' },
      { src: '/images/suddenly-13.jpg', caption: 'Oil on canvas, 2025', caption_he: 'שמן על בד, 2025' },
      { src: '/images/suddenly-14.jpg', caption: 'Oil on canvas, 2025', caption_he: 'שמן על בד, 2025' },
      { src: '/images/suddenly-15.jpg', caption: 'Oil on canvas, 2025', caption_he: 'שמן על בד, 2025' },
      { src: '/images/suddenly-16.jpg', caption: 'Oil on canvas, 2025', caption_he: 'שמן על בד, 2025' },
      { src: '/images/suddenly-17.webp', caption: 'Documentation, 2025', caption_he: 'תיעוד, 2025' }
    ]
  },
  {
    slug: 'Without-Leaving-Home',
    title: 'Without Leaving Home 2024',
    title_he: 'בלי לעזוב את הבית 2024',
    images: [
      { src: '/images/without-leaving-home-01.jpg', caption: 'Oil on Canvas, 2024', caption_he: 'שמן על בד, 2024' },
      { src: '/images/without-leaving-home-02.jpg', caption: 'Green Sofa and Toile, 2023, Oil and Fabric on Canvas, 215x150 cm', caption_he: 'ספה ירוקה וטואיל, 2023, שמן וטקסטיל על בד, 215x150 ס"מ' },
      { src: '/images/without-leaving-home-03.jpg', caption: 'Untitled (A Couple on a Boat), 2023, Oil on Torn Fabric Mounted on Canvas, 215x150 cm', caption_he: 'ללא כותרת (זוג בסירה), 2023, שמן על טקסטיל קרוע על בד, 215x150 ס"מ' },
      { src: '/images/without-leaving-home-04.jpg', caption: 'Untitled 4, 2022, Oil on Canvas, 100x160 cm', caption_he: 'ללא כותרת 4, 2022, שמן על בד, 100x160 ס"מ' },
      { src: '/images/without-leaving-home-05.jpg', caption: 'Untitled 5, 2022, Oil on Canvas, 100x160 cm', caption_he: 'ללא כותרת 5, 2022, שמן על בד, 100x160 ס"מ' },
      { src: '/images/without-leaving-home-06.jpg', caption: 'Landscape 2, 2021, Oil on Canvas, 135x400 cm', caption_he: 'נוף 2, 2021, שמן על בד, 135x400 ס"מ' },
      { src: '/images/without-leaving-home-07.jpg', caption: 'Landscape 3, 2021, Oil on Canvas, 135x400 cm', caption_he: 'נוף 3, 2021, שמן על בד, 135x400 ס"מ' },
      { src: '/images/without-leaving-home-08.jpg', caption: 'Landscape 4, 2021, Oil on Canvas, 135x400 cm', caption_he: 'נוף 4, 2021, שמן על בד, 135x400 ס"מ' },
      { src: '/images/without-leaving-home-09.jpg', caption: 'Untitled (In The Shower), 2023, Oil and Acrylic on Canvas, 92x148 cm', caption_he: 'ללא כותרת (בשירותים), 2023, שמן וקריליק על בד, 92x148 ס"מ' },
      { src: '/images/without-leaving-home-10.jpg', caption: 'Landscape 1, 2021, Oil on Canvas, 135x400 cm', caption_he: 'נוף 1, 2021, שמן על בד, 135x400 ס"מ' },
      { src: '/images/without-leaving-home-11.jpg', caption: 'Untitled (Still Life With Peels in the Dark), 2024, Oil on Canvas, 99x78 cm', caption_he: 'ללא כותרת (חיים דוממים עם קליפות בחושך), 2024, שמן על בד, 99x78 ס"מ' }
    ]
  },
  { slug: 'Glasshouse', title: 'Glasshouse 2019', title_he: 'בית הזכוכית 2019', images: [
    { src: '/images/glasshouse-01.jpg', caption: 'Green painting from Berkeley, bed and yellow lemons, Oil, Acrylic and Fabric Collage on Canvas, 165x200 cm, 2019' },
    { src: '/images/glasshouse-02.jpg', caption: 'Piano and chair with white cover, watch and blue butterfly lamp, Oil, Acrylic and Fabric Collage on Canvas, 165x200 cm, 2019' },
    { src: '/images/glasshouse-03.jpg', caption: 'Red sofa, yellow pot and Sara in a white dress, Oil, Acrylic and Fabric Collage on Canvas, 165x200 cm, 2019' },
    { src: '/images/glasshouse-04.jpg', caption: 'Tsar Ferdinand and Galila on their way to the Holy Land, Oil, Acrylic and Fabric Collage on Canvas, 210x155 cm, 2019' },
    { src: '/images/glasshouse-05.jpg', caption: 'Attic in Pan, Galila and Mud River, Oil, Acrylic and Fabric Collage on Canvas, 175x155 cm, 2019' },
    { src: '/images/glasshouse-06.jpg', caption: 'Pan\'s Cottage, Oil, Acrylic and Fabric Collage on Canvas, 200x155 cm, 2019' }
  ] },
  { slug: '2018', title: '2018', title_he: '2018', images: [
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
  { slug: 'seven', title: 'Seven 2016', title_he: 'שבע 2016', images: [
    { src: '/images/seven-01.jpg', caption: 'Seven (Video Installation Still), 2016' },
    { src: '/images/seven-02.jpg', caption: 'Seven (Video Installation Still), 2016' },
    { src: '/images/seven-03.jpg', caption: 'Seven (Video Installation Still), 2016' },
    { src: '/images/seven-04.jpg', caption: 'Seven (Video Installation Still), 2016' },
    { src: '/images/seven-05.jpg', caption: 'Seven (Video Installation Still), 2016' },
    { src: '/images/seven-06.jpg', caption: 'Seven (Video Installation Still), 2016' },
    { src: '/images/seven-07.jpg', caption: 'Seven (Video Installation Still), 2016' },
    { src: '/images/seven-08.jpg', caption: 'Seven (Video Installation Still), 2016' },
    { src: '/images/seven-09.jpg', caption: 'Seven (Video Installation Still), 2016' },
    { src: '/images/seven-10.jpg', caption: 'Seven (Video Installation Still), 2016' },
    { src: '/images/seven-11.jpg', caption: 'Seven (Video Installation Still), 2016' },
    { src: '/images/seven-12.jpg', caption: 'Seven (Video Installation Still), 2016' }
  ] },
  { slug: 'Principle-of-Uncertainty', title: 'Principle of Uncertainty 2015', title_he: 'עקרון אי-הודעה 2015', images: [
    { src: '/images/principle-of-uncertainty-01.jpeg', caption: 'Certainty and Clemente, oil, acrylic and fabric collage on canvas, 206x166 cm, 2014' },
    { src: '/images/principle-of-uncertainty-02.jpeg', caption: 'Yes or No, oil on canvas, 175x200 cm, 2014' },
    { src: '/images/principle-of-uncertainty-03.jpeg', caption: 'Slave and J. Bathe in George Washington\'s Bathtub, oil, acrylic and collage of fabrics on canvas, 200x165 cm, 2014' },
    { src: '/images/principle-of-uncertainty-04.jpeg', caption: 'Bargain Reality 2, oil, acrylic and fabric on canvas, 171x216 cm, 2014' },
    { src: '/images/principle-of-uncertainty-05.jpeg', caption: '1. The Waterfall 2. The Fan 3. The Shirt, oil, acrylic and fabric collage on canvas, 166x210 cm, 2014' },
    { src: '/images/principle-of-uncertainty-06.jpeg', caption: 'Without Flower Arrangement, oil, acrylic, pigments and fabric collage on canvas, 207x157 cm, 2014' },
    { src: '/images/principle-of-uncertainty-07.jpeg', caption: 'Flower Arrangement 2, oil, acrylic and fabric collage on canvas, 215x135 cm, 2014' },
    { src: '/images/principle-of-uncertainty-08.jpeg', caption: '"At the age of 37 she realized she\'d never ride through Paris in a sports car with the warm wind in her hair", oil on canvas, 175x175 cm, 2013' },
    { src: '/images/principle-of-uncertainty-09.jpeg', caption: 'Orphan (Work is a Supreme Value), oil on canvas, 175x200 cm, 2013' },
    { src: '/images/principle-of-uncertainty-10.jpeg', caption: 'Principle of Uncertainty, oil, acrylic and fabric collage on canvas, 195x165 cm, 2014' },
    { src: '/images/principle-of-uncertainty-11.jpeg', caption: 'The Continuum Concept, oil on canvas, 175x175 cm, 2013' },
    { src: '/images/principle-of-uncertainty-12.jpeg', caption: 'Mother, Rooster and Egg, oil on canvas, 112x175 cm, 2011' }
  ] },
  { slug: 'spare-parts', title: 'Spare Parts 2014-2015', title_he: 'חלקי חילוף 2014-2015', images: [
    { src: '/images/spare-parts-01.jpg', caption: 'Spare Parts, Oil, acrylic and fabric collage on canvas, 2014' },
    { src: '/images/spare-parts-02.jpg', caption: 'Spare Parts, Oil, acrylic and fabric collage on canvas, 2014' },
    { src: '/images/spare-parts-03.jpg', caption: 'Spare Parts, Oil, acrylic and fabric collage on canvas, 2014' },
    { src: '/images/spare-parts-04.jpg', caption: 'Spare Parts, Oil, acrylic and fabric collage on canvas, 2014' },
    { src: '/images/spare-parts-05.jpg', caption: 'Spare Parts, Oil, acrylic and fabric collage on canvas, 2014' },
    { src: '/images/spare-parts-06.jpg', caption: 'Spare Parts, Oil, acrylic and fabric collage on canvas, 2014' },
    { src: '/images/spare-parts-07.jpg', caption: 'Spare Parts, Oil, acrylic and fabric collage on canvas, 2014' },
    { src: '/images/spare-parts-08.jpg', caption: 'Spare Parts, Oil, acrylic and fabric collage on canvas, 2014' },
    { src: '/images/spare-parts-09.jpg', caption: 'Spare Parts, Oil, acrylic and fabric collage on canvas, 2014' },
    { src: '/images/spare-parts-10.jpg', caption: 'Spare Parts, Oil, acrylic and fabric collage on canvas, 2014' },
    { src: '/images/spare-parts-11.jpg', caption: 'Spare Parts, Oil, acrylic and fabric collage on canvas, 2014' },
    { src: '/images/spare-parts-12.jpg', caption: 'Spare Parts, Oil, acrylic and fabric collage on canvas, 2014' },
    { src: '/images/spare-parts-13.jpg', caption: 'Spare Parts, Oil, acrylic and fabric collage on canvas, 2014' },
    { src: '/images/spare-parts-14.jpg', caption: 'Spare Parts, Oil, acrylic and fabric collage on canvas, 2014' }
  ] },
  { slug: 'short-escape', title: 'Short Escape 2011-2013', title_he: 'בריחה קצרה 2011-2013', images: [
    { src: '/images/short-escape-01.jpg', caption: 'Short Escape, Oil, acrylic and fabric collage on canvas, 2012' },
    { src: '/images/short-escape-02.jpg', caption: 'Short Escape, Oil, acrylic and fabric collage on canvas, 2012' },
    { src: '/images/short-escape-03.jpg', caption: 'Short Escape, Oil, acrylic and fabric collage on canvas, 2012' }
  ] },
  { slug: 'dreams-decipherer', title: 'Dreams Decipherer 2010', title_he: 'מפענח חלומות 2010', images: [
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
  { slug: 'wall-installation', title: 'Wall Installation 2009', title_he: 'התקנה על קיר 2009', images: [
    { src: '/images/wall-installation-01.jpg', caption: 'Wall Installation, 2009' },
    { src: '/images/wall-installation-02.jpg', caption: 'Wall Installation, 2009' },
    { src: '/images/wall-installation-03.jpg', caption: 'Wall Installation, 2009' },
    { src: '/images/wall-installation-04.jpg', caption: 'Wall Installation, 2009' },
    { src: '/images/wall-installation-05.jpg', caption: 'Wall Installation, 2009' },
    { src: '/images/wall-installation-06.jpg', caption: 'Wall Installation, 2009' },
    { src: '/images/wall-installation-07.jpg', caption: 'Wall Installation, 2009' },
    { src: '/images/wall-installation-08.jpg', caption: 'Wall Installation, 2009' }
  ] },
  { slug: 'in-between', title: 'In Between 2006-2008', title_he: 'בעניין 2006-2008', images: [
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
  { slug: 'shield-of-the-mighty', title: 'Shield of the Mighty 2011 (paper)', title_he: 'מגן הגיבורים 2011 (נייר)', images: [
    { src: '/images/shield-of-the-mighty-01.jpg', caption: 'Shield of the Mighty, Mixed media on paper, 78x57 cm, 2011' },
    { src: '/images/shield-of-the-mighty-02.jpg', caption: 'Shield of the Mighty, Mixed media on paper, 78x57 cm, 2011' },
    { src: '/images/shield-of-the-mighty-03.jpg', caption: 'Shield of the Mighty, Mixed media on paper, 78x57 cm, 2011' },
    { src: '/images/shield-of-the-mighty-04.jpg', caption: 'Shield of the Mighty, Mixed media on paper, 78x57 cm, 2011' },
    { src: '/images/shield-of-the-mighty-05.jpg', caption: 'Shield of the Mighty, Mixed media on paper, 78x57 cm, 2011' },
    { src: '/images/shield-of-the-mighty-06.jpg', caption: 'Shield of the Mighty, Mixed media on paper, 78x57 cm, 2011' },
    { src: '/images/shield-of-the-mighty-07.jpg', caption: 'Shield of the Mighty, Mixed media on paper, 78x57 cm, 2011' },
    { src: '/images/shield-of-the-mighty-08.jpg', caption: 'Shield of the Mighty, Mixed media on paper, 78x57 cm, 2011' }
  ] },
  { slug: 'quiet-island', title: 'Quiet Island - video 2012', title_he: 'אי שקט - וידאו 2012', images: [
    { src: '/images/quiet-island-01.jpg', caption: 'Quiet Island (Video Still), 2012' },
    { src: '/images/quiet-island-02.jpg', caption: 'Quiet Island (Video Still), 2012' },
    { src: '/images/quiet-island-03.jpg', caption: 'Quiet Island (Video Still), 2012' },
    { src: '/images/quiet-island-04.jpg', caption: 'Quiet Island (Video Still), 2012' },
    { src: '/images/quiet-island-05.jpg', caption: 'Quiet Island (Video Still), 2012' },
    { src: '/images/quiet-island-06.jpg', caption: 'Quiet Island (Video Still), 2012' }
  ] },
  { slug: 'private-investigations', title: 'Private Investigations 2004', title_he: 'חקירות פרטיות 2004', images: [
    { src: '/images/private-investigations-01.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/private-investigations-02.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/private-investigations-03.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/private-investigations-04.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/private-investigations-05.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/private-investigations-06.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/private-investigations-07.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/private-investigations-08.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/private-investigations-09.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/private-investigations-10.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/private-investigations-11.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/private-investigations-12.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/private-investigations-13.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/private-investigations-14.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/private-investigations-15.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/private-investigations-16.jpg', caption: 'Charcoal on paper, 2004' }
  ] },
];

export const etcLinks = [
  { slug: 'news', title: 'News' },
  { slug: 'publications', title: 'Publications' },
  { slug: 'articles', title: 'Articles' },
];
