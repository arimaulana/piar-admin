"use client";

import { DeleteButton, EditButton, List, ShowButton } from "@refinedev/antd";
import type { BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";
import { Tag } from "antd/lib";
import React, { useEffect, useState } from "react";
import { mockData } from "@providers/data-provider/mock";

export default function SessionHistoryList() {
  // const { tableProps } = useTable({
  //   syncWithLocation: true,
  // });

  return (
    <List>
      {/* <Table {...tableProps} rowKey="id"> */}
      <Table dataSource={mockData.sessionHistory} rowKey="machineSessionId">
        <Table.Column dataIndex="machineName" title={"Machine"} />
        <Table.Column dataIndex="sessionCode" title={"Session Code"} />
        <Table.Column dataIndex="clientInfo" title={"Client Key"} />
        <Table.Column dataIndex="productName" title={"Product"} />
        <Table.Column dataIndex="paymentMethod" title={"Payment"} />
        <Table.Column dataIndex="sessionDuration" title={"Session Duration"} />
        <Table.Column
          dataIndex="isBuying"
          title={"Status"}
          render={(val) => (
            <Tag color={val ? "green" : "warning"}>
              {val ? "Buying" : "Non-Buying"}
            </Tag>
          )}
        />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton
                hideText
                size="small"
                recordItemId={record.machineProductId}
              />
              <ShowButton
                hideText
                size="small"
                recordItemId={record.machineProductId}
              />
              <DeleteButton
                hideText
                size="small"
                recordItemId={record.machineProductId}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
