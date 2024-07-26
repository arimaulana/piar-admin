"use client";

import {
  DeleteButton,
  EditButton,
  List,
  ShowButton
} from "@refinedev/antd";
import type { BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";
import React from "react";
import { mockData } from '../../../providers/data-provider/mock';

export default function MachineList() {
  // const { tableProps } = useTable({
  //   syncWithLocation: true,
  // });

  return (
    <List>
      {/* <Table {...tableProps} dataSource={} rowKey="id"> */}
      <Table dataSource={mockData.machines} rowKey="machineId">
        <Table.Column dataIndex="machineName" title={"Name"} />
        <Table.Column dataIndex="machineCode" title={"Code"} />
        <Table.Column dataIndex="note" title={"Note"} />
        <Table.Column
          dataIndex="isActive"
          title={"Status"}
          render={(val, row, idx) => (val ? "Active" : "Inactive")}
        />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.machineId} />
              <ShowButton hideText size="small" recordItemId={record.machineId} />
              <DeleteButton hideText size="small" recordItemId={record.machineId} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
