import React from "react";
import { TableDetailProps, detailViewDataType } from "../utils/types";
import { Table, TableColumnsType } from "antd";

const TableDetail: React.FC<TableDetailProps> = ({ requiredData }) => {

    const columns: TableColumnsType<detailViewDataType> = [
        {
            title: "Job Title",
            width: 200,
            dataIndex: "jobTitle",
            key: "key",
            sorter: {
                compare: (a: any, b: any) => a.jobTitle.localeCompare(b.jobTitle),
                multiple: 1,
            },
        },
        {
            title: "Number of jobs",
            width: 200,
            dataIndex: "noOfJobs",
            key: "key",
            sorter: {
                compare: (a: any, b: any) => a.noOfJobs - b.noOfJobs,
                multiple: 1,
            },
        },

    ];
    return (
        <Table
            scroll={{ x: 800 }}
            columns={columns}
            dataSource={requiredData}
        />
    );
};

export default TableDetail;
