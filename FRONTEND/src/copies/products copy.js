const products = [
  {
    id: 1,
    name: "Pillow Covers, Couch Pillows Cover, Soft Pillow Covers (70 × 50 CM)",
    price: 449.0,
    oldPrice: 549.0,
    category: "Home Improvement",
    image: ["/assets/pillow-cover-checker.webp"]
  },
  {
    id: 2,
    name: "5-in-1 Ear Wax Cleaner- Resuable Ear Cleaning Tools With Plastic Case (5 Pcs Set)",
    price: 249.0,
    oldPrice: 299.0,
    category: "Beauty & Personal Care",
    image: ["/assets/ear-wax-cleaner.webp"]
  },
  {
    id: 3,
    name: "Multi-Level Back Stretcher Posture Corrector Device For Back Pain Relief",
    price: 349.0,
    oldPrice: 399.0,
    category: "Beauty & Personal Care",
    image: ["/assets/back-strecher.webp"]
  },
  {
    id: 4,
    name: "Wall Hook-Adhesive Sticky Waterproof and Oil Proof, Reusable Wall Utility Seamless (6 Pc)",
    price: 249.0,
    oldPrice: 399.0,
    category: "Home Improvement",
    image: ["/assets/wallhook.webp", "/assets/wallhook-transparent.webp"]
  },
  {
    id: 5,
    name: "Plastic Toothbrush With Plastic Round Box (20 pcs Set)",
    price: 340.0,
    oldPrice: 399.0,
    category: "Beauty & Personal Care",
    image: ["/assets/toothbrush.webp"]
  },
  {
    id: 6,
    name: "Tree LED Candlelight Colourful Candle Decoration LED Light Night (1 Pc)",
    price: 299.0,
    oldPrice: 349.0,
    category: "Lighting",
    image: ["/assets/xmastree-light.webp"]
  },
  {
    id: 7,
    name: "Multifunctional Garlic Press, Garlic Mincing & Crushing Tool (1 Pc)",
    price: 349.0,
    oldPrice: 499.0,
    category: "Home & Kitchen",
    image: ["/assets/garlic-press.webp"]
  },
  {
    id: 8,
    name: "Vegetable Container Premium Fruits Saver Keeper (1 Pc)",
    price: 249.0,
    oldPrice: 299.0,
    category: "Home & Kitchen",
    image: ["/assets/veggiecontainer.webp"]
  },
  {
    id: 9,
    name: "Small 6 Pcs Earwax Removal Kit",
    price: 249.0,
    oldPrice: 399.0,
    category: "Beauty & Personal Care",
    image: ["/assets/earwax-removal-small.webp"]
  },
  {
    id: 10,
    name: "Black Characters Mini A6 Magnetic Cinematic Light Box with 82 Characters and 10 Emojis (1 Set)",
    price: 450.0,
    oldPrice: 880.0,
    category: "Home Improvement",
    image: ["/assets/magnetic-lights-with-characters.webp"]
  },
  {
    id: 11,
    name: "3 in 1 Charging Cable (1 Pc / Mix Color)",
    price: 249.0,
    oldPrice: 350.0,
    category: "Mobile & Smart Phone Accessories",
    image: ["/assets/3-in-1-charging-cable.webp"]
  },
  {
    id: 12,
    name: "LED Mood Lights Bedroom Interior Decor Lighting (12 Pcs Set)",
    price: 749.0,
    oldPrice: 1250.0,
    category: "Lighting",
    image: ["/assets/led-mood-lights.webp"]
  },
  {
    id: 13,
    name: "Tic-Tac-Toe Game, Gobble Game, Board Game Indoor (1 Set)",
    price: 449.0,
    oldPrice: 499.0,
    category: "Toys & Games",
    image: ["/assets/tictactoe.webp"]
  },
  {
    id: 14,
    name: "Phone Bike Holder Shelf Waterproof Bike (1 Pc)",
    price: 310.0,
    oldPrice: 399.0,
    category: "Car & Bike",
    image: ["/assets/bike-phone-holder.webp"]
  },
  {
    id: 15,
    name: "Plant Climbing Wall Fixture Clip Self-Adhesive Hook (200 Pcs Set)",
    price: 600.0,
    oldPrice: 799.0,
    category: "Home Improvement",
    image: ["/assets/plant-climber.webp"]
  },
  {
    id: 16,
    name: "Solar Garden Light-LED-Light-Pack-of-1-Pc",
    price: 249.0,
    oldPrice: 299.0,
    category: "Garden & Outdoors",
    image: ["/assets/solargarden-light.webp"]
  },
  {
    id: 17,
    name: "5Mtr Decoration light Home festival Decoration Light",
    price: 299.0,
    oldPrice: 349.0,
    category: "Lighting",
    image: ["/assets/fairylights.webp"]
  },
  {
    id: 18,
    name: "3M RGB LED Strip Lights, LED Mood Lights (1 Set)",
    price: 599.0,
    oldPrice: 999.0,
    category: "Lighting",
    image: ["/assets/3m-rgb-led-strip.webp"]
  },
  {
    id: 19,
    name: "Home Decoration led Diwali & Wedding LED String Light (50L 10 Mtr)",
    price: 249.0,
    oldPrice: 299.0,
    category: "Lighting",
    image: ["/assets/10-meter-light.webp"]
  },
  {
    id: 20,
    name: "Electric Pain Relief Heating Bag",
    price: 345.0,
    oldPrice: 420.0,
    category: "Beauty & Personal Care",
    image: ["/assets/electric-heating-bag.webp"]
  },
  {
    id: 21,
    name: "Ultra Soft Unisex Woolen Beanie Cap Plus Muffler Scarf",
    price: 249.0,
    oldPrice: 299.0,
    category: "Clothing & Accessories",
    image: ["/assets/binniecap-mufler.webp"]
  },
  {
    id: 22,
    name: "Home Decoration Diwali & Wedding LED String Light (16L 3 Mtr)",
    price: 349.0,
    oldPrice: 399.0,
    category: "Lighting",
    image: ["/assets/colorful-fairylight.webp"]
  },
  {
    id: 23,
    name: "Home Decoration Diwali & Wedding LED String Light (18L 4.5 Mtr)",
    price: 299.0,
    oldPrice: 349.0,
    category: "Lighting",
    image: ["/assets/4.5-meter-fairtlight.webp"]
  },
  {
    id: 24,
    name: "Electric Toothbrush for Adults & Teens – Deep Cleansing, Battery Operated (Battery Not included)",
    price: 275.0,
    oldPrice: 399.0,
    category: "Beauty & Personal Care",
    image: ["/assets/electric-toothbrush.webp"]
  },
  {
    id: 25,
    name: "Electrical Candles Diya LED Tea Light (6 Pcs Set)",
    price: 349.0,
    oldPrice: 499.0,
    category: "Lighting",
    image: ["/assets/electric-diya.webp"]
  },
  {
    id: 26,
    name: "LED Mood Lights Bedroom Interior Decor Lighting (1pc)",
    price: 249.0,
    oldPrice: 345.0,
    category: "Home Improvement",
    image: ["/assets/bedroom-ambient-lights.webp"]
  },
  {
    id: 27,
    name: "Cute Cactus LED Night Light (Cactus / 4 Pcs Set)",
    price: 499.0,
    oldPrice: 599.0,
    category: "Lighting",
    image: ["/assets/cute-cactus-lights.webp"]
  },
  {
    id: 28,
    name: "Thumb Knife 4 Finger Cutter Kitchen Knife Set (Set of 1)",
    price: 299.0,
    oldPrice: 349.0,
    category: "Home & Kitchen",
    image: ["/assets/thumbknife.webp"]
  },
  {
    id: 29,
    name: "Heavy Duty Round Rolling Stool with Wheels Pedicure Stool (1 pc)",
    price: 1472.0,
    oldPrice: 1999.0,
    category: "Home Improvement",
    image: ["/assets/pedicure-stool.webp"]
  },
  {
    id: 30,
    name: "Smokeless Led Light Lantern Lamp (1 Pc)",
    price: 149.0,
    oldPrice: 199.0,
    category: "Lighting",
    image: ["/assets/smokeless-led-latern.webp"]
  },
  {
    id: 31,
    name: "Festive Lighting for Any Occasion: 12 Pack LED Tealight Candles",
    price: 1200.0,
    oldPrice: 2400.0,
    category: "Lighting",
    image: ["/assets/led-tea-light-12-pack.webp"]
  },
  {
    id: 32,
    name: "Double Decker Magic Truck Compass Multi Level Metal Truck Compass Pencil Case with Movable Wheels & Sharpener (Mix Design)",
    price: 358.0,
    oldPrice: 799.0,
    category: "Toys & Games",
    image: ["/assets/double-decker-compass.webp"]
  },
  {
    id: 33,
    name: "Home Decoration Diwali & Wedding LED String Light (36L 10 Mtr)",
    price: 166.0,
    oldPrice: 299.0,
    category: "Lighting",
    image: ["/assets/led-string-light.webp"]
  },
  {
    id: 34,
    name: "Acrylic Battery Operated Mini Square LED Lantern (1Pc)",
    price: 132.0,
    oldPrice: 199.0,
    category: "Lighting",
    image: ["/assets/led-latern-2p.webp", "/assets/led-latern-2.webp"]
  },
  {
    id: 35,
    name: "Home Decoration Diwali LED String Light",
    price: 156.0,
    oldPrice: 299.0,
    category: "Lighting",
    image: ["/assets/home-decoration-fairylight.webp"]
  },
  {
    id: 36,
    name: "LED Tealights,Smokeless Plastic Decorative Candles",
    price: 28.0,
    oldPrice: 99.0,
    category: "Lighting",
    image: ["/assets/led-tealights.webp"]
  },
  {
    id: 37,
    name: "Universal Portable Mobile Holder Stand",
    price: 128.0,
    oldPrice: 149.0,
    category: "Mobile & Smart Phone Accessories",
    image: ["/assets/mobile-stand.webp"]
  },
  {
    id: 38,
    name: "Tyre Valve Caps Luminous Glow Car Tire Air Stem Valve Cap Covers vaal cap (4 Pcs Mix Colour)",
    price: 34.5,
    oldPrice: 99.0,
    category: "Car & Bike",
    image: ["/assets/glowin-dark-tyre-valve.webp"]
  },
  {
    id: 39,
    name: "Smokeless Led Light Lantern Lamp (24 Pcs Set)",
    price: 1920.0,
    oldPrice: 3840.0,
    category: "Lighting",
    image: ["/assets/24-pieces-led-candle.webp", "/assets/led-latern-24-pieces.webp"]
  },
  {
    id: 40,
    name: "Right-Handed Silicone Thumb Cutter Gloves (1Pc)",
    price: 96.0,
    oldPrice: 199.0,
    category: "Garden & Outdoors",
    image: ["/assets/right-hand-thumb-cutter.webp"]
  },
  {
    id: 41,
    name: "2-in-1 Flat mop and Bucket Set",
    price: 1699.0,
    oldPrice: 2250.0,
    category: "Home & Kitchen",
    image: [
      "/assets/2-in-1-Flat-Mop-And-Bucket-Set-2-.webp",
      "/assets/2-in-1-Flat-Mop-And-Bucket-Set-5-.webp",
      "/assets/mop-with-bucket.webp"
    ]
  },
  {
    id: 42,
    name: "2 Bowl & 6 Glass Snake Set (8 Pc Set)",
    price: 649.0,
    oldPrice: 799.0,
    category: "Home & Kitchen",
    image: ["/assets/2bowl-6-glass-set.webp"]
  },
  {
    id: 43,
    name: "Divine lunch Tableware, Dinner Set (11 Pcs Set)",
    price: 1249.0,
    oldPrice: 1600.0,
    category: "Home & Kitchen",
    image: ["/assets/dinner-set-11-pcs.webp"]
  },
  {
    id: 44,
    name: "High Quality 4 Pc Glass & 4Pc Bowl Set, perfect choice For kitchen",
    price: 549.0,
    oldPrice: 632.0,
    category: "Home & Kitchen",
    image: ["/assets/4-bowl-4-glass.webp"]
  },
  {
    id: 45,
    name: "Multicolor 12 Diya Curtain String Lights, Window Curtain Lights with 8 Flashing Modes Decoration Light (Multi Color)",
    price: 549.0,
    oldPrice: 1040.0,
    category: "Home Improvement",
    image: ["/assets/12-diya-hanging-decoration.webp"]
  },
  {
    id: 46,
    name: "Kid's Boys Light Bike Keychain (5Pc)",
    price: 299.0,
    oldPrice: 449.0,
    category: "Toys & Games",
    image: ["/assets/bike-keychain.webp"]
  },
  {
    id: 47,
    name: "12 Diya Curtain String Lights, (White Color)",
    price: 549.0,
    oldPrice: 1040.0,
    category: "Lighting",
    image: ["/assets/12-diya-white-color.webp"]
  },
  {
    id: 48,
    name: "Changing Secret Blossoms with Water Magic Print",
    price: 349.0,
    oldPrice: 499.0,
    category: "Garden & Outdoors",
    image: ["/assets/magic-umbrella.webp"]
  },
  {
    id: 49,
    name: "Crab Ice Mold – Silicone Ice Cream & sicle Mold for Kids (1 Pc)",
    price: 149.0,
    oldPrice: 299.0,
    category: "Home & Kitchen",
    image: ["/assets/crab-icecream-mold.webp"]
  },
  {
    id: 50,
    name: "Gardening Tools - Garden Shears Pruners Scissor (1 Pc)",
    price: 349.0,
    oldPrice: 449.0,
    category: "Garden & Outdoors",
    image: ["/assets/garden-scissors.webp"]
  },
  {
    id: 51,
    name: "Foldable UV & Rain Umbrella with C-Shaped Handle – Kids (1 Pc / Mix Color)",
    price: 549.0,
    oldPrice: 649.0,
    category: "Garden & Outdoors",
    image: ["/assets/foldable-uv-nd-rain-umbrella.webp"]
  },
  {
    id: 52,
    name: "MULTI FUNCTIONAL TIME SAVING ADJUSTABLE HAND PRESS VEGETABLES CHOPPER",
    price: 549.0,
    oldPrice: 799.0,
    category: "Home & Kitchen",
    image: ["/assets/handpress-veggie-chopper.webp"]
  },
  {
    id: 53,
    name: "Cn Blue Mouth Exerciser Used To Gain Sharp And Chiselled Mouth Easily And Fast.",
    price: 199.0,
    oldPrice: 299.0,
    category: "Beauty & Personal Care",
    image: ["/assets/mouth-blue-with-women.webp"]
  },
  {
    id: 54,
    name: "CN Blue Mouth Exerciser – Fast Jaw Sculpting Tool",
    price: 249.0,
    oldPrice: 399.0,
    category: "Beauty & Personal Care",
    image: ["/assets/mouth-black.webp", "/assets/mouth-excersiser.webp"]
  },
  {
    id: 55,
    name: "Portable Neck & Shoulder Massager for Back & Waist Relief",
    price: 249.0,
    oldPrice: 399.0,
    category: "Beauty & Personal Care",
    image: ["/assets/neck-massager.webp"]
  },
  {
    id: 56,
    name: "360° Rotating Waterfall Kitchen Faucet – Touch & Swivel Sink Extender (4 In 1)",
    price: 550.0,
    oldPrice: 699.0,
    category: "Home & Kitchen",
    image: ["/assets/rotating-waterfall-kitchen-faucet.webp", "/assets/kitchen-water-pressure-faucet.webp"]
  },
  {
    id: 57,
    name: "Adhesive Golden & Transparent Heavy Duty Wall Hook",
    price: 199.0,
    oldPrice: 249.0,
    category: "Home Improvement",
    image: ["/assets/wallhook-transparent.webp"]
  },
  {
    id: 58,
    name: "304 Stainless Steel Faucet Mount Water Filter, Water Purifier (1 Set)",
    price: 1099.0,
    oldPrice: 1500.0,
    category: "Home & Kitchen",
    image: ["/assets/mouth-water-filter.webp"]
  },
  {
    id: 59,
    name: "Egg Boiler / Poacher / Cooker / Electric Steamer (2 Layer)",
    price: 549.0,
    oldPrice: 1028.0,
    category: "Home & Kitchen",
    image: ["/assets/egg-boiler.webp"]
  },
  {
    id: 60,
    name: "Electrical Candles Diya LED Tea Light, Plastic Candle Light Candle Candle (24 Pc Set)",
    price: 600.0,
    oldPrice: 1200.0,
    category: "Lighting",
    image: ["/assets/led-latern-24-pieces.webp"]
  },
  {
    id: 61,
    name: "Astronaut Ball Night Lamp",
    price: 399.0,
    oldPrice: 499.0,
    category: "Home Improvement",
    image: [
      "/assets/astronaut-ball-lamp.webp",
      "/assets/same-astronaut-3.webp",
      "/assets/same-astronaut-4.webp",
      "/assets/same-astronaut-5.webp",
      "/assets/same-astronaut-diff-bulls.webp"
    ]
  },
  {
    id: 62,
    name: "Silicone Glove with Multi-Function Blade for Cutting and Cleaning Vegetables, Fruit, Gardening Tool",
    price: 199.0,
    oldPrice: 249.0,
    category: "Home & Kitchen",
    image: ["/assets/finger-protector.webp", "/assets/silicone-finger-protector.webp"]
  },
  {
    id: 63,
    name: "Decoration Candles/Led Candle (5 Pc)",
    price: 349.0,
    oldPrice: 399.0,
    category: "Lighting",
    image: ["/assets/festive-candels.webp"]
  },
  {
    id: 64,
    name: "Makeup Organiser Cosmetic, Skin Care Products Storage Box",
    price: 349.0,
    oldPrice: 399.0,
    category: "Beauty & Personal Care",
    image: ["/assets/makeup-organiser.webp"]
  },
  {
    id: 65,
    name: "Ocean Wave Projector 3D Lamp With Remote",
    price: 449.0,
    oldPrice: 899.0,
    category: "Home Improvement",
    image: ["/assets/3d-lamp-with-remote.webp"]
  },
  {
    id: 66,
    name: "3D Wireless Charging LED Light Lamp for Bedroom",
    price: 2799.0,
    oldPrice: 3500.0,
    category: "Home Improvement",
    image: ["/assets/wireless-charging-lamp.webp"]
  },
  {
    id: 67,
    name: "Dustproof Cloth Cover for ,55 Inch TV Screen Protector",
    price: 699.0,
    oldPrice: 899.0,
    category: "Home Improvement",
    image: ["/assets/dustproof-cloth-cover.webp"]
  },
  {
    id: 68,
    name: "Multipurpose Gloves – Ideal for Washing, Gardening",
    price: 199.0,
    oldPrice: 249.0,
    category: "Home & Kitchen",
    image: ["/assets/multipurpose-gloves.webp"]
  },
  {
    id: 69,
    name: "Festive Lighting LED Tealight Candles : 12 Pack",
    price: 949.0,
    oldPrice: 1200.0,
    category: "Lighting",
    image: ["/assets/flower-led-candle-5p.webp"]
  },
  {
    id: 70,
    name: "Mini Handheld Vacuum Blackhead Remover",
    price: 349.0,
    oldPrice: 399.0,
    category: "Beauty & Personal Care",
    image: ["/assets/blackhead-remover.webp"]
  },
  {
    id: 71,
    name: "Cosmetic Makeup Organizer",
    price: 199.0,
    oldPrice: 249.0,
    category: "Beauty & Personal Care",
    image: ["/assets/jewellery-box.webp"]
  },
  {
    id: 72,
    name: "Gloves Silicone Thumb Knife Finger Protector",
    price: 199.0,
    oldPrice: 249.0,
    category: "Beauty & Personal Care",
    image: ["/assets/silicone-finger-protector.webp"]
  },
  {
    id: 73,
    name: "Kitchen Wall Sealing Strip Tape",
    price: 149.0,
    oldPrice: 175.0,
    category: "Home Improvement",
    image: ["/assets/double-sided-kitchen-tape.webp"]
  },
  {
    id: 74,
    name: "Smokeless Led Light Lantern Lamp (2 Pc)",
    price: 249.0,
    oldPrice: 299.0,
    category: "Home Improvement",
    image: ["/assets/led-latern-2.webp"]
  },
  {
    id: 75,
    name: "Waterproof Rain coat pouch",
    price: 139.0,
    oldPrice: 165.0,
    category: "Garden & Outdoors",
    image: ["/assets/rainpouch.webp"]
  },
  {
    id: 76,
    name: "Plastic Kitchen Press",
    price: 169.0,
    oldPrice: 199.0,
    category: "Home & Kitchen",
    image: ["/assets/kitchen-press.webp"]
  },
  {
    id: 77,
    name: "Silicone Body Back Scrubber",
    price: 169.0,
    oldPrice: 199.0,
    category: "Bathroom Accessories",
    image: ["/assets/back-scrubber-blue.webp"]
  },
  {
    id: 78,
    name: "Silicone Body Back Scrubber Double Side Bathing Brush",
    price: 189.0,
    oldPrice: 220.0,
    category: "Bathroom Accessories",
    image: ["/assets/back-scrubber-different-color.webp", "/assets/back-scrubber-blue.webp"]
  },
  {
    id: 79,
    name: "Handheld Juicer for Lemon",
    price: 265.0,
    oldPrice: 299.0,
    category: "Home & Kitchen",
    image: ["/assets/lemon-squeezer.webp"]
  },
  {
    id: 80,
    name: "Bathing Brush Silicone Scrubber",
    price: 199.0,
    oldPrice: 249.0,
    category: "Bathroom Accessories",
    image: ["/assets/back-scrubber-blue.webp"]
  },
  {
    id: 81,
    name: "Rechargable Electric Arc Lighter",
    price: 295.0,
    oldPrice: 345.0,
    category: "Home & Kitchen",
    image: [
      "/assets/electri-arc-lighter.webp",
      "/assets/arc-lighter-2.webp",
      "/assets/arc-lighter-3.webp",
      "/assets/arc-lighter-4.webp",
      "/assets/arc-lighter-5.webp",
      "/assets/arc-lighter-6.webp"
    ]
  },
  {
    id: 82,
    name: "Kitchen Water Pressure Faucet",
    price: 199.0,
    oldPrice: 249.0,
    category: "Home & Kitchen",
    image: ["/assets/kitchen-water-pressure-faucet.webp"]
  },
  {
    id: 83,
    name: "Silicone Gloves Finger Protector",
    price: 199.0,
    oldPrice: 299.0,
    category: "Garden & Outdoors",
    image: ["/assets/vegetable-and-cleaning-glovers.webp"]
  },
  {
    id: 84,
    name: "4B Erasers 30 Pack",
    price: 249.0,
    oldPrice: 300.0,
    category: "Office Products",
    image: [
      "/assets/48-eraser.webp",
      "/assets/eraser-2.webp",
      "/assets/eraser-3.webp",
      "/assets/eraser-4.webp",
      "/assets/eraser-5.webp",
      "/assets/eraser-6.webp"
    ]
  },
  {
    id: 85,
    name: "M19 Bluetooth Headphones",
    price: 498.0,
    oldPrice: 996.0,
    category: "Mobile & Smart Phone Accessories",
    image: ["/assets/bluetooth-earbuds.webp"]
  },
  {
    id: 86,
    name: "Tws Dual Pairing Earbuds",
    price: 658.0,
    oldPrice: 1316.0,
    category: "Mobile & Smart Phone Accessories",
    image: ["/assets/buds-2.webp"]
  },
  {
    id: 87,
    name: "Flameless Melted Design Candles",
    price: 136.0,
    oldPrice: 156.0,
    category: "Lighting",
    image: [
      "/assets/flameless-melted-candle.webp",
      "/assets/flamless-2.webp",
      "/assets/flameless-3.webp",
      "/assets/flameless-4.webp"
    ]
  },
  {
    id: 88,
    name: "LED Taper Candles",
    price: 299.0,
    oldPrice: 349.0,
    category: "Lighting",
    image: [
      "/assets/led-taper-candles.webp",
      "/assets/led-taper-2.webp",
      "/assets/led-taper-3.webp",
      "/assets/led-taper-4.webp"
    ]
  },
  {
    id: 89,
    name: "Mini Juicer 420ml",
    price: 449.0,
    oldPrice: 599.0,
    category: "Home & Kitchen",
    image: [
      "/assets/mini-juicer.webp",
      "/assets/mini-juicer-2.webp",
      "/assets/mini-juicer-3.webp",
      "/assets/mini-juicer-4.webp",
      "/assets/mini-juicer-5.webp"
    ]
  },
  {
    id: 90,
    name: "Dish Wash Gloves",
    price: 275.0,
    oldPrice: 349.0,
    category: "Home & Kitchen",
    image: [
      "/assets/dishwasher-gloves.webp",
      "/assets/dishwasher-2.webp",
      "/assets/dishwasher-3.webp",
      "/assets/dishwasher-4.webp"
    ]
  },
  {
     id:91,
    "name":"Car Dashboard Mat",
    "price":399.0,
    "oldPrice":599.0,
    "category":"Car & Bike",
    "image":["/assets/car-dashboard.webp",
              "/assets/car-dashboard-2.webp",
              "/assets/car-dashboard-3.webp"  
    ]
  },
  {
    id:92,
    "name":"Car Dust Brush",
    "price":375.0,
    "oldPrice":499.0,
    "category":"Car & Bike",
    "image":["/assets/car-dust.webp",]
  },
  {
    id:93,
    "name":"Blind Spot Mirror",
    "price":299.0,
    "oldPrice":449.0,
    "category":"Car & Bike",
    "image":["/assets/blind-spot-mirror.webp",
              "/assets/blind-spot2.webp",
              "/assets/blind-spot-3.webp",
              "/assets/blind-spot-4.webp",
              "/assets/blind-spot-5.webp"
    ]
  },
  {
     id:94,
    "name":"Vlogging Kit for Video Making",
    "price":599.0,
    "oldPrice":999.0,
    "category":"Mobile & Smart Phone Accessories",
    "image":["/assets/vlogging-kit.webp",
              "/assets/vlogging-kit-2.webp",
              "/assets/vlogging-kit-3.webp",
              "/assets/vlogging-kit-4.webp",
              "/assets/vloggine-kit-5.webp"
    ]
  },
  {
    id:95,
    "name":"Compass Cartoon Box",
    "price":299.0,
    "oldPrice":399.0,
    "category":"Toys & Games",
    "image":["/assets/compass-spider.webp",
              "/assets/compass-spider-2.webp",
              "/assets/compass-spider-4.webp"
    ]
  },
  {
    id:96,
    "name":"baby leg warmer (Knee Guard)",
    "price":null,
    "oldPrice":269.0,
    "category":"Beauty & Personal Care",
    "image":["/assets/baby-leg-warmer.webp",
              "/assets/baby-leg-warmer-2.webp",
              "/assets/baby-leg-warmer-3.webp",
              "/assets/baby-leg-warmer-4.webp"
    ]
  },
  {
    id:97,
    "name":"Digital Alarm Clock",
    "price":null,
    "oldPrice":449.0,
    "category":"Home Improvement",
    "image":["/assets/digital-alarm-clock.webp",
              "/assets/digital-alarm-clock-2.webp",
              "/assets/digital-alarm-clock-3.webp",
              "/assets/digital-alarm-clock-4.webp",
              "/assets/digital-alarm-clock-5.webp"
    ]
  },
  {
    id:98,
    "name":"Powerful Trimming, Portable Electric Shaver",
    "price":null,
    "oldPrice":null,
    "category":"Electronics",
    "image":["/assets/trimmer.webp",
              "/assets/trimmer-2.webp",
              "/assets/trimmer-3.webp",
              "/assets/trimmer-4.webp",
              "/assets/trimmer-5.webp"
    ]
  },
];

export default products;