export type WorkImage = {
  src: string;
  caption?: string;
  caption_he?: string;
};

export type Work = {
  slug: string;
  title: string;
  title_he: string;
  medium: 'video' | 'canvas' | 'paper';
  intro?: string;
  intro_he?: string;
  video?: string;
  videoCaption?: string;
  images: WorkImage[];
};

export const works: Work[] = [
  {
    slug: 'suddenly-just-when-you-thought-it-was-gone',
    medium: 'video',
    title: 'Suddenly, just when you thought it was gone 2025',
    title_he: 'פתאום, בדיוק כשחשבת שזה נעלם 2025',
    video: 'https://www.youtube.com/embed/KfuCsLHAWKw',
    intro: `<p><em>Curator: Neta Gal-Azmon</em><br>Mixed media on canvas and stop-motion animation, four channels, 9 min</p>
<p>Ella Amitay Sadovsky's installation was realized using a technique new to her work, combining sound and video animation projected onto a surface of paintings. Composed of layered paintings through gluing and subtraction, at times interwoven with textiles, the collage, synonymous with her practice, is now enriched with additional, immaterial strata. For the first time, the animated projections serve as the sole source of light illuminating the paintings.</p>
<p>The projected animation was crafted using stop-motion techniques, based on dolls made from painted cardboard cutouts, connected with joints that allow for movement. The figures were photographed frame by frame, edited into a sequence, and projected into a darkened space, conjuring the magic-lantern visions of childhood in the kibbutz. The soundtrack is perceived as an added layer, enveloping the scene, blending a cappella singing with choir singing from the archive of Kibbutz Gesher, where Amitay Sadovsky grew up.</p>
<p>In her works, Amitay Sadovsky returns to foundational experiences etched in her childhood. The events of October 7, 2023 sparked a "return of the repressed," summoning early memories from the years of the War of Attrition. The border emerges in her work as the waterline of the Jordan River, separating the upper, illuminated part of the installation (life above ground) from the lower, dark section, where inner wars rage. During the War of Attrition, for three whole years, significant parts of her childhood were pushed underground, into the subterranean bomb shelter, far from sunlight.</p>
<p>One of the figures appearing in the work is the artist's grandmother, Tsili Amitai, deputy commander of a forward post in Kibbutz Gesher during the War of Independence. When the Arab Legion and the Jordanian army invaded the Jordan Valley, Tsili Amitai was left alone in that post after all the other combatants around her had been either wounded or killed. A rescue team arrived nearly 24 hours later to find her still holding the line, alone. On the night of the attack, the kibbutz children were evacuated to a monastery in Haifa — among them Tsili's five-year-old son Amos, who walked the entire way barefoot after losing his shoes.</p>
<p>The exhibition is based on archival research and personal testimonies from both the War of Independence and the War of Attrition. The title is drawn from the words of Haim Gouri: <em>"In this land, the past is always the most current thing — because it always comes back. And suddenly, just when you thought it was gone, it takes its revenge."</em></p>`,
    intro_he: `<p><em>אוצרת: נטע גל־עצמון</em><br>טכניקה מעורבת על בד ואנימציית סטופ־מושן, ארבעה ערוצים, 09:30 דק׳</p>
<p>מיצב זה של אלה אמיתי סדובסקי עשוי בטכניקה חדשה בעבודתה, המשלבת סאונד והקרנת וידיאו־אנימציה על מצע של ציורים. עבודת הקולאז' המזוהה עמה, המורכבת משכבות של ציור ולעתים גם טקסטיל, מתעבה כעת בשכבות נוספות שאינן חומר. לראשונה בעבודתה, הקרנות האנימציה הן מקור האור היחיד המאיר את הציורים.</p>
<p>האנימציה המוקרנת נעשתה בשיטת "סטופ מושן", על בסיס בובות צבועות מגזירי קרטון עם מחברים המאפשרים את תנועתן. הדמויות מצולמות פריים אחר פריים, ערוכות ברצף ומוקרנות בחלל חשוך, באופן השולח אל חזיונות פנס הקסם הזכורים מבתי ילדים בקיבוצים.</p>
<p>אחת הדמויות המופיעות בעבודה היא סבתה של האמנית, צילי אמיתי, סגנית מפקד עמדה קדמית בקיבוץ גשר בזמן מלחמת העצמאות. עם פלישת הלגיון הערבי וצבא ירדן לעמק הירדן, נשארה צילי אמיתי לבדה בעמדה הקדמית לאחר שכל שאר הלוחמים שלצדה נפצעו או נהרגו. כוח חילוץ שהגיע לעמדה כעבור כ־24 שעות מצא אותה מחזיקה בקו לבדה.</p>
<p>שם התערוכה מצטט מדברי חיים גורי: <em>"בארץ הזו העבר הוא תמיד הדבר הכי אקטואלי, כי זה תמיד חוזר. ופתאום, כאשר חשבת שזה כבר איננו, זה נוקם את נקמתו."</em></p>`,
    images: [
      { src: '/images/suddenly-01.jpg', caption: 'Oil on Canvas, 2025' },
      { src: '/images/suddenly-02.jpg', caption: 'Oil on Canvas, 2025' },
      { src: '/images/suddenly-03.jpg', caption: 'Oil on Canvas, 2025' },
      { src: '/images/suddenly-04.jpg', caption: 'Oil on Canvas, 2025' },
      { src: '/images/suddenly-05.jpg', caption: 'Oil on Canvas, 2025' },
      { src: '/images/suddenly-06.jpg', caption: 'Oil on Canvas, 2025' },
      { src: '/images/suddenly-07.jpg', caption: 'Oil on Canvas, 2025' },
      { src: '/images/suddenly-08.jpg', caption: 'Installation detail, 2025' },
      { src: '/images/suddenly-09.jpg', caption: 'Installation detail, 2025' },
      { src: '/images/suddenly-10.jpg', caption: 'Installation detail, 2025' },
      { src: '/images/suddenly-11.jpg', caption: 'Installation detail, 2025' },
      { src: '/images/suddenly-12.jpg', caption: 'Installation detail, 2025' },
      { src: '/images/suddenly-13.jpg', caption: 'Installation detail, 2025' }
    ]
  },
  {
    slug: 'untitled',
    medium: 'canvas',
    title: 'Untitled 2025',
    title_he: 'ללא כותרת',
    intro: `<p><em>Text: Efi Gan</em></p>
<p>Ella Amitay Sadovsky's collage works create a complex experience that moves between reality and imagination, between personal and collective memory, and between aesthetics and unease. The beautiful and the threatening, the real and the imagined, exist side by side: home and family, birth, intimacy and partnership, alongside feelings of abandonment, threat, loss, and anxiety.</p>
<p>The collages are built upon Toile de Jouy fabrics, which over the past 300 years have become a design staple worldwide and a part of the "foundations of European taste." The very use of these fabrics as a base for the collage works connects story to story — binding the small, familiar scenes printed on the cloth to the artist's own personal narratives.</p>
<p>Ella's artistic training includes advanced degrees in art from Israel and abroad, alongside an academic background in the sciences (a PhD from the Weizmann Institute and a post-doctorate at UC Berkeley). The fusion of science and art is evident in the way she treats material as an essential component of the work.</p>
<p>Ella explores the tension between beauty and barrenness, between dazzling decorativeness and lifelessness, creating a statement about contemporary reality and about the domestic space as an emotionally and politically charged arena. The collages take us on a journey — not toward real nature, but toward artificial representations made of wallpaper, paper, and fabric.</p>`,
    intro_he: `<p><em>טקסט: אפי גן</em></p>
<p>עבודות הקולאז' של אלה אמיתי סדובסקי מייצרות חוויה מורכבת הנעה בין מציאות לדמיון, בין זיכרון אישי לקולקטיבי ובין אסתטיקה לאי נוחות. היפה והמאיימים, הממשי והמדומיין, מתקיימים בעת ובעונה אחת: בית ומשפחה, לידה, אינטימיות וזוגיות, לצד תחושות נטישה, איום, אובדן וחרדה.</p>
<p>הקולאז'ים נשענים על בדי ה־Toile de Jouy אשר הפכו במשך 300 השנים האחרונות לנכס צאן ברזל עיצובי בכל העולם וכוננו חלק מ'יסודות הטעם האירופי'. עצם השימוש בבדים הללו כבסיס לעבודות הקולאז' מחבר סיפור אל סיפור ואת הסיפורים הקטנים המוכרים שהודפסו על הבדים אל הסיפורים האישיים של היוצרת.</p>
<p>הכשרתה האמנותית של אלה כוללת תארים מתקדמים באמנות מהארץ ומחו"ל לצד רקע אקדמי במדעים (דוקטורט במכון ויצמן ופוסט־דוקטורט באוניברסיטת ברקלי). השילוב בין מדע לאמנות ניכר באופן שבו היא מתייחסת לחומר כמרכיב מהותי ביצירה.</p>
<p>אלה חוקרת את המתח שבין יופי לעקרות, בין דקורטיביות מרהיבה לבין חוסר חיות, ויוצרת אמירה על מציאות עכשווית ועל המרחב הביתי כזירה טעונה רגשית ופוליטית. הקולאז'ים מוציאים אותנו למסע, לא אל טבע ממשי, אלא אל ייצוגים מלאכותיים עשויים טפט, נייר ובד.</p>`,
    images: [
      { src: '/images/untitled-17.jpg', caption: 'Untitled, 2025' },
      { src: '/images/untitled-01.jpg', caption: 'Untitled, 2025' },
      { src: '/images/untitled-02.jpg', caption: 'Untitled, 2025' },
      { src: '/images/untitled-03.jpg', caption: 'Untitled, 2025' },
      { src: '/images/untitled-04.jpg', caption: 'Untitled, 2025' },
      { src: '/images/untitled-05.jpg', caption: 'Untitled, 2025' },
      { src: '/images/untitled-06.jpg', caption: 'Untitled, 2025' },
      { src: '/images/untitled-07.jpg', caption: 'Untitled, 2025' },
      { src: '/images/untitled-08.jpg', caption: 'Untitled, 2025' },
      { src: '/images/untitled-09.jpg', caption: 'Untitled, 2025' },
      { src: '/images/untitled-10.jpg', caption: 'Untitled, 2025' },
      { src: '/images/untitled-11.jpg', caption: 'Untitled, 2025' },
      { src: '/images/untitled-12.jpg', caption: 'Untitled, 2025' },
      { src: '/images/untitled-13.jpg', caption: 'Untitled, 2025' },
      { src: '/images/untitled-14.jpg', caption: 'Untitled, 2025' },
      { src: '/images/untitled-15.jpg', caption: 'Untitled, 2025' },
      { src: '/images/untitled-16.jpg', caption: 'Untitled, 2025' },
      { src: '/images/installation-view-01.jpg', caption: 'Installation view, 2025' },
      { src: '/images/installation-view-02.jpg', caption: 'Installation view, 2025' },
      { src: '/images/installation-view-03.jpg', caption: 'Installation view, 2025' },
      { src: '/images/installation-view-04.jpg', caption: 'Installation view, 2025' },
      { src: '/images/installation-view-05.jpg', caption: 'Installation view, 2025' }
    ]
  },
  {
    slug: 'Out-There',
    medium: 'video',
    title: 'Out There 2024',
    title_he: 'אי שם 2024',
    intro: `<p><em>Text: Shir Meller-Yamaguchi</em></p>
<p>Like Scheherazade in <em>One Thousand and One Nights</em>, in this exhibition Ella Amitay Sadovsky assumes the role of a storyteller, unfolding absurd fictional tales with no beginning or end. Like the Arabian/Eastern folktales, and like life itself, these intertwine multiple and even contradictory narratives, alternating between a contemplative and amused tone.</p>
<p>In her previous works, Amitay Sadovsky shifted between large-scale paintings that combine colorful textures and painting animation installations, mostly of the family and domestic space. Her characteristic collagist painting language sets a multilayered ambivalence and relativism as the starting point for observation. Here, for the first time Amitay Sadovsky presents animated scenes on large painted screens that draw inspiration from Indian miniatures, transforming their flat decorativeness into fantastical landscapes. These serve as backdrop for animated scenes, where paper cutouts of figures and animals come alive with their projection on the painting.</p>
<p>The cutouts serve her as a conceptual and theatrical means. They are doomed to move through the cycles of Saṃsāra — human suffering, towards Nirvana — the freedom from pain. The desert and the sea are referenced in all acts, suggesting a familiar yet fictional eastern landscape.</p>
<p>In the first act, <em>Under the Sun</em>, the top half depicting an arid abandoned village is contrasted with the surreal drama that unfolds below it. In the second act, <em>One by One</em>, women seem frozen still on a carpet/platform that miraculously hovers above the sea. The last act, <em>Unto the Place from Whence the Rivers Come</em>, presents an idyllic landscape where swimmers go round and round in an infinite motion, swimming alongside fish that alternately swallow and spit them out.</p>
<p>In the words of the Koheleth (Ecclesiastes 1:2–14): <em>"Vanity of vanities; all is vanity […] One generation passeth away, and another generation cometh: but the earth abideth for ever. […] I have seen all the works that are done under the sun; and, behold, all is vanity and vexation of spirit."</em></p>`,
    images: [
      { src: '/images/out-there-01.jpg', caption: 'Installation view, Wilfrid Israel Museum, 2024' },
      { src: '/images/out-there-02.jpg', caption: 'Installation view, Wilfrid Israel Museum, 2024' },
      { src: '/images/out-there-03.jpg', caption: 'Installation view, Wilfrid Israel Museum, 2024' },
      { src: '/images/out-there-04.jpg', caption: 'Installation view, Wilfrid Israel Museum, 2024' },
      { src: '/images/out-there-05.jpg', caption: 'Installation view, Wilfrid Israel Museum, 2024' },
      { src: '/images/out-there-06.jpg', caption: 'Installation view, Wilfrid Israel Museum, 2024' },
      { src: '/images/out-there-07.jpg', caption: 'Installation view, Wilfrid Israel Museum, 2024' },
      { src: '/images/out-there-08.jpg', caption: 'Installation view, Wilfrid Israel Museum, 2024' },
      { src: '/images/out-there-09.jpg', caption: 'Installation view, Wilfrid Israel Museum, 2024' },
      { src: '/images/out-there-10.jpg', caption: 'Out There, 2024' },
      { src: '/images/out-there-11.jpg', caption: 'Out There, 2024' }
    ]
  },
  {
    slug: 'Without-Leaving-Home',
    medium: 'canvas',
    title: 'Without Leaving Home 2024',
    title_he: 'בלי לעזוב את הבית 2024',
    images: [
      { src: '/images/without-leaving-home-01.jpg', caption: 'Green Sofa and Toile, Oil and Fabric on Canvas, 2024' },
      { src: '/images/without-leaving-home-02.jpg', caption: 'Diptych 1, Oil on Canvas, 2024' },
      { src: '/images/without-leaving-home-03.jpg', caption: 'Diptych 2, Oil on Canvas, 2024' },
      { src: '/images/without-leaving-home-04.jpg', caption: 'Diptych 3, Oil on Canvas, 2024' },
      { src: '/images/without-leaving-home-05.jpg', caption: 'Diptych 4, Oil on Canvas, 2024' },
      { src: '/images/without-leaving-home-06.jpg', caption: 'Diptych 7, Oil on Canvas, 2024' },
      { src: '/images/without-leaving-home-07.jpg', caption: 'Couple Through Trees, Oil on Canvas, 2024' },
      { src: '/images/without-leaving-home-08.jpg', caption: 'Landscape (4m), Oil on Canvas, 2024' },
      { src: '/images/without-leaving-home-09.jpg', caption: 'Flower Arrangement 3, Oil on Canvas, 2024' },
      { src: '/images/without-leaving-home-10.jpg', caption: 'Boat at Sea, Landscape (1–4m), Oil on Canvas, 2024' },
      { src: '/images/without-leaving-home-11.jpg', caption: 'In the Forest, Landscape (2–4m), Oil on Canvas, 2024' },
      { src: '/images/without-leaving-home-12.jpg', caption: 'Landscape (4m) 3, Oil on Canvas, 2024' }
    ]
  },
  { slug: 'Glasshouse',
    medium: 'canvas', title: 'Glasshouse 2019', title_he: 'בית הזכוכית 2019', images: [
    { src: '/images/glasshouse-01.jpg', caption: 'Green painting from Berkeley, bed and yellow lemons, Oil, Acrylic and Fabric Collage on Canvas, 165x200 cm, 2019' },
    { src: '/images/glasshouse-02.jpg', caption: 'Piano and chair with white cover, watch and blue butterfly lamp, Oil, Acrylic and Fabric Collage on Canvas, 165x200 cm, 2019' },
    { src: '/images/glasshouse-03.jpg', caption: 'Red sofa, yellow pot and Sara in a white dress, Oil, Acrylic and Fabric Collage on Canvas, 165x200 cm, 2019' },
    { src: '/images/glasshouse-04.jpg', caption: 'Tsar Ferdinand and Galila on their way to the Holy Land, Oil, Acrylic and Fabric Collage on Canvas, 210x155 cm, 2019' },
    { src: '/images/glasshouse-05.jpg', caption: 'Attic in Pan, Galila and Mud River, Oil, Acrylic and Fabric Collage on Canvas, 175x155 cm, 2019' },
    { src: '/images/glasshouse-06.jpg', caption: 'Pan\'s Cottage, Oil, Acrylic and Fabric Collage on Canvas, 200x155 cm, 2019' }
  ] },
  { slug: '2018',
    medium: 'canvas', title: '2018', title_he: '2018', images: [
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
  { slug: 'seven',
    medium: 'video', title: 'Seven 2016', title_he: 'שבע 2016',
    video: 'https://www.youtube.com/embed/0D7DiB0x-kA',
    videoCaption: 'A digital documentation of the installation "Seven" by Ella Amitay Sadovsky',
    images: [
    { src: '/images/seven-01.jpg', caption: 'Seven (Installation View), 2016' },
    { src: '/images/seven-02.jpg', caption: 'Seven (Installation View), 2016' },
    { src: '/images/seven-03.jpg', caption: 'Seven (Installation View), 2016' },
    { src: '/images/seven-04.jpg', caption: 'Seven (Installation View), 2016' },
    { src: '/images/seven-05.jpg', caption: 'Seven (Installation View), 2016' },
    { src: '/images/seven-06.jpg', caption: 'Seven (Installation View), 2016' },
    { src: '/images/seven-07.jpg', caption: 'Seven (Installation View), 2016' },
    { src: '/images/seven-08.jpg', caption: 'Seven (Installation View), 2016' },
    { src: '/images/seven-09.jpg', caption: 'Seven (Installation View), 2016' },
    { src: '/images/seven-10.jpg', caption: 'Seven (Installation View), 2016' }
  ] },
  { slug: 'Principle-of-Uncertainty',
    medium: 'canvas', title: 'Principle of Uncertainty 2015', title_he: 'עקרון אי-הודעה 2015', images: [
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
  { slug: 'spare-parts',
    medium: 'canvas', title: 'Spare Parts 2014-2015', title_he: 'חלקי חילוף 2014-2015', images: [
    { src: '/images/spare-parts-04.jpg', caption: 'Spare Parts, Oil, acrylic and fabric collage on canvas, 2014' },
    { src: '/images/spare-parts-01.jpg', caption: 'Spare Parts, Oil, acrylic and fabric collage on canvas, 2014' },
    { src: '/images/spare-parts-02.jpg', caption: 'Spare Parts, Oil, acrylic and fabric collage on canvas, 2014' },
    { src: '/images/spare-parts-03.jpg', caption: 'Spare Parts, Oil, acrylic and fabric collage on canvas, 2014' },
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
  { slug: 'short-escape',
    medium: 'canvas', title: 'Short Escape 2011-2013', title_he: 'בריחה קצרה 2011-2013', images: [
    { src: '/images/short-escape-01.jpg', caption: 'Short Escape, Oil, acrylic and fabric collage on canvas, 2012' },
    { src: '/images/short-escape-02.jpg', caption: 'Short Escape, Oil, acrylic and fabric collage on canvas, 2012' },
    { src: '/images/short-escape-03.jpg', caption: 'Short Escape, Oil, acrylic and fabric collage on canvas, 2012' }
  ] },
  { slug: 'dreams-decipherer',
    medium: 'canvas', title: 'Dreams Decipherer 2010', title_he: 'מפענח חלומות 2010', images: [
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
  { slug: 'wall-installation',
    medium: 'canvas', title: 'Wall Installation 2009', title_he: 'התקנה על קיר 2009', images: [
    { src: '/images/wall-installation-01.jpg', caption: 'Wall Installation, 2009' },
    { src: '/images/wall-installation-02.jpg', caption: 'Wall Installation, 2009' },
    { src: '/images/wall-installation-03.jpg', caption: 'Wall Installation, 2009' },
    { src: '/images/wall-installation-04.jpg', caption: 'Wall Installation, 2009' },
    { src: '/images/wall-installation-05.jpg', caption: 'Wall Installation, 2009' },
    { src: '/images/wall-installation-06.jpg', caption: 'Wall Installation, 2009' },
    { src: '/images/wall-installation-07.jpg', caption: 'Wall Installation, 2009' },
    { src: '/images/wall-installation-08.jpg', caption: 'Wall Installation, 2009' }
  ] },
  { slug: 'in-between',
    medium: 'canvas', title: 'In Between 2006-2008', title_he: 'בעניין 2006-2008', images: [
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
  { slug: 'shield-of-the-mighty',
    medium: 'paper', title: 'Shield of the Mighty 2011 (paper)', title_he: 'מגן הגיבורים 2011 (נייר)', images: [
    { src: '/images/shield-of-the-mighty-01.jpg', caption: 'Shield of the Mighty, Mixed media on paper, 78x57 cm, 2011' },
    { src: '/images/shield-of-the-mighty-02.jpg', caption: 'Shield of the Mighty, Mixed media on paper, 78x57 cm, 2011' },
    { src: '/images/shield-of-the-mighty-03.jpg', caption: 'Shield of the Mighty, Mixed media on paper, 78x57 cm, 2011' },
    { src: '/images/shield-of-the-mighty-04.jpg', caption: 'Shield of the Mighty, Mixed media on paper, 78x57 cm, 2011' },
    { src: '/images/shield-of-the-mighty-05.jpg', caption: 'Shield of the Mighty, Mixed media on paper, 78x57 cm, 2011' },
    { src: '/images/shield-of-the-mighty-06.jpg', caption: 'Shield of the Mighty, Mixed media on paper, 78x57 cm, 2011' },
    { src: '/images/shield-of-the-mighty-07.jpg', caption: 'Shield of the Mighty, Mixed media on paper, 78x57 cm, 2011' },
    { src: '/images/shield-of-the-mighty-08.jpg', caption: 'Shield of the Mighty, Mixed media on paper, 78x57 cm, 2011' }
  ] },
  { slug: 'quiet-island',
    medium: 'video', title: 'Quiet Island - Performance 2012', title_he: 'אי שקט - מופע 2012',
    video: 'https://player.vimeo.com/video/103327177',
    images: [
    { src: '/images/quiet-island-01.jpg', caption: 'Quiet Island, 2012' },
    { src: '/images/quiet-island-02.jpg', caption: 'Quiet Island, 2012' },
    { src: '/images/quiet-island-03.jpg', caption: 'Quiet Island, 2012' },
    { src: '/images/quiet-island-04.jpg', caption: 'Quiet Island, 2012' },
    { src: '/images/quiet-island-05.jpg', caption: 'Quiet Island, 2012' },
    { src: '/images/quiet-island-06.jpg', caption: 'Quiet Island, 2012' },
    { src: '/images/quiet-island-07.jpg', caption: 'Quiet Island, 2012' },
    { src: '/images/quiet-island-08.jpg', caption: 'Quiet Island, 2012' },
    { src: '/images/quiet-island-09.jpg', caption: 'Quiet Island, 2012' },
    { src: '/images/quiet-island-10.jpg', caption: 'Quiet Island, 2012' },
    { src: '/images/quiet-island-11.jpg', caption: 'Quiet Island, 2012' }
  ] },
  { slug: 'private-investigations',
    medium: 'paper', title: 'Private Investigations 2004', title_he: 'חקירות פרטיות 2004', images: [
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
  { slug: 'charcoal-drawings-2004',
    medium: 'paper', title: 'Charcoal Drawings 2004', title_he: 'רישומי פחם 2004', images: [
    { src: '/images/charcoal-2004-01.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/charcoal-2004-02.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/charcoal-2004-03.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/charcoal-2004-04.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/charcoal-2004-05.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/charcoal-2004-06.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/charcoal-2004-07.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/charcoal-2004-08.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/charcoal-2004-09.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/charcoal-2004-10.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/charcoal-2004-11.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/charcoal-2004-12.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/charcoal-2004-13.jpg', caption: 'Charcoal on paper, 2004' },
    { src: '/images/charcoal-2004-14.jpg', caption: 'Charcoal on paper, 2004' }
  ] },
];

export const etcLinks = [
  { slug: 'news', title: 'News' },
  { slug: 'publications', title: 'Publications' },
  { slug: 'articles', title: 'Articles' },
];
