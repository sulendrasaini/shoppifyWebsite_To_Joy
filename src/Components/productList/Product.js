import Baby_shirt from "../../assets/image/baby-shirt.png"
import dress from "../../assets/image/dress.png"
import hoodie from "../../assets/image/hoodie.png"
import jeans from "../../assets/image/jeans.png"
import leather_jacket from "../../assets/image/leather-jacket.png"
import shirt_dress from "../../assets/image/shirt-dress.png"
import shirt from "../../assets/image/shirt.png"
import skater from "../../assets/image/skater.png"
import skirt from "../../assets/image/skirt.png"
import sleepsuit from "../../assets/image/sleepsuit.png"
import sweater from "../../assets/image/sweater.png"
import tshirt from "../../assets/image/tshirt.png"


const products = [
  {
    id: 1,
    name: "Baby Shirt",
    image: Baby_shirt,
    price: 20,
    oldPrice: 25,
    onSale: false,
    newArrival: true,
    category: "Kids"
  },
  {
    id: 2,
    name: "Dress",
    image: dress,
    price: 45,
    oldPrice: 50,
    onSale: true,
    newArrival: false,
    category: "Women"
  },
  {
    id: 3,
    name: "Hoodie",
    image: hoodie,
    price: 60,
    oldPrice: 70,
    onSale: true,
    newArrival: false,
    category: "Men"
  },
  {
    id: 4,
    name: "Jeans",
    image: jeans,
    price: 55,
    oldPrice: 65,
    onSale: false,
    newArrival: true,
    category: "Men"
  },
  {
    id: 5,
    name: "Leather Jacket",
    image: leather_jacket,
    price: 120,
    oldPrice: 140,
    onSale: true,
    newArrival: false,
    category: "Men"
  },
  {
    id: 6,
    name: "Shirt Dress",
    image: shirt_dress,
    price: 50,
    oldPrice: 60,
    onSale: false,
    newArrival: false,
    category: "Women"
  },
  {
    id: 7,
    name: "Shirt",
    image: shirt,
    price: 35,
    oldPrice: 40,
    onSale: false,
    newArrival: false,
    category: "Men"
  },
  {
    id: 8,
    name: "Skater Outfit",
    image: skater,
    price: 70,
    oldPrice: 80,
    onSale: true,
    newArrival: false,
    category: "Women"
  },
  {
    id: 9,
    name: "Skirt",
    image: skirt,
    price: 40,
    oldPrice: null,
    onSale: false,
    newArrival: true,
    category: "Women"
  },
  {
    id: 10,
    name: "Sleepsuit",
    image:sleepsuit,
    price: 30,
    oldPrice: 35,
    onSale: false,
    newArrival: false,
    category: "Kids"
  },
  {
    id: 11,
    name: "Sweater",
    image: sweater,
    price: 45,
    oldPrice: 55,
    onSale: false,
    newArrival: true,
    category: "Kids"
  },
  {
    id: 12,
    name: "T-Shirt",
    image: tshirt,
    price: 28,
    oldPrice: 35,
    onSale: true,
    newArrival: false,
    category: "Men"
  }
];

export default products;