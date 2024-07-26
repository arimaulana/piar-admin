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
import { mockData } from "@providers/data-provider/mock";

export default function ActiveSessionList() {
  // const { tableProps } = useTable({
  //   syncWithLocation: true,
  // });

  return (
    <List>
      {/* <Table {...tableProps} rowKey="id"> */}
      <Table dataSource={mockData.activeSession} rowKey="machineSessionId">
        <Table.Column dataIndex="machineName" title={"Machine"} />
        <Table.Column dataIndex="sessionCode" title={"Session Code"} />
        <Table.Column dataIndex="deviceMacAddr" title={"Device Mac Addr"} />
        <Table.Column dataIndex="sessionDate" title={"Session Start Time"} />
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
