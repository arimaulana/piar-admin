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
import React from "react";

export default function CategoryList() {
  // const { tableProps } = useTable({
  //   syncWithLocation: true,
  // });

  return (
    <List>
      {/* <Table {...tableProps} rowKey="id"> */}
      <Table
        dataSource={mockData["product-categories"]}
        rowKey="productCategoryId"
      >
        <Table.Column dataIndex="productCategoryName" title={"Name"} />
        <Table.Column dataIndex="note" title={"Note"} />
        <Table.Column
          dataIndex="isActive"
          title={"Status"}
          render={(val) => (val ? "Active" : "Inactive")}
        />
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
