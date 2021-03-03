export interface Product {
    name: string;
    category_id: number;
    id: number;
    price: number;
    description: string;
    image: string;
    url: string;
    like: number;
}
export const allProducts: Product[] = [
  {
    name: 'Phone XR',
    category_id: 1,
    id: 111,
    price: 799,
    description: 'A large phone with one of the best screens',
    image: 'https://m.media-amazon.com/images/I/51YXG1bDM5L._FMwebp__.jpg',
    url: 'https://www.amazon.com/',
    like: 188
  },
  {
    id: 12,
    category_id: 1,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    url: 'https://www.amazon.com/dp/B0875RT5WS/ref=fs_a_iwp2_4',
    image: 'https://images-na.ssl-images-amazon.com/images/G/01/appcore/phone/AMZ_FamiyStripe_iPhone_8._CB452028334_.png',
    like: 200
  },
  {
    id: 13,
    category_id: 1,
    name: 'Phone Standard',
    price: 299,
    description: 'Good fashion',
    image: 'https://images-na.ssl-images-amazon.com/images/G/01/appcore/phone/AMZ_FamiyStripe_iPhone_7Plus.png',
    url: 'https://www.amazon.com/dp/B0844NJJF3/ref=fs_a_iwp2_5',
    like: 200
  },
  {
    id: 14,
    category_id: 1,
    name: 'headphones',
    description: 'Good sound, cheap',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61ceAnQlxcL._AC_SL1200_.jpg',
    url: 'https://www.amazon.com/Folding-Headphones',
    price: 10,
    like: 3000

  },
  {
    id: 15,
    category_id: 1,
    name: 'Laptop',
    price: 700,
    description: 'Core i5, 128 gb',
    image: 'https://m.media-amazon.com/images/I/91shKLxoedL._AC_UY327_FMwebp_QL65_.jpg',
    url: 'https://www.amazon.com/HP-Chromebook-14-inch-Celeron-14a-na0010nr/dp/B08529TZMC',
    like: 4000

  },
  {
    id: 16,
    category_id: 2,
    name: 'Make-up brushes',
    price: 11.99,
    description: '5 basic bigger makeup brushes and 13 relatively smaller brushes',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61e8FnrLECL._SL1500_.jpg',
    url: 'https://www.amazon.com/KJDJR-Brushes-Synthetic-Foundation-Concealers',
    like: 100
  },
  {
    id: 17,
    category_id: 2,
    name: 'Lipstick',
    price: 12,
    description: 'VEGAN AND CRUELTY-FREE: Get that gorgeous glow, guilt free.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/710munYRMnL._SL1500_.jpg',
    url: 'https://www.amazon.com/Lip-Bar-Vegan-Lipstick-Cougar/dp',
    like: 200
  },
  {
    id: 18,
    category_id: 2,
    name: 'EyeShadow',
    price: 7.99,
    description: ' A big choice of colors',
    image: 'https://images-na.ssl-images-amazon.com/images/I/91biYKJjwUL._SL1500_.jpg',
    url: 'https://www.amazon.com/Eyeshadow-Palette-Pigmented-Waterproof-Sweatproof/dp',
    like: 500
  },
  {
    id: 19,
    category_id: 2,
    name: 'Make up sponges',
    price: 3.99,
    description: 'Easy to clean and reusable',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71Nltpq%2BpfL._SL1500_.jpg',
    url: 'https://www.amazon.com/Sponges-Larbois-Foundation-Blending-Professional/dp/B08PV55VMX',
    like: 700
  },
  {
    id: 20,
    category_id: 2,
    name: 'Rimmel Stay Matte Mattifying Primer',
    price: 5,
    description: 'Good texture',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61qwiquGi%2BL._SL1500_.jpg',
    url: 'https://www.amazon.com/Rimmel-Refines-Smooths-Standalone-Matteifying/dp/B00I9X3UKM',
    like: 800
  },
  {
    id: 21,
    category_id: 3,
    name: 'Zen Bamboo Pillows for Sleeping',
    description: 'Premium',
    price: 44,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61h5sTZHV9L._AC_SL1500_.jpg',
    url: 'https://www.amazon.com/Zen-Bamboo-Ultra-Plush-Pillow/dp/B06XC62W55',
    like: 900
  },
  {
    id: 22,
    category_id: 3,
    name: 'GOHOME Standard Pillows',
    description: 'Premium',
    price: 32,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71M4AvAgh7L._AC_SL1500_.jpg',
    url: 'https://www.amazon.com/GOHOME-Adjustable-Sleeping-Hypoallergenic-Alternative/dp',
    like: 700
  },
  {
    id: 23,
    category_id: 3,
    name: 'Standard Pillows',
    description: 'Premium',
    price: 55,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61ur0tW58JL._AC_SL1000_.jpg',
    url: 'https://www.amazon.com/Coop-Home-Goods-Adjustable-Hypoallergenic/dp/B00EINBSEW',
    like: 1000
  },
  {
    id: 24,
    category_id: 3,
    name: 'Coop Home Goods',
    description: 'Premium',
    price: 30,
    image: 'https://images-na.ssl-images-amazon.com/images/I/819y4ucYISL._AC_SL1500_.jpg',
    url: 'https://www.amazon.com/Coop-Home-Goods-Adjustable-Hypoallergenic/dp/B00EINBSEW',
    like: 101
  },
  {
    id: 25,
    category_id: 3,
    name: 'Utopia Bedding Gusseted Pillow',
    description: 'Premium',
    price: 30,
    image: 'https://images-na.ssl-images-amazon.com/images/I/715lt6xUd0L._AC_SL1500_.jpg',
    url: 'https://www.amazon.com/Utopia-Bedding-Gusseted-Quilted-Premium/dp/B01FXSVBNI',
    like: 280
  },
  {
    id: 26,
    category_id: 4,
    name: ' Basics Pre-sharpened Wood Cased',
    description: 'HB Pencils',
    price: 4,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71y3UUoc1NL._AC_SL1500_.jpg',
    url: 'https://www.amazon.com/AmazonBasics-Pre-sharpened-Wood-Cased-Pencils/dp/B071JM699B',
    like: 269
  },
  {
    id: 27,
    category_id: 4,
    name: 'TICONDEROGA Pencils',
    description: 'HB Pencils',
    price: 3,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81H5KtWsBrL._AC_SL1500_.jpg',
    url: 'https://www.amazon.com/Dixon-Ticonderoga-10-Count-2-Pencil/dp/B002HVXXCW',
    like: 789
  },
  {
    id: 28,
    category_id: 4,
    name: 'TICONDEROGA Pencils',
    description: 'HB Pencils',
    price: 3,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81GRwiGj3NL._AC_SL1500_.jpg',
    url: 'https://www.amazon.com/Dixon-Ticonderoga-10-Count-2-Pencil/dp/B002HVXXCW',
    like: 167
  },
  {
    id: 29,
    category_id: 4,
    name: 'TICONDEROGA Pencils',
    description: 'HB Pencils',
    price: 3,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81Sw-w4b3EL._AC_SL1500_.jpg',
    url: 'https://www.amazon.com/BIC-Xtra-Sparkle-Mechanical-Pencil-24-Count/dp/B0007L1VLO',
    like: 892
  },
  {
    id: 30,
    category_id: 4,
    name: 'pencil',
    description: 'Marked',
    price: 6,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81pOid%2BsbyL._AC_SL1500_.jpg',
    url: 'https://www.amazon.com/BIC-Xtra-Sparkle-Mechanical-Pencil-24-Count/dp/B0007L1VLO',
    like: 123
  }
];
