"use client";

import { mockData } from "@providers/data-provider/mock";
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

export default function ProductList() {
  // const { tableProps } = useTable({
  //   syncWithLocation: true,
  // });

  return (
    <List>
      {/* <Table {...tableProps} rowKey="id"> */}
      <Table dataSource={mockData.products} rowKey="productId" >
        <Table.Column dataIndex="productName" title={"Name"} />
        <Table.Column dataIndex="productCategoryName" title={"Category"} />
        <Table.Column dataIndex="productPrice" title={"Price"} />
        <Table.Column dataIndex="productStock" title={"Stock"} />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
