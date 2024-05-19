import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { FilterDataProps, filterDataType } from "../utils/types";


const columns: TableColumnsType<filterDataType> = [
    {
        title: "Year",
        width: 200,
        dataIndex: "year",
        key: "key",
        sorter: {
            compare: (a: any, b: any) => a.year - b.year,
            multiple: 1,
        },
    },
    {
        title: "Number of jobs",
        width: 200,
        dataIndex: "jobs",
        key: "key",
        sorter: {
            compare: (a: any, b: any) => a.jobs - b.jobs,
            multiple: 1,
        },
    },
    {
        title: "Average Salary($)",
        dataIndex: "salary",
        key: "key",
        width: 200,
        sorter: {
            compare: (a: any, b: any) => a.salary - b.salary,
            multiple: 1,
        },
    },
];

const Maintable: React.FC<FilterDataProps> = ({ filterData }) => {


    return <Table columns={columns} dataSource={filterData} />;
};

export default Maintable;
