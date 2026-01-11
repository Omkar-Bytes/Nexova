const products = [
  {
    id:1,
    "name":"Pillow Covers, Couch Pillows Cover, Soft Pillow Covers (70 \u00d7 50 CM)",
    "price":449.0,
    "oldPrice":549.0,
    "category":"Home Improvement",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_61c2b0e2-6d0e-43ac-892e-ea6c0f1fe7e6.jpg"
  },
  {
    id:2,
    "name":"5-in-1 Ear Wax Cleaner- Resuable Ear Cleaning Tools With Plastic Case (5 Pcs Set)",
    "price":249.0,
    "oldPrice":299.0,
    "category":"Beauty & Personal Care",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_c5dc4939-9fea-4ba5-a91a-b2efd2558385.jpg"
  },
  {
    id:3,
    "name":"Multi-Level Back Stretcher Posture Corrector Device For Back Pain Relief",
    "price":349.0,
    "oldPrice":399.0,
    "category":"Beauty & Personal Care",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/5ed5a96e34acd11d1816ebad-12-large_7cc9bdda-3f49-45bf-89e0-dee202ad1567.jpg"
  },
  {
    id:4,
    "name":"Wall Hook-Adhesive Sticky Waterproof and Oil Proof, Reusable Wall Utility Seamless  (6 Pc)",
    "price":249.0,
    "oldPrice":399.0,
    "category":"Home Improvement",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_14a74e5e-61fc-4521-81f8-b5e804e88c75.jpg"
  },
  {
    id:5,
    "name":"Plastic Toothbrush With Plastic Round Box (20 pcs Set)",
    "price":340.0,
    "oldPrice":399.0,
    "category":"Beauty & Personal Care",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_58da5888-a14d-4fad-8f3b-c2656999998f.jpg"
  },
  {
    id:6,
    "name":"Tree LED Candlelight Colourful Candle Decoration LED Light Night (1 Pc)",
    "price":null,
    "oldPrice":349.0,
    "category":"Home Improvement",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/sku_c39ac897-bfe6-4164-aeca-add1405cf7af.jpg"
  },
  {
    id:7,
    "name":"Multifunctional Garlic Press, Garlic Mincing & Crushing Tool (1 Pc)",
    "price":349.0,
    "oldPrice":499.0,
    "category":"Home & Kitchen",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/03_0b992379-6051-4768-ab0e-7765543742e9.jpg"
  },
  {
    id:8,
    "name":"Vegetable Container Premium Fruits Saver Keeper (1 Pc)",
    "price":null,
    "oldPrice":299.0,
    "category":"Home & Kitchen",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_6883b33e-9192-4da6-9888-611a3e44a73c.jpg"
  },
  {
    id:9,
    "name":"Small 6 Pcs Earwax Removal Kit",
    "price":249.0,
    "oldPrice":399.0,
    "category":"Beauty & Personal Care",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_39711282-e2e5-4c09-ada5-072298da6609.jpg"
  },
  {
    id:10,
    "name":"Black Characters Mini A6 Magnetic Cinematic Light Box with 82 Characters and 10 Emojis  (1 Set)",
    "price":450.0,
    "oldPrice":880.0,
    "category":"Home Improvement",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_f74fef2c-af50-426c-b270-6901fd7bba21.jpg"
  },
  {
    id:11,
    "name":"3 in 1 Charging Cable (1 Pc \/ Mix Color)",
    "price":249.0,
    "oldPrice":350.0,
    "category":"Mobile & Smart Phone Accessories",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_0a8c835b-fa7d-40a1-8114-5cefd6884684.jpg"
  },
  {
    id:12,
    "name":"LED Mood Lights Bedroom Interior Decor Lighting (12 Pcs Set)",
    "price":749.0,
    "oldPrice":1250.0,
    "category":"Electronics",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_ee94afd0-b05e-4713-b74f-df4cc8cc8726.jpg"
  },
  {
    id:13,
    "name":"Tic-Tac-Toe Game, Gobble Game, Board Game Indoor (1 Set)",
    "price":449.0,
    "oldPrice":499.0,
    "category":"Toys & Games",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/3_5eee2cc7-7080-447a-899e-1ff3aef74c1e.jpg"
  },
  {
    id:14,
    "name":"Phone Bike Holder Shelf Waterproof Bike  (1 Pc)",
    "price":310.0,
    "oldPrice":399.0,
    "category":"Car & Bike",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_34728e72-56dd-4463-a73a-e5eb08df6b5c.jpg"
  },
  {
    id:15,
    "name":"Plant Climbing Wall Fixture Clip Self-Adhesive Hook (200 Pcs Set)",
    "price":600.0,
    "oldPrice":799.0,
    "category":"Home Improvement",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_dc75c316-9c59-4312-99b2-52ebeb8911b6.jpg"
  },
  {
    id:16,
    "name":"solar garden light-led-light-pack-of-1-pc",
    "price":null,
    "oldPrice":299.0,
    "category":"Garden & Outdoors",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_1fc0eac6-db63-4cf0-af5f-1da7ded7915f.jpg"
  },
  {
    id:17,
    "name":"5Mtr Decoration light  Home festival Decoration Light",
    "price":null,
    "oldPrice":349.0,
    "category":"Lighting",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_84d97e2a-a9f5-442f-a23f-a0451a72978d.jpg"
  },
  {
    id:18,
    "name":"3M RGB LED Strip Lights, LED Mood Lights (1 Set)",
    "price":599.0,
    "oldPrice":999.0,
    "category":"Lighting",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_d3028e12-661b-4d8b-a216-a224e5d6279c.jpg"
  },
  {
    id:19,
    "name":"Home Decoration led Diwali & Wedding LED String Light (50L 10 Mtr)",
    "price":null,
    "oldPrice":299.0,
    "category":"Lighting",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/05_bde6dd49-0e73-49ba-875c-d11166baac76.jpg"
  },
  {
    id:20,
    "name":"Electric Pain Relief Heating Bag",
    "price":345.0,
    "oldPrice":420.0,
    "category":"Beauty & Personal Care",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/easy-deal-india-edi-edi-104-electric-heating-warm-bag-fur-velvet-original-imafc2pfee9z6tue_5a3bbfb8-b45e-48e8-a546-80562eb57998.jpg"
  },
  {
    id:21,
    "name":"Ultra Soft Unisex Woolen Beanie Cap Plus Muffler Scarf",
    "price":null,
    "oldPrice":299.0,
    "category":"Clothing & Accessories",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/2image_6e7a6b6b-5bd7-4d42-89ca-26cb1deb46b0.jpg"
  },
  {
    id:22,
    "name":"Home Decoration Diwali & Wedding LED String Light (16L 3 Mtr)",
    "price":349.0,
    "oldPrice":399.0,
    "category":"Lighting",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/3e0d1c7c-ad4b-45ef-9d2b-99cd39963ec2.jpg"
  },
  {
    id:23,
    "name":"Home Decoration Diwali & Wedding LED String Light (18L 4.5 Mtr)",
    "price":299.0,
    "oldPrice":349.0,
    "category":"Lighting",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/2c4d1b85-9723-4471-bcb3-7f821c6dd35e.jpg"
  },
  {
    id:24, 
    "name":"Electric Toothbrush for Adults & Teens \u2013 Deep Cleansing, Battery Operated (Battery Not included)",
    "price":275.0,
    "oldPrice":399.0,
    "category":"Beauty & Personal Care",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/7324.jpg"
  },
  {
    id:25,
    "name":"Electrical Candles Diya LED Tea Light (6 Pcs Set)",
    "price":349.0,
    "oldPrice":499.0,
    "category":"Lighting",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_c32c2edd-20f6-4fca-9c22-5bcdaf0b5616.jpg"
  },
  {
    id:26,
    "name":"LED Mood Lights Bedroom Interior Decor Lighting (1pc)",
    "price":249.0,
    "oldPrice":345.0,
    "category":"Home Improvement",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_cf1be831-60e0-46aa-801d-69ea2c6a2f6a.jpg"
  },
  {
    id:27,
    "name":"Cute Cactus LED Night Light (Cactus \/ 4 Pcs Set)",
    "price":499.0,
    "oldPrice":599.0,
    "category":"Lighting",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_bb022284-5d23-45bb-90bf-e1ee5d54b687.jpg"
  },
  {
    id:28,
    "name":"Thumb Knife 4 Finger Cutter Kitchen Knife Set (Set of 1)",
    "price":299.0,
    "oldPrice":349.0,
    "category":"Home & Kitchen",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_97ca6dc8-6f4c-405a-8bdb-5ae3736b35c6.jpg"
  },
  {
    id:29,
    "name":"Heavy Duty Round Rolling Stool with Wheels Pedicure Stool (1 pc)",
    "price":1472.0,
    "oldPrice":1999.0,
    "category":"Home Improvement",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/330100Pc-4054-5912Gm.jpg"
  },
  {
    id:30,
    "name":"Smokeless Led Light Lantern Lamp (1 Pc)",
    "price":null,
    "oldPrice":199.0,
    "category":"Lighting",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/03_156b4069-1e98-4e32-b15c-eb96a6cfcda8.jpg"
  },
  {
    id:31,
    "name":"Festive Lighting for Any Occasion: 12 Pack LED Tealight Candles",
    "price":1200.0,
    "oldPrice":2400.0,
    "category":"Lighting",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_53535d75-b7f8-4559-92cb-92acfc8ad787.jpg"
  },
  {
    id:32,
    "name":"Double Decker Magic Truck Compass Multi Level Metal Truck Compass Pencil Case with Movable Wheels & Sharpener (Mix Design)",
    "price":358.0,
    "oldPrice":799.0,
    "category":"Toys & Games",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_82a4b09a-a5d7-470c-b869-05cea61bbd2a.jpg"
  },
  {
    id:33,
    "name":"Home Decoration Diwali & Wedding LED String Light (36L 10 Mtr)",
    "price":166.0,
    "oldPrice":299.0,
    "category":"Lighting",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/9f6b2edd-55d4-445c-ac08-9f96f7a0c509.jpg"
  },
  {
    id:34,
    "name":"Acrylic Battery Operated Mini Square LED Lantern (1Pc)",
    "price":132.0,
    "oldPrice":199.0,
    "category":"Lighting",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/03_84f9987b-ea16-46e2-9174-a5b30b6ae1fd.jpg"
  },
  {
    id:35,
    "name":"Home Decoration Diwali LED String Light",
    "price":156.0,
    "oldPrice":299.0,
    "category":"Lighting",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/7f4869cd-40f1-4d49-b21f-6716c7646ceb.jpg"
  },
  {
    id:36,
    "name":"LED Tealights,Smokeless Plastic Decorative Candles",
    "price":28.0,
    "oldPrice":99.0,
    "category":"Lighting",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_f39be70c-5c12-4806-a91f-f18eb88bb101.jpg"
  },
  {
    id:37,
    "name":"Universal Portable Mobile Holder Stand",
    "price":128.0,
    "oldPrice":149.0,
    "category":"Mobile & Smart Phone Accessories",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/4_b4f7adfc-a16a-427b-b1fb-4e95cb839236.jpg"
  },
  {
    id:38,
    "name":"Tyre Valve Caps Luminous Glow Car Tire Air Stem Valve Cap Covers vaal cap ( 4 Pcs Mix Colour)",
    "price":34.5,
    "oldPrice":99.0,
    "category":"Car & Bike",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/008_6f60f956-624a-4dd7-b549-fbbba2632db3.jpg"
  },
  {
    id:39,
    "name":"Smokeless Led Light Lantern Lamp (24 Pcs Set)",
    "price":1920.0,
    "oldPrice":3840.0,
    "category":"Lighting",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_5ec9fe8e-4736-4ee4-874a-bfc6ae5dfc9f.jpg"
  },
  {
    id:40,
    "name":"Right-Handed Silicone Thumb Cutter Gloves (1Pc)",
    "price":96.0,
    "oldPrice":199.0,
    "category":"Garden & Outdoors",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/13_fe590fdd-3181-4f0c-bc65-95ed1a9d8b77.jpg"
  },
  {
    id:41,
    "name":"2-in-1 Flat mop and Bucket Set",
    "price":1699.0,
    "oldPrice":2250.0,
    "category":"Home & Kitchen",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_744d67ce-64b1-4059-8702-5fbe264215d4.jpg, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/2-in-1-Flat-Mop-And-Bucket-Set-1-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/2-in-1-Flat-Mop-And-Bucket-Set-2-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/2-in-1-Flat-Mop-And-Bucket-Set-4-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/2-in-1-Flat-Mop-And-Bucket-Set-5-.webp"
  },
  {
    id:42,
    "name":"2 Bowl & 6 Glass Snake Set ( 8 Pc Set )",
    "price":649.0,
    "oldPrice":799.0,
    "category":"Home & Kitchen",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_6950e355-6f2a-4881-b950-f7098d1c04e1.jpg"
  },
  {
    id:43,
    "name":"Divine lunch Tableware, Dinner Set (11 Pcs Set)",
    "price":1249.0,
    "oldPrice":1600.0,
    "category":"Home & Kitchen",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/06_d5937ea9-0769-4059-be8a-5b97c1238da9.jpg"
  },
  {
    id:44,
    "name":"High Quality 4 Pc Glass & 4Pc Bowl Set, perfect choice For kitchen",
    "price":549.0,
    "oldPrice":632.0,
    "category":"Home & Kitchen",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_6a9a9245-dc6a-4942-a92f-7ab2f4c24138.jpg"
  },
  {
    id:45,
    "name":"Multicolor 12 Diya Curtain String Lights, Window Curtain Lights with 8 Flashing Modes Decoration Light (Multi Color)",
    "price":549.0,
    "oldPrice":1040.0,
    "category":"Home Improvement",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_e1e5e6f1-5e7a-479c-89d3-80b75f3af114.jpg"
  },
  {
    id:46,
    "name":"Kid's Boys Light Bike Keychain (5Pc)",
    "price":299.0,
    "oldPrice":449.0,
    "category":"Toys & Games",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_45f369b4-b310-4ebf-8016-0870634fdddb.jpg"
  },
  {
    id:47,
    "name":"12 Diya Curtain String Lights, (White Color)",
    "price":549.0,
    "oldPrice":1040.0,
    "category":"Lighting",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_751c5c9e-f026-4dbd-b4a1-314e016ab3c2.jpg"
  },
  {
    id:48,
    "name":"Changing Secret Blossoms with Water Magic Print z",
    "price":349.0,
    "oldPrice":499.0,
    "category":"Garden & Outdoors",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/4image_96ed7b29-84d2-4acd-95d0-e4f251a2114b.jpg"
  },
  {
    id:49,
    "name":"Crab Ice Mold \u2013 Silicone Ice Cream & sicle Mold for Kids (1 Pc)",
    "price":149.0,
    "oldPrice":299.0,
    "category":"Home & Kitchen",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/02_0e754f61-918d-4358-9a2e-125744d37305.jpg"
  },
  {
    id:50,
    "name":"Gardening Tools - Garden Shears Pruners Scissor (1 Pc)",
    "price":349.0,
    "oldPrice":449.0,
    "category":"Garden & Outdoors",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/1_82179a17-9eb8-4ef4-80c9-5739353bf7b8.jpg"
  },
  {
    id:51,
    "name":"Foldable UV & Rain Umbrella with C-Shaped Handle \u2013 Kids (1 Pc \/ Mix Color)",
    "price":549.0,
    "oldPrice":649.0,
    "category":"Garden & Outdoors",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_1_d923c9d0-f3bc-480f-b161-8a11303d7914.png"
  },
  {
    id:52,
    "name":"MULTI FUNCTIONAL TIME SAVING ADJUSTABLE HAND PRESS VEGETABLES CHOPPER",
    "price":549.0,
    "oldPrice":799.0,
    "category":"Home & Kitchen",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/08_7241c9d8-e0c4-4bb1-a4df-04838a43c07f.jpg"
  },
  {
    id:53,
    "name":"Cn Blue Mouth Exerciser Used To Gain Sharp And Chiselled Mouth Easily And Fast.",
    "price":199.0,
    "oldPrice":299.0,
    "category":"Beauty & Personal Care",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/03_15a1c91d-51d6-4fc1-ac97-7637a8539de3.jpg"
  },
  {
    id:54,
    "name":"CN Blue Mouth Exerciser \u2013 Fast Jaw Sculpting Tool",
    "price":249.0,
    "oldPrice":399.0,
    "category":"Beauty & Personal Care",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_cdf8e16b-2d38-4122-a3bc-fb4520de6136.jpg"
  },
  {
    id:55,
    "name":"Portable Neck & Shoulder Massager for Back & Waist Relief",
    "price":249.0,
    "oldPrice":399.0,
    "category":"Beauty & Personal Care",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/04_ab2e3bcc-848b-4713-8c24-70df09e0f9f6.jpg"
  },
  {
    id:56,
    "name":"360\u00b0 Rotating Waterfall Kitchen Faucet \u2013 Touch & Swivel Sink Extender (4 In 1 )",
    "price":550.0,
    "oldPrice":699.0,
    "category":"Home & Kitchen",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/09_ec94fa1a-2b56-4c7e-ace9-850e577c38f0.jpg"
  },
  {
    id:57,
    "name":"Adhesive Golden &  Transparent Heavy Duty Wall Hook",
    "price":null,
    "oldPrice":249.0,
    "category":"Home Improvement",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/04_efbdfbb5-ae64-4996-81af-206c67f16ab6.jpg"
  },
  {
    id:58,
    "name":"304 Stainless Steel Faucet Mount Water Filter, Water Purifier (1 Set)",
    "price":1099.0,
    "oldPrice":1500.0,
    "category":"Home & Kitchen",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/photos-1.jpg"
  },
  {
    id:59,
    "name":"Egg Boiler \/ Poacher \/ Cooker \/ Electric Steamer (2 Layer)",
    "price":549.0,
    "oldPrice":1028.0,
    "category":"Home & Kitchen",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/005_8c2de21a-9d03-49c4-9015-52802fbc9a6c.jpg"
  },
  {
    id:60,
    "name":"Electrical Candles Diya LED Tea Light, Plastic Candle Light Candle Candle (24 Pc Set)",
    "price":600.0,
    "oldPrice":1200.0,
    "category":"Lighting",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/cdbdba39-2ade-40df-bab0-3764b9ed80f8.jpg"
  },
  {
    id:61,
    "name":"Astronaut Ball Night Lamp",
    "price":399.0,
    "oldPrice":499.0,
    "category":"Home Improvement",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/35832e8f-8bb2-46ad-9981-f7be46bba435.jpg, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/Astronaut-Ball-Night-Light-Lamp-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/Astronaut-Ball-Night-Light-Lamp-1-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/Astronaut-Ball-Night-Light-Lamp-2-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/Astronaut-Ball-Night-Light-Lamp-4-.webp"
  },
  {
    id:62,
    "name":"Silicone Glove with Multi-Function Blade for Cutting and Cleaning Vegetables, Fruit, Gardening Tool",
    "price":null,
    "oldPrice":249.0,
    "category":"Home & Kitchen",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/9083eb45-217e-42ea-8acf-f6961055ea8b.jpg"
  },
  {
    id:63,
    "name":"Decoration Candles\/Led Candle (5 Pc)",
    "price":null,
    "oldPrice":399.0,
    "category":"Lighting",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/0d1acd55-3e49-467a-b68c-e6d4423cf70b.jpg"
  },
  {
    id:64,
    "name":"Makeup Organiser Cosmetic, Skin Care Products Storage Box",
    "price":null,
    "oldPrice":399.0,
    "category":"Beauty & Personal Care",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_0c2e3743-8ca7-4094-821d-df2a6c0a5b86.jpg"
  },
  {
    id:65,
    "name":"Ocean Wave Projector 3D Lamp With Remote",
    "price":449.0,
    "oldPrice":899.0,
    "category":"Home Improvement",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/03_ce28bb41-5900-49c7-b504-fe3432ad7f2c.jpg"
  },
  {
    id:66,
    "name":"3D Wireless Charging LED Light Lamp for Bedroom",
    "price":2799.0,
    "oldPrice":3500.0,
    "category":"Home Improvement",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/05_38283c49-e560-4feb-8cc6-50edc9fe3f60.jpg"
  },
  {
    id:67,
    "name":"Dustproof Cloth Cover for ,55 Inch TV Screen Protector",
    "price":699.0,
    "oldPrice":899.0,
    "category":"Home Improvement",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/03_869baba4-daa9-4b7e-8014-824276428c04.jpg"
  },
  {
    id:68,
    "name":"Multipurpose Gloves \u2013 Ideal for Washing, Gardening",
    "price":null,
    "oldPrice":249.0,
    "category":"Home & Kitchen",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/4_a7b05d57-7bf2-4f45-8a0d-fcae95af3e29.jpg"
  },
  {
    id:69,
    "name":"Festive Lighting LED Tealight Candles : 12 Pack",
    "price":949.0,
    "oldPrice":1200.0,
    "category":"Lighting",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/7426fd83-80bb-408f-9636-2273fbe4d723.jpg"
  },
  {
    id:70,
    "name":"Mini Handheld Vacuum Blackhead Remover",
    "price":349.0,
    "oldPrice":399.0,
    "category":"Beauty & Personal Care",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_4415ea21-83d3-4d1f-9cf7-01c45e007b96.jpg"
  },
  {
    id:71,
    "name":"Cosmetic Makeup Organizer",
    "price":null,
    "oldPrice":249.0,
    "category":"Home Improvement",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/b7ec563f-8ded-4f8b-a566-02f3956f4ac5.jpg"
  },
  {
    id:72,
    "name":"Gloves Silicone Thumb Knife Finger Protector",
    "price":null,
    "oldPrice":249.0,
    "category":"Beauty & Personal Care",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/10147.jpg"
  },
  {
    id:73,
    "name":"Kitchen Wall Sealing Strip Tape",
    "price":null,
    "oldPrice":175.0,
    "category":"Home Improvement",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/bef3f96d-a6bc-462e-8f43-42ad3aee6b1a.jpg"
  },
  {
    id:74,
    "name":"Smokeless Led Light Lantern Lamp (2 Pc)",
    "price":null,
    "oldPrice":299.0,
    "category":"Home Improvement",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/a189f537-a653-420d-ba73-064595e9789b.jpg"
  },
  {
    id:75,
    "name":"Waterproof Rain coat pouch",
    "price":null,
    "oldPrice":165.0,
    "category":"Garden & Outdoors",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/02_e65b3a48-db8e-4ab6-9d37-1067d6da6c05.jpg"
  },
  {
    id:76,
    "name":"Plastic Kitchen Press",
    "price":null,
    "oldPrice":199.0,
    "category":"Home & Kitchen",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/05_bcfa078d-79d3-46cc-848c-1ffa41287a9b.jpg"
  },
  {
    id:77,
    "name":"Silicone Body Back Scrubber",
    "price":null,
    "oldPrice":199.0,
    "category":"Bathroom Accessories",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/13963.jpg"
  },
  {
    id:78,
    "name":"Silicone Body Back Scrubber Double Side Bathing Brush",
    "price":null,
    "oldPrice":220.0,
    "category":"Bathroom Accessories",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/13962.jpg"
  },
  {
    id:79,
    "name":"Handheld Juicer for Lemon",
    "price":265.0,
    "oldPrice":299.0,
    "category":"Home & Kitchen",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/928418f1-590d-4975-8ba3-bc6831c9566a.jpg"
  },
  {
    id:80,
    "name":"Bathing Brush Silicone Scrubber",
    "price":199.0,
    "oldPrice":249.0,
    "category":"Bathroom Accessories",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/13961.jpg"
  },
  {
    id:81,
    "name":"Rechargable Electric Arc Lighter",
    "price":null,
    "oldPrice":345.0,
    "category":"Home & Kitchen",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/4_33d3b630-bbea-414f-8790-733a77a664f5.jpg, https:\/\/yashrajonline.com\/wp-content\/uploads\/2024\/12\/Rechargeable-Electric-Gas-Ligh3-1677330115.jpg, https:\/\/yashrajonline.com\/wp-content\/uploads\/2024\/12\/Rechargeable-Electric-Gas-Ligh-1677330113.jpg, https:\/\/yashrajonline.com\/wp-content\/uploads\/2024\/12\/Rechargeable-Electric-Gas-Ligh4-1677330115.jpg, https:\/\/yashrajonline.com\/wp-content\/uploads\/2024\/12\/Rechargeable-Electric-Gas-Ligh1-1677330114.jpg, https:\/\/yashrajonline.com\/wp-content\/uploads\/2024\/12\/Rechargeable-Electric-Gas-Ligh2-1677330114-1.jpg"
  },
  {
    id:82,
    "name":"Kitchen Water Pressure Faucet",
    "price":199.0,
    "oldPrice":249.0,
    "category":"Home & Kitchen",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/ac5dbd78-a4f7-453f-a109-b884cd4970b7.jpg"
  },
  {
    id:83,
    "name":"Silicone Gloves Finger Protector",
    "price":199.0,
    "oldPrice":299.0,
    "category":"Garden & Outdoors",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/10075.jpg"
  },
  {
    id:84,
    "name":"4B Erasers 30 Pack",
    "price":249.0,
    "oldPrice":300.0,
    "category":"Office Products",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_1a918657-9490-4364-8fea-823a3a184fc9.jpg, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/4B-Erasers-30-Pack-Erasers-Yellow-Erasers-for-Kids-2-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/4B-Erasers-30-Pack-Erasers-Yellow-Erasers-for-Kids-3-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/4B-Erasers-30-Pack-Erasers-Yellow-Erasers-for-Kids-4-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/4B-Erasers-30-Pack-Erasers-Yellow-Erasers-for-Kids-5-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/4B-Erasers-30-Pack-Erasers-Yellow-Erasers-for-Kids-6-.webp"
  },
  {
    id:85,
    "name":"M19 Bluetooth Headphones",
    "price":498.0,
    "oldPrice":996.0,
    "category":"Mobile & Smart Phone Accessories",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/3_1ae0942a-15e8-44c8-bc1b-f4d19a3eee0b.jpg"
  },
  {
    id:86,
    "name":"Tws Dual Pairing Earbuds",
    "price":658.0,
    "oldPrice":1316.0,
    "category":"Mobile & Smart Phone Accessories",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/04_46eddda4-926c-4aa7-9179-d7d0a6906b14.jpg"
  },
  {
    id:87,
    "name":"Flameless Melted Design Candles",
    "price":null,
    "oldPrice":156.0,
    "category":"Lighting",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_d1d9e152-4d40-48a3-a360-5c2169e0b7f4.jpg, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/Flameless-Melted-Design-Candles-2-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/Flameless-Melted-Design-Candles-3-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/Flameless-Melted-Design-Candles-4-.webp"
  },
  {
    id:88,
    "name":"LED Taper Candles",
    "price":299.0,
    "oldPrice":349.0,
    "category":"Lighting",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/01_364f4154-f4d5-4da9-af36-a1afa32d8354.jpg, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/LED-Taper-Candles-1-Pc-1-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/LED-Taper-Candles-1-Pc-2-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/LED-Taper-Candles-1-Pc-3-.webp"
  },
  {
    id:89,
    "name":"Mini Juicer 420ml",
    "price":449.0,
    "oldPrice":599.0,
    "category":"Home & Kitchen",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/08_f76dda97-1088-43fd-b9f3-593f5e44e745.jpg, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/2-BLENDER-PORTABLE-JUICER-FOR-SMOOTHIE-420-ML-Multicolour.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/3-BLENDER-PORTABLE-JUICER-FOR-SMOOTHIE-420-ML-Multicolour.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/4-BLENDER-PORTABLE-JUICER-FOR-SMOOTHIE-420-ML-Multicolour.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/5-BLENDER-PORTABLE-JUICER-FOR-SMOOTHIE-420-ML-Multicolour.webp"
  },
  {
    id:90,
    "name":"Dish Wash Gloves",
    "price":275.0,
    "oldPrice":349.0,
    "category":"Home & Kitchen",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/714-Reusable-Silicone-Cleaning-Brush-Scrubber-Gloves.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/8a6c2dea-70d0-4b06-8e2c-2ec405836fdf.jpg, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/714-Reusable-Silicone-Cleaning-Brush-Scrubber-Gloves-1-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/Magic-Dish-Wash-Gloves-4.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/04\/714-Reusable-Silicone-Cleaning-Brush-Scrubber-Gloves-3-.webp"
  },
  {
    id:91,
    "name":"Car Dashboard Mat",
    "price":399.0,
    "oldPrice":599.0,
    "category":"Car & Bike",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/05\/01_555f7e8f-97ab-46f2-b4d5-56c74-1.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/05\/Car-Dashboard-Mat-Mobile-Phone-Holder-Mount-2.jpg, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/05\/Car-Dashboard-Mat-Mobile-Phone-Holder-Mount-4-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/05\/Car-Dashboard-Mat-Mobile-Phone-Holder-Mount-3-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/05\/Car-Dashboard-Mat-Mobile-Phone-Holder-Mount-5-.webp"
  },
  {
    id:92,
    "name":"Car Dust Brush",
    "price":375.0,
    "oldPrice":499.0,
    "category":"Car & Bike",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/06\/4594_car_clea_dust_brush_1pc-2-.webp"
  },
  {
    id:93,
    "name":"Blind Spot Mirror",
    "price":299.0,
    "oldPrice":449.0,
    "category":"Car & Bike",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/06\/Blind-Spot-Mirror-for-Car-2.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/06\/Blind-Spot-Mirror-for-Car-7-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/06\/Blind-Spot-Mirror-for-Car-6-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/06\/Blind-Spot-Mirror-for-Car-5-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/06\/Blind-Spot-Mirror-for-Car-4.webp"
  },
  {
    id:94,
    "name":"Vlogging Kit for Video Making",
    "price":599.0,
    "oldPrice":999.0,
    "category":"Mobile & Smart Phone Accessories",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/06\/02_dd4a2f38-67e9-46c3-9ecb-835831e85bac.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/06\/Phone-Holder-Clip-for-Making-Videos-6-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/06\/Phone-Holder-Clip-for-Making-Videos-5-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/06\/Phone-Holder-Clip-for-Making-Videos-4-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/06\/Phone-Holder-Clip-for-Making-Videos-3-.webp"
  },
  {
    id:95,
    "name":"Compass Cartoon Box",
    "price":299.0,
    "oldPrice":399.0,
    "category":"Toys & Games",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/06\/4260-Art-Stationery-Cartoon-2-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/06\/4260-Art-Stationery-Cartoon-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/06\/4260-Art-Stationery-Cartoon-1-.webp"
  },
  {
    id:96,
    "name":"baby leg warmer (Knee Guard)",
    "price":null,
    "oldPrice":269.0,
    "category":"Beauty & Personal Care",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/06\/Toddler-Wool-Knit-Leg-Warmer-Knee-Guard.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/06\/Toddler-Wool-Knit-Leg-Warmer-Knee-Guard-4-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/06\/Toddler-Wool-Knit-Leg-Warmer-Knee-Guard-3-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/06\/Toddler-Wool-Knit-Leg-Warmer-Knee-Guard-1-.webp"
  },
  {
    id:97,
    "name":"Digital Alarm Clock",
    "price":null,
    "oldPrice":449.0,
    "category":"Home Improvement",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/02\/Digital-Table-Alarm-Clock-Cale2-1653117705.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/02\/Digital-Table-Alarm-Clock-Cale-1653117705.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/02\/Digital-Table-Alarm-Clock-Cale3-1653117705.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/02\/Digital-Table-Alarm-Clock-Cale2-1653117705.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/02\/Digital-Table-Alarm-Clock-Cale4-1653117705.jpg"
  },
  {
    id:98,
    "name":"Powerful Trimming, Portable Electric Shaver",
    "price":null,
    "oldPrice":null,
    "category":"Electronics",
    "image":"https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/08\/Powerfull-Treamer-and-Shaver.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/08\/Powerfull-Treamer-and-Shaver-1-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/08\/Powerfull-Treamer-and-Shaver-3-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/08\/Powerfull-Treamer-and-Shaver-2-.webp, https:\/\/yashrajonline.com\/wp-content\/uploads\/2025\/08\/Powerfull-Treamer-and-Shaver-4-.webp"
  }
];

export default products;