import { v4 as uuidv4 } from "uuid";
import type {
  IProduct,
  IProductCategory,
  IMachine,
  IMachineProduct,
  IMachineSession,
  IMachineSessionHistory,
} from "@interfaces/models";

const generateCategory = (name: string, note?: string): IProductCategory => {
  return {
    productCategoryId: uuidv4(),
    productCategoryName: name,
    note: note || "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isActive: true,
  };
};

const generateProduct = (
  name: string,
  category: IProductCategory,
  price: number,
  stock: number,
  imageUrl?: string,
  note?: string
): IProduct => {
  return {
    productId: uuidv4(),
    productCategoryId: category.productCategoryId,
    productCategoryName: category.productCategoryName,
    productName: name,
    productImageUrl: imageUrl || "",
    productPrice: price,
    productStock: stock,
    note: note || "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isActive: true,
    createdUserId: uuidv4(),
    createdDate: new Date().toISOString(),
    modUserId: uuidv4(),
    modDate: new Date().toISOString(),
  };
};

const foodCategory = generateCategory("Makanan", "Aneka Makanan");
const drinkCategory = generateCategory("Minuman", "Aneka Minuman");
const otherCategory = generateCategory("Lainnya", "Aneka Lainnya");

const foodSample = generateProduct(
  "Frozen Bakmi Jawa",
  foodCategory,
  15000,
  15,
  "/image/product1.jpg",
  "lorem ipsum"
);
const drinkSample = generateProduct(
  "Teh Botol",
  drinkCategory,
  5000,
  50,
  "/image/product2.jpg",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
);
const otherSample = generateProduct(
  "Gunting",
  otherCategory,
  8000,
  20,
  "/images/product3.jpg",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
)

const [machineA, machineB]: IMachine[] = [
  {
    machineId: uuidv4(),
    machineCode: "VEN-001",
    machineName: "Vending 001",
    note: "machine 001",
    isActive: true,
  },
  {
    machineId: uuidv4(),
    machineCode: "VEN-002",
    machineName: "Vending 002",
    note: "machine 002",
    isActive: true,
  },
];

const generateActiveSession = (machine: IMachine): IMachineSession => {
  return {
    machineSessionId: uuidv4(),
    machineId: machine.machineId,
    machineCode: machine.machineCode,
    machineName: machine.machineName,
    clientInfo: "0123.1-23123-1.1239",
    sessionCode: `SES-${(Math.floor(Math.random() * (10000 - 1 + 1)) + 1)
      .toString()
      .padStart(5, "0")}`,
    sessionDate: new Date().toISOString(),
    sessionKey:
      "1e8c2042af33bbc149b1155eaf8ac7e7adf5e287629c6f29ce3281f730bb108e",
  };
};

const generateSessionHistory = (
  machine: IMachine,
  duration: number,
  productPurchased?: IProduct,
  qty?: number,
  payment?: string
): IMachineSessionHistory => {
  const sess = generateActiveSession(machine);
  return {
    ...sess,
    sessionDuration: duration,
    isBuying: productPurchased && qty && qty > 0 ? true : false,
    productId: productPurchased?.productId,
    productName: productPurchased?.productName,
    productPrice: productPurchased?.productPrice,
    productQty: qty || 0,
    paymentMethod: payment,
  };
};

export const mockData = {
  "product-categories": [foodCategory, drinkCategory, otherCategory],
  products: [
    foodSample,
    drinkSample,
    otherSample,
    {
      productId: "5c65fd6b-d2e0-4851-bb5a-03653159d824",
      productCategoryId: foodCategory.productCategoryId,
      productCategoryName: foodCategory.productCategoryName,
      productName: "Nasi Goreng",
      productImageUrl: "/images/product4.jpg",
      productPrice: 15000,
      productStock: 75,
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isActive: true,
      createdUserId: uuidv4(),
      createdDate: "2022-01-01",
      modUserId: uuidv4(),
      modDate: "2022-01-01",
    },
    {
      productId: "5c65fd6b-d2e0-4851-bb5a-03653159d825",
      productCategoryId: drinkCategory.productCategoryId,
      productCategoryName: drinkCategory.productCategoryName,
      productName: "Jus Apel",
      productImageUrl: "/images/product5.jpg",
      productPrice: 7000,
      productStock: 150,
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isActive: true,
      createdUserId: uuidv4(),
      createdDate: "2022-01-01",
      modUserId: uuidv4(),
      modDate: "2022-01-01",
    },
    {
      productId: "5c65fd6b-d2e0-4851-bb5a-03653159d826",
      productCategoryId: otherCategory.productCategoryId,
      productCategoryName: otherCategory.productCategoryName,
      productName: "Kertas A4 1 Rim",
      productImageUrl: "/images/product6.jpg",
      productPrice: 12000,
      productStock: 50,
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isActive: true,
      createdUserId: uuidv4(),
      createdDate: "2022-01-01",
      modUserId: uuidv4(),
      modDate: "2022-01-01",
    },
    {
      productId: "5c65fd6b-d2e0-4851-bb5a-03653159d827",
      productCategoryId: foodCategory.productCategoryId,
      productCategoryName: foodCategory.productCategoryName,
      productName: "Soto Ayam",
      productImageUrl: "/images/product7.jpg",
      productPrice: 18000,
      productStock: 30,
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isActive: true,
      createdUserId: uuidv4(),
      createdDate: "2022-01-01",
      modUserId: uuidv4(),
      modDate: "2022-01-01",
    },
    {
      productId: "5c65fd6b-d2e0-4851-bb5a-03653159d828",
      productCategoryId: drinkCategory.productCategoryId,
      productCategoryName: drinkCategory.productCategoryName,
      productName: "Es Teh Manis",
      productImageUrl: "/images/product8.jpg",
      productPrice: 6000,
      productStock: 100,
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isActive: true,
      createdUserId: uuidv4(),
      createdDate: "2022-01-01",
      modUserId: uuidv4(),
      modDate: "2022-01-01",
    },
    {
      productId: "5c65fd6b-d2e0-4851-bb5a-03653159d829",
      productCategoryId: otherCategory.productCategoryId,
      productCategoryName: otherCategory.productCategoryName,
      productName: "Penggaris",
      productImageUrl: "/images/product9.jpg",
      productPrice: 5000,
      productStock: 150,
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isActive: true,
      createdUserId: uuidv4(),
      createdDate: "2022-01-01",
      modUserId: uuidv4(),
      modDate: "2022-01-01",
    },
    {
      productId: "5c65fd6b-d2e0-4851-bb5a-03653159d830",
      productCategoryId: foodCategory.productCategoryId,
      productCategoryName: foodCategory.productCategoryName,
      productName: "Bakso",
      productImageUrl: "/images/product10.jpg",
      productPrice: 12000,
      productStock: 60,
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isActive: true,
      createdUserId: uuidv4(),
      createdDate: "2022-01-01",
      modUserId: uuidv4(),
      modDate: "2022-01-01",
    },
    {
      productId: "5c65fd6b-d2e0-4851-bb5a-03653159d831",
      productCategoryId: drinkCategory.productCategoryId,
      productCategoryName: drinkCategory.productCategoryName,
      productName: "Jus Jeruk",
      productImageUrl: "/images/product11.jpg",
      productPrice: 7000,
      productStock: 120,
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isActive: true,
      createdUserId: uuidv4(),
      createdDate: "2022-01-01",
      modUserId: uuidv4(),
      modDate: "2022-01-01",
    },
    {
      productId: "5c65fd6b-d2e0-4851-bb5a-03653159d832",
      productCategoryId: otherCategory.productCategoryId,
      productCategoryName: otherCategory.productCategoryName,
      productName: "Kertas HVS 1 Rim",
      productImageUrl: "/images/product12.jpg",
      productPrice: 15000,
      productStock: 40,
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isActive: true,
      createdUserId: uuidv4(),
      createdDate: "2022-01-01",
      modUserId: uuidv4(),
      modDate: "2022-01-01",
    },
  ] as IProduct[],
  machines: [machineA, machineB],
  activeSession: [
    generateActiveSession(machineA),
    generateActiveSession(machineB),
  ],
  sessionHistory: [
    generateSessionHistory(machineA, 180, foodSample, 1, "GoPay"),
    generateSessionHistory(machineA, 200, drinkSample, 2, "GoPay"),
    generateSessionHistory(machineA, 300),
    generateSessionHistory(machineB, 250, otherSample, 1, "GoPay"),
  ],
};
