import recipe1 from "./images/details-1.jpg";
import recipe2 from "./images/details-2.jpg";
import recipe3 from "./images/details-3.jpg";
import recipe4 from "./images/details-4.jpg";
import img1 from "./images/recipe-1.jpg";
import img2 from "./images/recipe-2.jpg";
import img3 from "./images/recipe-3.jpg";
import img4 from "./images/recipe-4.jpg";
import img5 from "./images/recipe-5.jpg";
import img6 from "./images/recipe-6.jpg";
import img7 from "./images/recipe-7.jpg";
import img8 from "./images/recipe-8.jpg";
import img9 from "./images/recipe-9.jpg";
import img10 from "./images/recipe-10.jpg";
import img11 from "./images/recipe-11.jpg";
import img12 from "./images/recipe-12.jpg";
import img13 from "./images/recipe-13.jpg";
import img14 from "./images/recipe-14.jpg";
import img15 from "./images/recipe-15.jpg";
import img16 from "./images/recipe-16.jpg";

export default [
  {
    id: "1",
    name: "Cheesy mushrooms",
    slug: "Mushrooms-with-parsley-and-blue-cheese",
    cooktime: 1,
    difficulty: "easy",
    // calories: 1400,
    featured: true,
    gluten: true,
    lowcarb: true,
    description:
      "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
    images: [img1, recipe1, recipe2, recipe3],
    // images: "recipe-1.jpg, details-1.jpg, details-2.jpg, details-3.jpg",
    // images: "recipe-1.jpg",
    // images: img1,
    // ingredients: ["peer", "brown sugar", "butter"],
    ingredients: [
      {
        ingred_name: "mushroms",
        quantity: "350",
        unit_name: "gr",
        calories: "35.0",
      },
      {
        ingred_name: "cheese",
        quantity: "350",
        unit_name: "gr",
        calories: "314.0",
      },
      {
        ingred_name: "oregano",
        quantity: "2",
        unit_name: "gr",
        calories: "306.0",
      },
    ],
  },
  {
    id: "2",
    name: "Colored sandwich",
    slug: "Ham-and-rucola-sandwich",
    cooktime: 3,
    difficulty: "medium",
    // calories: 1200,
    featured: true,
    lowcarb: false,
    gluten: true,
    description:
      "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
    images: [img2, recipe1, recipe3, recipe4],
    // images: "recipe-2.jpg, details-1.jpg, details-3.jpg, details-4.jpg",
    // images: "recipe-2.jpg",
    // images: img2,
    // ingredients: ["yogurt", "strawberries", "honey"],
    ingredients: [
      {
        ingred_name: "mushroms",
        quantity: "350",
        unit_name: "gr",
        calories: "35.0",
      },
      {
        ingred_name: "cheese",
        quantity: "350",
        unit_name: "gr",
        calories: "314.0",
      },
      {
        ingred_name: "oregano",
        quantity: "2",
        unit_name: "gr",
        calories: "306.0",
      },
    ],
  },
  {
    id: "16",
    name: "Elderflowers plate",
    slug: "Mushrooms",
    cooktime: 2,
    difficulty: "master-chef",
    // calories: 1560,
    featured: true,
    lowfat: true,
    gluten: false,
    description:
      "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
    images: [img16, recipe2, recipe3, recipe4],
    // images: "recipe-16.jpg, details-3.jpg, details-4.jpg, details-2.jpg",
    // images: "recipe-16.jpg",
    // images: img1,
    // ingredients: ["ham", "bread", "butter", "rucola"],
    ingredients: [
      {
        ingred_name: "mushroms",
        quantity: "350",
        unit_name: "gr",
        calories: "35.0",
      },
      {
        ingred_name: "cheese",
        quantity: "350",
        unit_name: "gr",
        calories: "314.0",
      },
      {
        ingred_name: "oregano",
        quantity: "2",
        unit_name: "gr",
        calories: "306.0",
      },
      {
        ingred_name: "mushroms",
        quantity: "350",
        unit_name: "gr",
        calories: "35.0",
      },
      {
        ingred_name: "cheese",
        quantity: "350",
        unit_name: "gr",
        calories: "314.0",
      },
      {
        ingred_name: "oregano",
        quantity: "2",
        unit_name: "gr",
        calories: "306.0",
      },
    ],
  },
];

// export default [
//   {
//     fields: {
//       id: "2",
//       name: "Colored sandwich",
//       slug: "Ham-and-rucola-sandwich",
//       cooktime: 3,
//       difficulty: "medium",
//       calories: 1400,
//       featured: false,
//       lowcarb: true,
//       gluten: true,
//       description:
//         "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
//       ingredients: ["ham", "bread", "butter", "rucola"],
//       images: [
//         {
//           fields: {
//             file: {
//               url: img2,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe2,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe3,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe4,
//             },
//           },
//         },
//       ],
//     },
//   },
//   {
//     fields: {
//       id: "3",
//       name: "Takeaway breakfast",
//       slug: "Yogurt-dream",
//       cooktime: 2,
//       difficulty: "master-chef",
//       calories: 1400,
//       featured: false,
//       lowcarb: true,
//       gluten: true,
//       description:
//         "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
//       ingredients: ["yogurt", "strawberries", "honey"],
//       images: [
//         {
//           fields: {
//             file: {
//               url: img3,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe1,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe2,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe3,
//             },
//           },
//         },
//       ],
//     },
//   },
//   {
//     fields: {
//       id: "4",
//       name: "Cheesy pear puree",
//       slug: "Pear-puree",
//       cooktime: 0.5,
//       difficulty: "easy",
//       calories: 1400,
//       featured: false,
//       lowcarb: true,
//       gluten: true,
//       description:
//         "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
//       ingredients: ["peer", "brown sugar", "butter"],
//       images: [
//         {
//           fields: {
//             file: {
//               url: img4,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe2,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe3,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe4,
//             },
//           },
//         },
//       ],
//     },
//   },
//   {
//     fields: {
//       id: "5",
//       name: "Four seasons wedges",
//       slug: "Four-seasons-wedges",
//       difficulty: "medium",
//       calories: 1400,
//       cooktime: 4,
//       lowcarb: true,
//       gluten: true,
//       featured: false,
//       description:
//         "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
//       ingredients: ["potatos", "mayoneese", "soya sauce", "tomato sauce"],
//       images: [
//         {
//           fields: {
//             file: {
//               url: img5,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe1,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe2,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe3,
//             },
//           },
//         },
//       ],
//     },
//   },
//   {
//     fields: {
//       id: "6",
//       name: "Mozzarella pizza",
//       slug: "Pizza",
//       cooktime: 2,
//       difficulty: "master-chef",
//       calories: 400,
//       featured: true,
//       lowcarb: false,
//       gluten: true,
//       description:
//         "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
//       ingredients: ["flour", "tomato sauce", "ham", "rucola"],
//       images: [
//         {
//           fields: {
//             file: {
//               url: img6,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe2,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe4,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe3,
//             },
//           },
//         },
//       ],
//     },
//   },
//   {
//     fields: {
//       id: "7",
//       name: "Prosciuto starter",
//       slug: "Prosciuto-crudo-starter",
//       cooktime: 2,
//       difficulty: "easy",
//       calories: 1100,
//       featured: true,
//       lowcarb: false,
//       gluten: false,
//       description:
//         "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
//       ingredients: [
//         "prosciuto",
//         "bread",
//         "cheese",
//         "rucola",
//         "prosciuto",
//         "bread",
//         "cheese",
//         "rucola",
//       ],
//       images: [
//         {
//           fields: {
//             file: {
//               url: img7,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe2,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe1,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe4,
//             },
//           },
//         },
//       ],
//     },
//   },
//   {
//     fields: {
//       id: "8",
//       name: "Grilled chicken",
//       slug: "Grilled-chicken-with-zucchini",
//       cooktime: 1,
//       difficulty: "medium",
//       calories: 1200,
//       featured: true,
//       lowcarb: false,
//       gluten: true,
//       description:
//         "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
//       ingredients: ["chicken", "bread", "butter", "zucchini"],
//       images: [
//         {
//           fields: {
//             file: {
//               url: img8,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe2,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe3,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe4,
//             },
//           },
//         },
//       ],
//     },
//   },
//   {
//     sys: {
//       id: "9",
//     },
//     fields: {
//       id: "9",
//       name: "Green salmon",
//       slug: "Salmon-with-asparagus",
//       cooktime: 1,
//       difficulty: "master-chef",
//       calories: 800,
//       featured: false,
//       lowcarb: false,
//       gluten: true,
//       description:
//         "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
//       ingredients: ["salmon", "asparagus", "butter", "rucola"],
//       images: [
//         {
//           fields: {
//             file: {
//               url: img9,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe2,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe3,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe4,
//             },
//           },
//         },
//       ],
//     },
//   },
//   {
//     fields: {
//       id: "10",
//       name: "Chocolate croissant",
//       slug: "Croissant",
//       cooktime: 0.75,
//       difficulty: "easy",
//       calories: 1340,
//       featured: false,
//       lowcarb: true,
//       gluten: false,
//       description:
//         "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
//       ingredients: ["flour", "milk", "butter", "chocolate"],
//       images: [
//         {
//           fields: {
//             file: {
//               url: img10,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe1,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe2,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe4,
//             },
//           },
//         },
//       ],
//     },
//   },
//   {
//     fields: {
//       id: "11",
//       name: "Brownie lava cake",
//       slug: "Mushrooms-with-blue-cheese",
//       cooktime: 3,
//       difficulty: "medium",
//       calories: 1420,
//       featured: false,
//       lowcarb: false,
//       gluten: false,
//       description:
//         "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
//       ingredients: ["ham", "bread", "butter", "rucola"],
//       images: [
//         {
//           fields: {
//             file: {
//               url: img11,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe2,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe4,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe1,
//             },
//           },
//         },
//       ],
//     },
//   },
//   {
//     fields: {
//       id: "12",
//       name: "Caramel latte",
//       slug: "Mushrooms",
//       cooktime: 1,
//       difficulty: "master-chef",
//       calories: 1130,
//       featured: false,
//       lowcarb: false,
//       gluten: false,
//       description:
//         "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
//       ingredients: ["ham", "bread", "butter", "rucola"],
//       images: [
//         {
//           fields: {
//             file: {
//               url: img12,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe2,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe4,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe1,
//             },
//           },
//         },
//       ],
//     },
//   },
//   {
//     fields: {
//       id: "13",
//       name: "Cinnamon pudding",
//       slug: "Mushrooms",
//       cooktime: 1,
//       difficulty: "master-chef",
//       calories: 1130,
//       featured: false,
//       lowcarb: false,
//       gluten: false,
//       description:
//         "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
//       ingredients: ["ham", "bread", "butter", "rucola"],
//       images: [
//         {
//           fields: {
//             file: {
//               url: img13,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe2,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe4,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe1,
//             },
//           },
//         },
//       ],
//     },
//   },
//   {
//     fields: {
//       id: "14",
//       name: "Rice coffee pudding",
//       slug: "Mushrooms",
//       cooktime: 1,
//       difficulty: "master-chef",
//       calories: 1130,
//       featured: false,
//       lowcarb: false,
//       gluten: false,
//       description:
//         "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
//       ingredients: ["ham", "bread", "butter", "rucola"],
//       images: [
//         {
//           fields: {
//             file: {
//               url: img14,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe2,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe4,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe1,
//             },
//           },
//         },
//       ],
//     },
//   },
//   {
//     fields: {
//       id: "15",
//       name: "Curacao lemonade",
//       slug: "Mushrooms",
//       cooktime: 1,
//       difficulty: "master-chef",
//       calories: 1130,
//       featured: false,
//       lowcarb: false,
//       gluten: false,
//       description:
//         "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
//       ingredients: ["ham", "bread", "butter", "rucola"],
//       images: [
//         {
//           fields: {
//             file: {
//               url: img15,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe2,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe4,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe1,
//             },
//           },
//         },
//       ],
//     },
//   },
//   {
//     fields: {
//       id: "16",
//       name: "Elderflowers plate",
//       slug: "Mushrooms",
//       cooktime: 3,
//       difficulty: "easy",
//       calories: 1560,
//       featured: false,
//       lowfat: true,
//       gluten: false,
//       description:
//         "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
//       ingredients: ["ham", "bread", "butter", "rucola"],
//       images: [
//         {
//           fields: {
//             file: {
//               url: img16,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe2,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe3,
//             },
//           },
//         },
//         {
//           fields: {
//             file: {
//               url: recipe4,
//             },
//           },
//         },
//       ],
//     },
//   },
// ];
