import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Zotac Gtx 1080",
    img: "https://www.zotac.com/download/files/news/desc/images/1080amp_extreme_01.png",
    price: 25000,
    categoryName: "gpu",
    ratings: "4",
  },
  {
    _id: uuid(),
    title: "MSI Gtx 1650",
    img: "https://m.media-amazon.com/images/I/61rzWyQBAoL._AC_SX450_.jpg",
    price: 11000,
    categoryName: "gpu",
    ratings: "3",
  },
  {
    _id: uuid(),
    title: "Ryzen 7 5800x",
    img: "https://m.media-amazon.com/images/I/61DYLoyNRWL._SL1384_.jpg",
    price: 32900,
    categoryName: "cpu",
    ratings: "4.5",
  },
  {
    _id: uuid(),
    title: "Core I7 12700K",
    img: "https://primeabgb-cdn.sgp1.digitaloceanspaces.com/wp-content/uploads/2021/10/Core-i7-12700K-1-300x300.jpg",
    price: 53000,
    categoryName: "cpu",
    ratings: "4",
  },
  {
    _id: uuid(),
    title: "Asys B450-F Gaming",
    img: "https://m.media-amazon.com/images/I/71Ihkth84gL._AC_SY450_.jpg",
    price: 16000,
    categoryName: "motherboard",
    ratings: "3.5",
  },
  {
    _id: uuid(),
    title: "Msi B550 Tomahawk",
    img: "https://m.media-amazon.com/images/I/91wX64okZ7L._SL1500_.jpg",
    price: 17000,
    categoryName: "motherboard",
    ratings: "4",
  },
];
