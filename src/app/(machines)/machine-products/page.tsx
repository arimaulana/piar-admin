"use client";

import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import type { BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";
import React, { useEffect } from "react";

const mockedData: IMachineProduct[] = [
  {
    machineProductId: "5c65fd6b-d2e0-4851-bb5a-03653159d821",
    machineId: "5c65fd6b-d2e0-4851-bb5a-03653159d821",
    productId: "5c65fd6b-d2e0-4851-bb5a-03653159d821",
    productCategoryId: "5c65fd6b-d2e0-4851-bb5a-03653159d821",
    machineCode: "VEN-001",
    machineName: "Vending 001",
    productCategoryName: "Makanan",
    productName: "Frozen Bakmi Jawa",
    productImageUrl: "/images/product1.jpg",
    productPrice: 10000,
    productStock: 100,
    isActive: true,
  },
  {
    machineProductId: "5c65fd6b-d2e0-4851-bb5a-03653159d822",
    machineId: "5c65fd6b-d2e0-4851-bb5a-03653159d821",
    productId: "5c65fd6b-d2e0-4851-bb5a-03653159d821",
    productCategoryId: "5c65fd6b-d2e0-4851-bb5a-03653159d821",
    machineCode: "VEN-001",
    machineName: "Vending 001",
    productCategoryName: "Minuman",
    productName: "Teh Botol",
    productImageUrl: "/images/product1.jpg",
    productPrice: 5000,
    productStock: 50,
    isActive: true,
  },
];

export default function MachineProductList() {
  // const { tableProps } = useTable({
  //   syncWithLocation: true,
  // });

  return (
    <List>
      {/* <Table {...tableProps} rowKey="id"> */}
      <Table dataSource={mockedData} rowKey="machineProductId">
        <Table.Column dataIndex="productName" title={"Name"} />
        <Table.Column dataIndex="productCategoryName" title={"Category"} />
        <Table.Column dataIndex="productPrice" title={"Price"} />
        <Table.Column dataIndex="productStock" title={"Stock"} />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.machineProductId} />
              <ShowButton hideText size="small" recordItemId={record.machineProductId} />
              <DeleteButton hideText size="small" recordItemId={record.machineProductId} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
