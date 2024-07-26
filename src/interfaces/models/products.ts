export type IProductCategory = {
  productCategoryId: string;
  productCategoryName: string;
  note: string;
  isActive: boolean;
};

export type IProduct = {
  productId: string;
  productCategoryId: string;
  productCategoryName: string;
  productName: string;
  productImageUrl: string;
  productPrice: number;
  productStock: number;
  note: string;
  isActive: boolean;
  createdUserId: string;
  createdDate: string;
  modUserId: string;
  modDate: string;
};
