const db = require('./connection');
const { User, Product, Category,Type } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Top' ,tag:'top'},
    { name: 'Fiction',tag:'fiction' },
    { name: 'Non Fiction',tag:'nonfiction' },
    { name: 'Sale',tag:'sale' }
    
  ]);

  console.log('categories seeded');

  // await Type.deleteMany();

  // const type = await Type.insertMany([
  //   { name: 'soft cover' },
  //   { name: 'harcover' },
    
  // ]);
  await Product.deleteMany();
  // const products = await Product.insertMany([
  //   {
  //     name: 'Wall Frame',
  //     description:
  //       '24 frames set. Design a complete memory space, always keep the goodliness. Make memories lasting a lifetime with multi picture frames. Simple Picture Frames Set Easy-to-Hang.',
  //     image: 'book1.webp',
  //     category: categories[0]._id,
  //     price: 28.99,
  //     quantity: 100,
  //     author:"sunny",
  //     listPrice:5.32,
  //     type:[{
  //       name:"hardcore",
  //       quantity:20
  //     },{
  //       name:"softcore",
  //       quantity:20
  //     }
  //     ],
  //     tags:["sale","top","new"]
  //   },    {
  //     name: 'sunny',
  //     description:
  //       '24 frames set. Design a complete memory space, always keep the goodliness. Make memories lasting a lifetime with multi picture frames. Simple Picture Frames Set Easy-to-Hang.',
  //     image: 'book1.webp',
  //     category: categories[0]._id,
  //     price: 24,
  //     listPrice:5.32,
  //     quantity: 100,
  //     author:"sunny",
  //     type:[{
  //       name:"hardcore",
  //       quantity:20
  //     },{
  //       name:"softcore",
  //       quantity:20
  //     }
  //     ],
  //     tags:["sale","top","new"]
  //   },
  // ]);


  // const products = await Product.insertMany([
  //   {
  //     name: 'Wall Frame',
  //     description:
  //       '24 frames set. Design a complete memory space, always keep the goodliness. Make memories lasting a lifetime with multi picture frames. Simple Picture Frames Set Easy-to-Hang.',
  //     image: 'book1.webp',
  //     category: categories[0]._id,
  //     price: 28.99,
  //     quantity: 100,
  //     author:"sunny",
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     type:"hardcover",
  //     tags:["sale","top","new"]
  //   },
  //   {
  //     name: 'Painting',
  //     description:
  //       'Japanese Mountain Landscape Abstract Wall Art carefully handcrafted to bring unique style into your home. Change the entire feel of any space and make an interesting statement with this abstract canvas print.',
  //     image: 'book2.webp',
  //     category: categories[0]._id,
  //     price: 59.99,
  //     quantity: 100,
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     type:"hardcover",
  //     tags:["sale","top","new"]
  //   },
  //   {
  //     name: 'Bedding Set',
  //     // category: categories[0]._id,
  //     description:
  //       'Thumbedding Peach Bedding Set King Artistic Sweet Soft Girls Duvet Cover Queen Cute Full Twin Single Unique Design Bed Set.',
  //     image: 'book3.webp',
  //     category: categories[0]._id,
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     quantity: 60,
  //     type:"hardcover",
  //     tags:["sale","top","new"]
  //   },
  //   {
  //     name: 'Bed lamp',
  //     category: categories[0]._id,
  //     description:
  //       'The bedside table lamp with a Cylinder fabric shade and black base, easy to use and install. It’s a beautiful decoration to your home,good gift for your friends.Simple design table lamps use a E26 Bulbs.',
  //     image: 'book4.webp',
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     quantity: 50,
  //     type:"hardcover",
  //     tags:["sale","top","new"]
  //   },
  //   {
  //     name: 'Night Table',
  //     category: categories[0]._id,
  //     description:
  //       'Decorate your mid-century living room with Harper side table. The space-saving design and neutral colors will blend well with any furniture. Easy glide two-tier drawers provide storage for gadget',
  //     image: 'book5.webp',
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     quantity: 50,
  //     type:"hardcover",
  //     tags:["top","new"]
  //   },
  //   {
  //     name: 'Floor Lamp',
  //     category: categories[1]._id,
  //     description:
  //       'Floor lamp with 3 shelves for storage/display. Linen shade casts soft. Warm glow. Assembly required. Lamp measures: l:10.2" X w:10.2" X h:63.3"',
  //     image: 'book1.webp',
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     quantity: 39,
  //     type:"hardcover",
  //     tags:["fiction","top","new"]
  //   },
  //   {
  //     name: 'Persian Rug',
  //     category: categories[1]._id,
  //     description:
  //       'Silk rug has been considered as a luxurious rug.Persian silk rugs are the most intricate, and often most valuable, of all hand-knotted rugs.',
  //     image: 'book2.webp',
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     quantity: 30,
  //     type:"hardcover",
  //     tags:["fiction","top","new"]
  //   },
  //   {
  //     name: 'Ottoman',
  //     category: categories[1]._id,
  //     description:
  //       'Add a dash of glamour to any space with this luxuriously soft velvet ottoman. The contemporary, minimal design allows it to be functional in small spaces or be used as functional seating in a dressing room or for a makeup vanity. ',
  //     image: 'book3.webp',
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     quantity: 56,
  //     type:"hardcover",
  //     tags:["fiction","top","new"]
  //   },
  //   {
  //     name: 'Candles',
  //     category: categories[2]._id,
  //     description: 'Metal wire pillar candle holder set includes 2 glass votive candle holders with L and S size. Set of 2 candle stands for indoor and outdoor. Adorn your dining table, coffee tabletop, mantel, window, shelves or kitchen with these cute Christmas candlestick holders.',
  //     image: 'book4.webp',
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     quantity: 200,
  //     type:"hardcover",
  //     tags:["fiction","top","new"]
  //   },
  //   {
  //     name: 'Artificial Plant',
  //     category: categories[2]._id,
  //     description:
  //       '32 large palm leaves adorn this masterpiece. Spruce up any space with lovely palm. Sits in a delightful wicker basket; Pot Size 10w x 9h ; dimensions - 142.24 H x 76.2 D x 81.28 W. Product is 4 - 4.5ft tall when measured from floor to fully extended top leaf; re-shape when removed from box',
  //     image: 'book5.webp',
  //     quantity: 89,
  //     type:"hardcover",
  //     tags:["nonfiction","top","new"]
  //   },
  //   {
  //     name: 'Dining Chairs',
  //     category: categories[2]._id,
  //     description:
  //       'Set of 2 cushioned dining chairs with button tufted upholstery',
  //     image: 'book1.webp',
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     quantity: 58,
  //     type:"hardcover",
  //     tags:["nonfiction","top","new"]
  //   },
  //   {
  //     name: 'Wall Decal',
  //     category: categories[2]._id,
  //     description:
  //       'We have up to 18 colors in MATTE finish to choose. If you have any specicial request please feel free to contact us. Generally we offer 2-4 sizes to choose,and please be aware the size is measured by "INCH".',
  //     image: 'book2.webp',
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     quantity: 23,
  //     type:"hardcover",
  //     tags:["nonfiction","top","new"]
  //   },
  //   {
  //     name: 'Cutlery Set',
  //     category: categories[2]._id,
  //     description:
  //       'Package Inclueded: This flatware set includes dinner forks x 6, teaspoons x 6,dinnie spoons x 6, and dinnie knives x 6, Dishwasher Safe.',
  //     image: 'book3.webp',
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     quantity: 90,
  //     type:"hardcover",
  //     tags:["nonfiction","top","new"]
  //   },
  //   {
  //     name: 'Dinner set',
  //     category: categories[2]._id,
  //     description:
  //       '18-piece dinnerware collection with settings for 6 people. Includes 6 each: 11 inch dinner plates, 8 inch salad plates, and 7 inch bowl. Made of durable stoneware for reliable everyday use. Dishwasher, freezer, and microwave-safe; can withstand heat up to 572 degrees',
  //     image: 'book4.webp',
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     quantity: 87,
  //     type:"hardcover",
  //     tags:["nonfiction","top","new"]
  
  //   },
  //   {
  //     name: 'Table Runner',
  //     category: categories[3]._id,
  //     description:
  //       'If you are looking for an old-fashioned, elaborate and elegant look table runner, this might be just what you are looking for!!! It is a lovely GOLD color, with burgundy embroidered centerpieces. This is machine made lace, with cutouts and is delicate and truly beautiful. This runner washes well. It does not shrink and its stitching holds in place. In fact, washing adds a bit of grace to it',
  //     image: 'book5.webp',
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     quantity: 120,
  //     type:"hardcover",
  //     tags:["fiction","top","new"]
  
  //   },
  //   {
  //     name: 'Serving cart',
  //     category: categories[3]._id,
  //     description:
  //       'Nothing says sophistication and Class like a great bar cart to serve drinks and snacks with, and the one you choose to place in your home should reflect your personality and style. We hear you. Entertain in style at your next gathering with our Firs Time & Co. Francesca bar cart. This glamorous Gold wheeled cart is graced with two natural wood shelves, racks that can hold up to 6 wine glasses, 5 compartments for wine bottle storage, and room for ALL the essentials.',
  //     image: 'book1.webp',
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     quantity: 90,
  //     type:"hardcover",
  //     tags:["nonfiction","top","new"]
  //   },
  //   {
  //     name: 'Chopping Board',
  //     category: categories[3]._id,
  //     description:
  //       'Every kitchen can use a set of 4 wood cutting boards with varied sizing to keep things tidy at all times, whether it’s chopping a small scallion or a full bird with running liquid. This bamboo cutting board set is a sturdy one. They’re natural and free of formaldehyde or coloring. Another bamboo benefit: the large and small chopping boards won’t get saturated from wet foods or catch stains quickly.',
  //     image: 'book2.webp',
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     quantity: 77,
  //     type:"hardcover",
  //     tags:["nonfiction","top","new"]
  
  //   },
  //   {
  //     name: 'Knife set',
  //     category: categories[3]._id,
  //     description:
  //       'High-quality Knife Set - Razor-sharp blades are made of advanced 3CR13 stainless steel for top efficiency and durability. Full tangs and extra-wide forged bolsters ensure maximum safety, stability and control. Precision-ground blades taper to create an extremely sharp, fine cutting edge to help you chop, dice and slice your favorite ingredients quickly and efficiently',
  //     image: 'book2.webp',
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     type:"hardcover",
  //     tags:["fiction","top","new"]
  
  //   },
  //   {
  //     name: 'Kitchen Towels',
  //     category: categories[3]._id,
  //     description:
  //       'Pack of 12 and Size:6.1inchesx10.43inches.Material: Coral Velvet.Package:12 pack Microfiber Cleaning Cloths.Color:Pink,Green,Purple,Gray. Provides you an ample flour sack towels for all your household needs in daily life.',
  //     image: 'book3.webp',
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     quantity: 29,
  //     type:"hardcover",
  //     tags:["nonfiction","top","new"]
  //   },
  //   {
  //     name: 'Kitchen Scale',
  //     category: categories[3]._id,
  //     description:
  //       'Portable food scale equipped with 4 high precision sensors, give you accurate weight all the time; 5kg/11lb capacity, 0.04oz/1g division, Perfect for baking, cooking, and postage.',
  //     image: 'book4.webp',
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     quantity: 150,
  //     type:"hardcover",
  //     tags:["fiction","top","new"]
  //   },
  //   {
  //     name: 'Toilet Papers',
  //     category: categories[3]._id,
  //     description:
  //       'Your employees and guests will notice that you care enough to provide the very best like stocking your washroom with Cottonelle Ultra Soft Bathroom Tissue. Each pure white sheet is cushioned for extra comfort, care and cleanliness. Plus, this toilet paper is FSC-certified, so you will know you are doing something smart for the environment and for your business. You will want to buy bulk toilet paper, so you are always prepared for your washroom traffic. Offering Cottonelle toilet paper in your business lets people know you care enough to provide the very best.',
  //     image: 'book5.webp',
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     quantity: 100,
  //     type:"hardcover",
  //     tags:["nonfiction","top","new"]
  //   },
  //   {
  //     name: 'Diffuser Scents',
  //     category: categories[3]._id,
  //     description:
  //       'The fragrance of lavender makes you feel like you are in the French lavender field. The sweetness of the rose makes you smell the beauty of each day. The quietness of the herbs makes you enjoy the time quietly. Every reed diffuser is a journey full of novelty.',
  //     image: 'book1.webp',
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     quantity: 90,
  //     type:"hardcover",
  //     tags:["fiction","top","new"]
  //   },
  //   {
  //     name: 'Perfumed Handwash',
  //     category: categories[3]._id,
  //     description:
  //       'We’re Love Beauty and Planet. We believe that #smallactsoflove can make the planet a little more beautiful, every single day. Gorgeous, game changing beauty for everyone is our thing, and this nature inspired moisturizing hand soap is no exception. We’re committed to sharing #smallactsoflove to make the world more beautiful, which is why this expertly perfumed liquid hand soap is infused with ethically sourced extract and oils. The liquid hand wash bottle is 100% recyclable and made from recycled plastic. Clean hands can be soft hands, too.',
  //     image: 'book2.webp',
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     quantity: 80,
  //     type:"hardcover",
  //     tags:["nonfiction","top","new"]
  //   },
  //   {
  //     name: 'Bathroom Mat',
  //     category: categories[3]._id,
  //     description:
  //       'Color&Geometry bath mat features polyester fiber fabric, a luxurious, fluffy and soft pile that soothes and relaxes tired feet as you walk out of the bathtub and shields toes from the cold floor. Stitched with reinforced seams for added strength. The upgraded microfiber surface ensures exceptional ventilation, softness and comfort with soft bristles that do not wear off easily.',
  //     image: 'book3.webp',
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     quantity: 60,
  //     type:"hardcover",
  //     tags:["fiction","top","new"]
  //   },
  //   {
  //     name: 'Backyard Grill',
  //     category: categories[1]._id,
  //     description:
  //       'Made of cast iron, high-temperature enamel.High temperature resistance，arrange charcoal on the fuel grate for either direct or indirect grilling. This portable charcoal grill is easy to assemble step by step. The grill stands on stable legs and can be easily moved thanks to the rollers. Heat control through ventilation- The rust-resistant, adjustable vent flap allows easy heat control for the grill. The round enameled coating bowl and lid store heat well so that they get even heat.',
  //     image: 'book4.webp',
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     quantity: 50,
  //     type:"hardcover",
  //     tags:["nonfiction","top","new"]
  //   },
  //   {
  //     name: 'Gardening tools',
  //     category: categories[1]._id,
  //     description:
  //       'Relieve stress, enjoy the bright sunshine, and breathe in the fresh air while you spend time tending to your garden with our specially designed and curated set of garden tools.',
  //     image: 'book5.webp',
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     quantity: 200,
  //     type:"hardcover",
  //     tags:["fiction","top","new"]
  //   },
  //   {
  //     name: 'Garden Hose',
  //     category: categories[2]._id,
  //     description:
  //       'Retractable and expandable, our garden hose can expand quickly to 3X its original length when the water is on to make your tasks more efficient. When the water pressure is off, it automatically contracts for easy storage.',
  //     image: 'book1.webp',
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     quantity: 100,
  //     type:"hardcover",
  //     tags:["nonfiction","top","new"]
  //   },
  //   {
  //     name: 'Backyard Swing',
  //     category: categories[1]._id,
  //     description:
  //       ' Steel 3-Seater porch swing with canopy provides perfect outdoor lounging experience. Suitable as an outdoor swing chair, garden swing, backyard swing, lawn swing, patio swing, deck swing, or a yard swing.  Featured adjustable weather-resistant canopy, the porch swing with stand blocks most harmful UV rays and sunlight for optimal comfort',
  //     image: 'book2.webp',
  //     listPrice:20.99,
  //     beforePrice:19.99,
  //     afterPrice:18.99,
  //     quantity: 60,
  //     type:"hardcover",
  //     tags:["fiction","top","new"]
  //   }
  // ]);
  const products = await Product.insertMany([
    {
      name: 'Hard to Love',
      image: 'hard-to-love.png',
      quantity: 2,
      author:"Briallen Hopper",
      listPrice:30.99,
      beforePrice:27.99,
      afterPrice:21.99,
      type:"hardcover",
      tags:["sale","nonfiction"]
    },
    {
      name: 'The Labyrinth of the Spirits',
      image: 'the-labyrintsh-of-the-spirits.jpeg',
      quantity: 1,
      author:"Carlos Ruiz Zafon",
      listPrice:30.95,
      beforePrice:29.99,
      afterPrice:24.99,
      type:"hardcover",
      tags:["top","fiction"]
    },
    {
      name: 'Why Honor Matters',
      image: 'why-honor-matters.jpeg',
      quantity: 2,
      author:"Tamler Sommers",
      listPrice:35.50,
      beforePrice:27.99,
      afterPrice:21.99,
      type:"hardcover",
      tags:["sale"]
    },
    {
      name: 'Perfect',
      image: 'perfect.jpeg',
      quantity: 3,
      author:"Cecelia Ahern",
      listPrice:26.99,
      beforePrice:25.50,
      afterPrice:23.99,
      type:"hardcover",
      tags:["top","fiction"]
    },
    {
      name: 'Vanguard',
      image: 'the-genesis-fleet-vanguard.jpeg',
      quantity: 1,
      author:"Jack Campbell",
      listPrice:26.99,
      beforePrice:25.50,
      afterPrice:23.99,
      type:"hardcover",
      tags:["top","fiction"]
    },
    {
      name: 'The Deer Camp',
      image: 'the-deer-camp.jpeg',
      quantity: 2,
      author:"Dean Kuipers",
      listPrice:32.99,
      beforePrice:25.50,
      afterPrice:23.99,
      type:"hardcover",
      tags:["top"]
    },
    {
      name: 'El Paso',
      image: 'el-paso.jpeg',
      quantity: 1,
      author:"Winston Groom",
      listPrice:25.99,
      beforePrice:21.50,
      afterPrice:19.99,
      type:"hardcover",
      tags:["top"]
    },
    {
      name: 'The Kingdom Of Speech',
      image: 'the-kingdom-of-speech.jpeg',
      quantity: 9,
      author:"Tom Wolfe",
      listPrice:31.50,
      beforePrice:27.99,
      afterPrice:24.99,
      type:"hardcover",
      tags:["sale"]
    },
    {
      name: 'Tropic of Squalor',
      image: 'tropic-of-squalor.jpeg',
      quantity: 1,
      author:"Marry Karr",
      listPrice:22.99,
      beforePrice:21.99,
      afterPrice:19.99,
      type:"hardcover",
      tags:["sale"]
    },
    {
      name: 'Creating Freedom',
      image: 'creating-freedom.png',
      quantity: 1,
      author:"Raoul Martinez",
      listPrice:35.99,
      beforePrice:29.99,
      afterPrice:24.99,
      type:"hardcover",
      tags:["sale"]
    },
    {
      name: 'The Future Is Female',
      image: 'the-future-is-female.jpeg',
      quantity: 1,
      author:"A Library of America Special Publication",
      listPrice:39.99,
      beforePrice:32.99,
      afterPrice:31.99,
      type:"hardcover",
      tags:["top"]
    },
  
    {
      name: 'Springfield Confidential',
      image: 'springfield-confidential.jpeg',
      quantity: 1,
      author:"Mike Reiss,Mathew Klickstein",
      listPrice:39.99,
      beforePrice:29.99,
      afterPrice:27.99,
      type:"hardcover",
      tags:["sale"]
    },
    {
      name: 'What Every Girl Should Know',
      image: 'what-every-girl-should-know.jpeg',
      quantity: 1,
      author:"J. Albert Mann",
      listPrice:25.99,
      beforePrice:22.99,
      afterPrice:19.99,
      type:"hardcover",
      tags:["sale"]
    },
    {
      name: 'Earthly Meditations',
      image: 'earthly-meditations.jpeg',
      quantity: 1,
      author:"Robert Wrigley",
      listPrice:25.00,
      beforePrice:22.99,
      afterPrice:19.99,
      type:"hardcover",
      tags:["sale"]
    },
    {
      name: 'Win Or Die',
      image: 'win-or-die.jpeg',
      quantity: 1,
      author:"Bruce Craven",
      listPrice:37.99,
      beforePrice:35.99,
      afterPrice:29.99,
      type:"hardcover",
      tags:["sale"]
    },
    {
      name: 'Let Dogs Be Dogs',
      image: 'let-dogs-be-dogs.jpeg',
      quantity: 1,
      author:"Monks of New Skete, Marc Goldberg ",
      listPrice:37.99,
      beforePrice:35.99,
      afterPrice:29.99,
      type:"hardcover",
      tags:["sale"]
    },
    {
      name: 'Zen Your Work',
      image: 'zen-your-work.jpeg',
      quantity: 2,
      author:"Karlyn Borysenko",
      listPrice:22.00,
      beforePrice:21.99,
      afterPrice:19.99,
      type:"softcover",
      tags:["sale"]
    },
    {
      name: 'The Empire Must Die',
      image: 'the-empire-must-die.jpeg',
      quantity: 1,
      author:"Mikhail Zygar",
      listPrice:39.00,
      beforePrice:35.99,
      afterPrice:31.99,
      type:"hardcover",
      tags:["sale"]
    },
    {
      name: 'Walking Backwards',
      image: 'walking-backwards.jpeg',
      quantity: 1,
      author:"John Koethe",
      listPrice:25.00,
      beforePrice:21.99,
      afterPrice:19.99,
      type:"hardcover",
      tags:["sale"]
    },
    {
      name: 'The Jungle Grows Back',
      image: 'the-jungle-grows-back.png',
      quantity: 1,
      author:" Robert Kagan",
      listPrice:25.00,
      beforePrice:21.99,
      afterPrice:19.00,
      type:"hardcover",
      tags:["sale"]
    },
    {
      name: 'The Outcast',
      image: 'the-outcast.jpeg',
      quantity: 2,
      author:"Taran Matharu",
      listPrice:24.99,
      beforePrice:21.99,
      afterPrice:19.99,
      type:"hardcover",
      tags:["new"]
    },
    {
      name: 'Creating Things That Matter',
      image: 'creating-things-that-matter.jpeg',
      quantity: 1,
      author:"David Edwards",
      listPrice:39.00,
      beforePrice:35.99,
      afterPrice:29.99,
      type:"hardcover",
      tags:["new"]
    },
    {
      name: 'Would Everybody Please Stop?',
      image: 'whould-everybody-please-stop.jpeg',
      quantity: 2,
      author:"Jenny Allen",
      listPrice:19.50,
      beforePrice:18.50,
      afterPrice:17.99,
      type:"softcover",
      tags:["new"]
    },
    {
      name: 'The Road to Grantchester',
      image: 'the-road-to-grantchester.jpeg',
      quantity: 1,
      author:"James Runcie",
      listPrice:39.99,
      beforePrice:35.50,
      afterPrice:32.99,
      type:"hardcover",
      tags:["new"]
    },
    {
      name: 'The Just City',
      image: 'the-just-city.jpeg',
      quantity: 1,
      author:"Jo Walton",
      listPrice:37.99,
      beforePrice:35.50,
      afterPrice:33.99,
      type:"hardcover",
      tags:["new"]
    },
    {
      name: 'Captain Paul Watson',
      image: 'captain-paul-watson.jpeg',
      quantity: 1,
      author:"Lamya Essemlali, Paul Watson",
      listPrice:35.99,
      beforePrice:35.50,
      afterPrice:33.99,
      type:"softcover",
      tags:["new"]
    },
    {
      name: 'The Cadaver King and the Country Dentist',
      image: 'the-cadaver-king.jpeg',
      quantity: 1,
      author:"Radley Balko, Tucker Carrington",
      listPrice:36.50,
      beforePrice:35.50,
      afterPrice:33.99,
      type:"hardcover",
      tags:["new"]
    },
    {
      name: 'The Sum of All Shadows',
      image: 'the-sum-of-all-shadows.jpeg',
      quantity: 1,
      author:"Radley Balko, Tucker Carrington",
      listPrice:38.50,
      beforePrice:35.50,
      afterPrice:33.99,
      type:"hardcover",
      tags:["new"]
    },
    {
      name: 'A Perilous Undertaking',
      image: 'a-perilous-undertaking.jpeg',
      quantity: 1,
      author:"Deanna Raybourn",
      listPrice:26.50,
      beforePrice:23.50,
      afterPrice:19.99,
      type:"hardcover",
      tags:["new"]
    },
    {
      name: 'Opening Belle',
      image: 'opening-belle.jpeg',
      quantity: 3,
      author:"Maureen Sherry",
      listPrice:34.00,
      beforePrice:32.50,
      afterPrice:29.99,
      type:"hardcover",
      tags:["new"]
    },
    {
      name: 'Dark Sacred Night',
      image: 'dark-sacred-night.jpeg',
      quantity: 2,
      author:"Michael Connelly",
      listPrice:37.30,
      beforePrice:32.50,
      afterPrice:29.99,
      type:"hardcover",
      tags:["new"]
    },
    {
      name: 'American Sanctuary',
      image: 'american-sanctuary.jpeg',
      quantity: 2,
      author:"A. Roger Ekirch",
      listPrice:38.60,
      beforePrice:32.50,
      afterPrice:29.99,
      type:"hardcover",
      tags:["new"]
    },
    {
      name: 'The Line Between',
      image: 'the-line-between.jpeg',
      quantity: 1,
      author:"Tosca Lee",
      listPrice:35.00,
      beforePrice:32.50,
      afterPrice:29.99,
      type:"hardcover",
      tags:["new"]
    },
    {
      name: 'Kingdom of Ash',
      image: 'kingdom-of-ash.jpeg',
      quantity: 3,
      author:"Sarah J. Maas",
      listPrice:35.00,
      beforePrice:32.50,
      afterPrice:25.99,
      type:"hardcover",
      tags:["new","finction","top"]
    },
    {
      name: 'In the Shadow of the Buddha',
      image: 'the-shadow-of-budha.jpeg',
      quantity: 1,
      author:"Matteo Pistono",
      listPrice:23.00,
      beforePrice:21.50,
      afterPrice:19.99,
      type:"softcover",
      tags:["top"]
    },
    {
      name: 'The Areas of My Expertise',
      image: 'the-areas-of-expertise.jpeg',
      quantity: 1,
      author:"John Hodgman",
      listPrice:29.90,
      beforePrice:25.50,
      afterPrice:23.99,
      type:"softcover",
      tags:["sale"]
    },
    {
      name: 'Truancy',
      image: 'truancy.jpeg',
      quantity: 1,
      author:" Isamu Fukui",
      listPrice:39.99,
      beforePrice:32.99,
      afterPrice:31.99,
      type:"softcover",
      tags:["top"]
    },    {
      name: 'Holding on Tighter',
      image: 'holding-on-tighter.jpeg',
      quantity: 1,
      author:"Shayla Black",
      listPrice:22.00,
      beforePrice:21.99,
      afterPrice:19.99,
      type:"softcover",
      tags:["top","fiction"]
    },
    {
      name: 'Notes from the Cévennes',
      image: 'notes-from-the-cavennes.jpeg',
      quantity: 2,
      author:" Adam Thorpe",
      listPrice:26.00,
      beforePrice:21.99,
      afterPrice:19.99,
      type:"hardcover",
      tags:["new","top","fiction"]
    },
    {
      name: 'Guide to Intellectual Property',
      image: 'intellectual-property.jpeg',
      quantity: 1,
      author:"The Economist, Stephen Johnson",
      listPrice:23.99,
      beforePrice:21.99,
      afterPrice:19.99,
      type:"softcover",
      tags:["new","top"]
    },
    {
      name: 'Luncheon of the Boating Party',
      image: 'luncheon-of-boating-party.jpeg',
      quantity: 1,
      author:"Susan Vreeland",
      listPrice:24.00,
      beforePrice:21.99,
      afterPrice:19.99,
      type:"softcover",
      tags:["new"]
    },
    {
      name: 'Getting Personal',
      image: 'phillip-lopate.jpeg',
      quantity: 1,
      author:"Phillip Lopate",
      listPrice:24.50,
      beforePrice:21.99,
      afterPrice:19.99,
      type:"softcover",
      tags:["new"]
    },
    {
      name: 'The Year They Fell',
      image: 'the-year-they-fell.jpeg',
      quantity: 1,
      author:"Phillip Lopate",
      listPrice:24.50,
      beforePrice:21.99,
      afterPrice:19.99,
      type:"hardcover",
      tags:["new"]
    },
    {
      name: 'Raging Star',
      image: 'raging-star.jpeg',
      quantity: 3,
      author:"Moira Young",
      listPrice:24.50,
      beforePrice:21.99,
      afterPrice:19.99,
      type:"hardcover",
      tags:["new"]
    },
    {
      name: 'Inside the Cell',
      image: 'inside-the-cell.jpeg',
      quantity: 2,
      author:"Erin E Murphy",
      listPrice:34.99,
      beforePrice:32.99,
      afterPrice:29.99,
      type:"hardcover",
      tags:["new"]
    },
    {
      name: 'Windfall',
      image: 'windfall.jpeg',
      quantity: 1,
      author:"Mckenzie Funk",
      listPrice:20.00,
      beforePrice:19.99,
      afterPrice:18.99,
      type:"softcover",
      tags:["sale"]
    },
    {
      name: 'The Boy and Girl Who Broke the World',
      image: 'the-boy-and-the-girl.jpeg',
      quantity: 1,
      author:"Amy Reed",
      listPrice:24.99,
      beforePrice:23.99,
      afterPrice:19.99,
      type:"hardcover",
      tags:["sale"]
    },
    {
      name: 'The Art of the Tea Towel',
      image: 'the-art-of-the-tea-towel.jpeg',
      quantity: 1,
      author:"Marnie Fogg",
      listPrice:30.95,
      beforePrice:29.99,
      afterPrice:24.99,
      type:"hardcover",
      tags:["top"]
    },
    {
      name: 'The Crisis of the Middle-class Constitution',
      image: 'the-crisis-of-the-middle-class-constitution.jpeg',
      quantity: 1,
      author:"Marnie Fogg",
      listPrice:30.95,
      beforePrice:29.99,
      afterPrice:24.99,
      type:"hardcover",
      tags:["new"]
    },
    {
      name: 'Because You Love to Hate Me',
      image: 'because-you-love-to-hate-me.jpeg',
      quantity: 1,
      author:"Amerie",
      listPrice:30.95,
      beforePrice:29.99,
      afterPrice:24.99,
      type:"hardcover",
      tags:["new","fiction"]
    },
    {
      name: 'Teardrop',
      image: 'teardrop.jpeg',
      quantity: 2,
      author:"Lauren Kate",
      listPrice:21.00,
      beforePrice:20.99,
      afterPrice:19.99,
      type:"hardcover",
      tags:["new","fiction"]
    },
    {
      name: 'Ghost of the Innocent Man',
      image: 'ghost-of-the-innocent-man.jpeg',
      quantity: 1,
      author:"Benjamin Rachlin",
      listPrice:23.49,
      beforePrice:22.99,
      afterPrice:19.99,
      type:"softcover",
      tags:["new","sale"]
    },
    {
      name: 'What My Mother and I Dont Talk About',
      image: 'what-my-mother-and-i-talk-about.jpeg',
      quantity: 1,
      author:"Fifteen Writers Break the Silence",
      listPrice:35.00,
      beforePrice:33.99,
      afterPrice:30.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Dear Friend, from My Life I Write to You in Your Life',
      image: 'dear-friend-from-my-life.jpeg',
      quantity: 3,
      author:"Yiyun Li ",
      listPrice:35.00,
      beforePrice:33.99,
      afterPrice:22.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'What Doesnt Kill You Makes You Blacker',
      image: 'what-doesnt-kill-you-makes.jpeg',
      quantity: 1,
      author:"Damon Young",
      listPrice:36.00,
      beforePrice:33.99,
      afterPrice:22.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'The Wasp That Brainwashed the Caterpillar',
      image: 'the-wasp-the-brainwashed-the-caterpillar.jpeg',
      quantity: 2,
      author:"Matt Simon",
      listPrice:27.00,
      beforePrice:24.99,
      afterPrice:19.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Starlight Tour',
      image: 'starlight-tour.jpeg',
      quantity: 3,
      author:"Susanne Reber, Robert Renaud",
      listPrice:22.00,
      beforePrice:21.99,
      afterPrice:19.99,
      type:"softcover",
      tags:["new","sale"]
    },
    {
      name: 'Batman: The Killing Joke',
      image: 'the-killing-joke.jpeg',
      quantity: 2,
      author:"Christa Faust, Gary Phillips",
      listPrice:22.00,
      beforePrice:21.99,
      afterPrice:19.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Fake It Till You Break It',
      image: 'fake-it-till-you-break-it.jpeg',
      quantity: 2,
      author:"Jenn P. Nguyen ",
      listPrice:23.50,
      beforePrice:21.99,
      afterPrice:19.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Heres to Us',
      image: 'here-to-us.jpeg',
      quantity: 2,
      author:"Elin Hilderbrand",
      listPrice:22.49,
      beforePrice:21.99,
      afterPrice:19.99,
      type:"softcover",
      tags:["new","sale"]
    },
    {
      name: 'The Silent Companions',
      image: 'the-silent-companions.jpeg',
      quantity: 2,
      author:"Laura Purcell",
      listPrice:22.00,
      beforePrice:21.99,
      afterPrice:19.99,
      type:"softcover",
      tags:["new","sale"]
    },
    {
      name: 'The Impossible Will Take a Little While',
      image: 'the-impossible-will-take-a-little-while.jpeg',
      quantity: 1,
      author:"Paul Rogat Loeb",
      listPrice:25.99,
      beforePrice:21.99,
      afterPrice:19.99,
      type:"softcover",
      tags:["new","sale"]
    },
    {
      name: 'The Law (in Plain English) for Writers (Fifth Edition)',
      image: 'the-law-for-writers.jpeg',
      quantity: 1,
      author:" Leonard D. DuBoff, Sarah J. Tugman",
      listPrice:25.99,
      beforePrice:21.99,
      afterPrice:19.99,
      type:"softcover",
      tags:["new","sale"]
    },
    {
      name: 'Memphis Rent Party',
      image: 'memphis-rent-party.jpeg',
      quantity: 2,
      author:" Robert Gordon",
      listPrice:25.99,
      beforePrice:21.99,
      afterPrice:19.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Figures in a Landscape',
      image: 'figures-in-a-landscape.png',
      quantity: 1,
      author:"Paul Theroux",
      listPrice:34.99,
      beforePrice:30.99,
      afterPrice:19.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Bringing Down the Colonel',
      image: 'bringing-down-the-colonel.jpeg',
      quantity: 1,
      author:"Patricia Miller",
      listPrice:36.50,
      beforePrice:30.99,
      afterPrice:29.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Black Klansman',
      image: 'black-klansman.png',
      quantity: 1,
      author:"Patricia Miller",
      listPrice:33.99,
      beforePrice:30.99,
      afterPrice:29.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Fierce',
      image: 'fierce-jo-weldon.jpeg',
      quantity: 1,
      author:"Jo Weldon",
      listPrice:31.00,
      beforePrice:30.99,
      afterPrice:29.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Black Ink',
      image: 'black-inc.jpeg',
      quantity: 1,
      author:"Stephanie Oliver",
      listPrice:35.00,
      beforePrice:30.99,
      afterPrice:29.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'My Life with Bob',
      image: 'my-life-with-bob.jpeg',
      quantity: 1,
      author:"Pamela Paul",
      listPrice:21.00,
      beforePrice:20.99,
      afterPrice:19.99,
      type:"softcover",
      tags:["new","sale"]
    },
    {
      name: 'The Summoners Handbook',
      image: 'the-summoners-handbook.jpeg',
      quantity: 1,
      author:"Taran Matharu",
      listPrice:24.99,
      beforePrice:23.99,
      afterPrice:20.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Fashion Climbing',
      image: 'fashion-climbing.jpeg',
      quantity: 1,
      author:"Taran Matharu",
      listPrice:24.99,
      beforePrice:23.99,
      afterPrice:20.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Cracking the Aging Code',
      image: 'cracking-the-aging-code.png',
      quantity: 10,
      author:"Josh Mitteldorf, Dorion Sagan",
      listPrice:38.99,
      beforePrice:35.99,
      afterPrice:34.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'An Iron Wind',
      image: 'an-iron-wind.jpeg',
      quantity: 10,
      author:"Peter Fritzsche ",
      listPrice:38.99,
      beforePrice:35.99,
      afterPrice:34.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Best. Movie. Year. Ever.',
      image: 'best-movie-year.jpeg',
      quantity: 1,
      author:"Brian Raftery",
      listPrice:38.99,
      beforePrice:35.99,
      afterPrice:34.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'The Harvard Medical School Guide to Yoga',
      image: 'guide-to-yoga.jpeg',
      quantity: 1,
      author:"Marlynn Wei, James E. Groves",
      listPrice:25.99,
      beforePrice:24.99,
      afterPrice:22.99,
      type:"softcover",
      tags:["new","sale"]
    },
    {
      name: 'A Year of Living Mindfully',
      image: 'a-year-of-living-mindfully.jpeg',
      quantity: 1,
      author:" Anna Black",
      listPrice:25.99,
      beforePrice:24.99,
      afterPrice:22.99,
      type:"softcover",
      tags:["new","sale"]
    },
    {
      name: 'The Breast Cancer Survival Manual, Sixth Edition',
      image: 'the-brest-cancer-survival.jpeg',
      quantity: 3,
      author:" Anna Black",
      listPrice:23.99,
      beforePrice:22.99,
      afterPrice:21.99,
      type:"softcover",
      tags:["new","sale"]
    },
    {
      name: 'A Tiger Among Us',
      image: 'a-tiger-among-us.jpeg',
      quantity: 1,
      author:"Bennie G. Adkins, Katie Lamar Jackson ",
      listPrice:24.99,
      beforePrice:22.99,
      afterPrice:21.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Dawn of the Code War',
      image: 'dawn-of-the-code-war.png',
      quantity: 1,
      author:"John P. Carlin, Garrett M. Graff",
      listPrice:39.00,
      beforePrice:35.99,
      afterPrice:32.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Set Your Voice Free',
      image: 'set-your-voice-free.jpeg',
      quantity: 1,
      author:"Donna Frazier, Roger Love",
      listPrice:39.00,
      beforePrice:35.99,
      afterPrice:32.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'The Fair Chase',
      image: 'the-fair-chase.jpeg',
      quantity: 1,
      author:"Philip Dray",
      listPrice:42.00,
      beforePrice:39.99,
      afterPrice:35.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'All Our Waves Are Water',
      image: 'all-our-waves-are-water.jpeg',
      quantity: 2,
      author:"Jaimal Yogis",
      listPrice:25.40,
      beforePrice:22.99,
      afterPrice:21.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'The Empire and the Five Kings',
      image: 'the-empire-and-the-five-keys.jpeg',
      quantity: 2,
      author:"Jaimal Yogis",
      listPrice:36.50,
      beforePrice:35.99,
      afterPrice:34.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'The View from Lazy Point',
      image: 'lazy-point.jpeg',
      quantity: 1,
      author:"Carl Safina",
      listPrice:29.00,
      beforePrice:25.99,
      afterPrice:24.99,
      type:"softcover",
      tags:["new","sale"]
    },
    {
      name: 'Happily Ever Esther',
      image: 'happily-ever-esther.jpeg',
      quantity: 1,
      author:"Steve Jenkins, Derek Walter",
      listPrice:22.49,
      beforePrice:21.99,
      afterPrice:20.99,
      type:"softcover",
      tags:["new","sale"]
    },
    {
      name: 'Raising Happy Rabbits',
      image: 'rasing-happy-rabbits.jpeg',
      quantity: 1,
      author:"May Brittany, Ausley Penny",
      listPrice:40.49,
      beforePrice:35.99,
      afterPrice:35.99,
      type:"softcover",
      tags:["new","sale"]
    },
    {
      name: 'Red Hot and Holy',
      image: 'sera-beak.jpeg',
      quantity: 1,
      author:" Sera Beak",
      listPrice:35.49,
      beforePrice:35.99,
      afterPrice:32.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Power Trip',
      image: 'power-trip.jpeg',
      quantity: 1,
      author:"Michael E. Webber",
      listPrice:39.00,
      beforePrice:35.99,
      afterPrice:32.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'A Fearless Heart',
      image: 'a-fearless-heart.jpeg',
      quantity: 1,
      author:"Thupten Jinpa",
      listPrice:22.00,
      beforePrice:21.99,
      afterPrice:20.99,
      type:"softcover",
      tags:["new","sale"]
    },
    {
      name: 'The End of Your World',
      image: 'the-end-of-your-world.jpeg',
      quantity: 2,
      author:"Adyashanti",
      listPrice:22.00,
      beforePrice:21.99,
      afterPrice:20.99,
      type:"softcover",
      tags:["new","sale"]
    },
    {
      name: 'So Say We All',
      image: 'so-say-we-all.jpeg',
      quantity: 3,
      author:"Edward Gross, Mark A. Altman",
      listPrice:38.99,
      beforePrice:35.99,
      afterPrice:34.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Divine Fury',
      image: 'divine-fury.jpeg',
      quantity: 1,
      author:"Darrin M. McMahon",
      listPrice:34.50,
      beforePrice:33.99,
      afterPrice:32.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'How to be Creative',
      image: 'how-to-be-creative.jpeg',
      quantity: 1,
      author:"Liz Dean",
      listPrice:34.50,
      beforePrice:33.99,
      afterPrice:32.99,
      type:"softcover",
      tags:["new","sale"]
    },
    {
      name: 'The Lagoon',
      image: 'the-lagoon.jpeg',
      quantity: 1,
      author:"Armand Marie Leroi",
      listPrice:24.00,
      beforePrice:23.99,
      afterPrice:21.99,
      type:"softcover",
      tags:["new","sale"]
    },
    {
      name: 'The Human Tide',
      image: 'the-human-tide.jpeg',
      quantity: 1,
      author:"Paul Morland",
      listPrice:36.50,
      beforePrice:35.99,
      afterPrice:32.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Tornado Hunter',
      image: 'tornado.jpeg',
      quantity: 1,
      author:"Paul Morland",
      listPrice:28.00,
      beforePrice:27.99,
      afterPrice:25.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Close Encounters of the Furred Kind',
      image: 'close-encounters.jpeg',
      quantity: 1,
      author:"Tom Cox",
      listPrice:34.99,
      beforePrice:33.99,
      afterPrice:32.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'The Rescue Of Belle And Sundance',
      image: 'the-rescue-of-belle-sundance.jpeg',
      quantity: 1,
      author:"Birgit Stutz, Lawrence Scanlan",
      listPrice:23.99,
      beforePrice:22.99,
      afterPrice:20.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Secrets of the I Ching',
      image: 'secrets-ching.jpeg',
      quantity: 1,
      author:"Joseph Murphy, Kenneth Irving",
      listPrice:22.99,
      beforePrice:21.99,
      afterPrice:20.99,
      type:"softcover",
      tags:["new","sale"]
    },
    {
      name: 'Afghanistan',
      image: 'afghanistan.jpeg',
      quantity: 1,
      author:"Stephen Tanner",
      listPrice:20.95,
      beforePrice:20.10,
      afterPrice:19.99,
      type:"softcover",
      tags:["new","sale"]
    },
    {
      name: 'Life, God, and Other Small Topics',
      image: 'life-god-and-small-topics.jpeg',
      quantity: 1,
      author:"Eric Metaxas",
      listPrice:18.00,
      beforePrice:17.10,
      afterPrice:16.99,
      type:"softcover",
      tags:["new","sale"]
    },
    {
      name: 'The Design of Childhood',
      image: 'the-design-of-childhood.jpeg',
      quantity: 2,
      author:"Alexandra Lange",
      listPrice:32.00,
      beforePrice:31.10,
      afterPrice:29.99,
      type:"softcover",
      tags:["new","sale"]
    },
    {
      name: 'Time Alive',
      image: 'time-alive.jpeg',
      quantity: 2,
      author:"Alexandra Lange",
      listPrice:32.00,
      beforePrice:31.10,
      afterPrice:29.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Origins',
      image: 'origins.jpeg',
      quantity: 1,
      author:"Lewis Dartnell",
      listPrice:39.00,
      beforePrice:38.10,
      afterPrice:35.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Close Encounters of the Third Kind',
      image: 'the-ultimate-visual-history.jpeg',
      quantity: 2,
      author:"Michael Klastorin ",
      listPrice:62.00,
      beforePrice:61.10,
      afterPrice:59.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Okja: The Art and Making of the Film',
      image: 'okja.jpeg',
      quantity: 1,
      author:"Simon Ward",
      listPrice:53.95,
      beforePrice:52.10,
      afterPrice:51.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Downton Abbey - A Celebration',
      image: 'downton-abbey.jpeg',
      quantity: 1,
      author:"Jessica Fellowes",
      listPrice:31.50,
      beforePrice:31.10,
      afterPrice:30.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Sherlock Chronicles',
      image: 'sherlock-chronicles.jpeg',
      quantity: 1,
      author:"Steve Tribe, Mark Gatiss",
      listPrice:31.50,
      beforePrice:31.10,
      afterPrice:30.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'A Dog Named Jimmy',
      image: 'a-dog-named-jimmy.jpeg',
      quantity: 1,
      author:"Rafael Mantesso",
      listPrice:24.50,
      beforePrice:22.10,
      afterPrice:21.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'A Sparrows Lifes as Sweet as Ours',
      image: 'a-sparrows-life-as-sweet.jpeg',
      quantity: 1,
      author:" Carry Akroyd, John McEwen ",
      listPrice:42.50,
      beforePrice:41.10,
      afterPrice:39.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Legendary Authors and the Clothes They Wore',
      image: 'legendary-authors.jpeg',
      quantity: 1,
      author:"Terry Newman",
      listPrice:32.50,
      beforePrice:31.10,
      afterPrice:29.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Before Columbus',
      image: 'before-columbus.jpeg',
      quantity: 1,
      author:"Charles C. Mann, Rebecca Stefoff",
      listPrice:32.99,
      beforePrice:31.10,
      afterPrice:29.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Shark Week',
      image: 'shark-week.jpeg',
      quantity: 1,
      author:" Discovery, Martha Brockenbrough ",
      listPrice:27.99,
      beforePrice:26.10,
      afterPrice:24.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Yellowstone',
      image: 'yellowstone.jpeg',
      quantity: 1,
      author:"David Quammen",
      listPrice:36.00,
      beforePrice:35.10,
      afterPrice:32.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: ' Solo A Star Wars Story Official Collectors Edition',
      image: 'solo-wars.jpeg',
      quantity: 1,
      author:"Titan ",
      listPrice:25.99,
      beforePrice:24.10,
      afterPrice:22.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Nature Hikes',
      image: 'nature-hikes.jpeg',
      quantity: 1,
      author:"Janet Eagleson",
      listPrice:25.99,
      beforePrice:24.10,
      afterPrice:22.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Blood in the Water',
      image: 'blood-in-the-water.jpeg',
      quantity: 1,
      author:"Jack Flynn",
      listPrice:37.99,
      beforePrice:34.10,
      afterPrice:33.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'On Being 40(ish)',
      image: '0n-being-40.jpeg',
      quantity: 2,
      author:"Lindsey Mead",
      listPrice:35.00,
      beforePrice:34.10,
      afterPrice:33.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Vern Yips Design Wise',
      image: 'vern-design-wise.jpeg',
      quantity: 1,
      author:"Vern Yip",
      listPrice:35.99,
      beforePrice:34.10,
      afterPrice:33.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Shabby Chic Interiors',
      image: 'shabby-chic-interiors.jpeg',
      quantity: 1,
      author:"Rachel Ashwell",
      listPrice:35.99,
      beforePrice:34.10,
      afterPrice:33.99,
      type:"hardcover",
      tags:["new","sale"]
    },
    {
      name: 'Closed Chambers',
      image: 'closed-chambers.jpeg',
      quantity: 1,
      author:"Edward Lazarus",
      listPrice:25.00,
      beforePrice:24.10,
      afterPrice:18.99,
      type:"softcover",
      tags:["new","sale"]
    },
    {
      name: 'How Enlightenment Changes Your Brain',
      image: 'enlightment-changes-your-brain.jpeg',
      quantity: 1,
      author:"Andrew Newberg, MD, Mark Robert Waldman",
      listPrice:23.00,
      beforePrice:19.10,
      afterPrice:18.99,
      type:"softcover",
      tags:["new","sale"]
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  // await User.create({
  //   userName: 'Reem',
  //   email: 'reemu@testmail.com',
  //   password: 'password12345',
  //   address:[{
  //   street:'55 carrie crescent',
  //   city:'brampton',
  //   postalCode:'l6y4y6',
  //   country:'canada',
  //   }
  //   ],
  //   orders: [
  //     {
  //       products: [products[0]._id, products[0]._id, products[1]._id]
  //     }
  //   ]
  // });

  await User.create({
    userName: 'sunny',
    email: 'sunny@outlook.com',
    password: '123456'
  });

  console.log('users seeded');

  process.exit();
});
