import React, { useCallback, useEffect, useState } from "react";
import Maintable from "./Maintable";
import rowData from "../utils/csvjson";

import { InitialValue, filterDataType } from "../utils/types";
import ChartComp from "./ChartComp";
import { Tabs } from "antd";
const { TabPane } = Tabs;




const Home: React.FC = () => {
    const [filterData, setFileterData] = useState<filterDataType[]>([]);
    const initialValue: InitialValue = {
        "2020": { avgSalary: 0, jobs: 0 },
        "2021": { avgSalary: 0, jobs: 0 },
        "2022": { avgSalary: 0, jobs: 0 },
        "2023": { avgSalary: 0, jobs: 0 },
        "2024": { avgSalary: 0, jobs: 0 },
    };

    const filterDataFunc = useCallback(() => {
        for (let item of rowData) {
            const year = item["work_year"];
            initialValue[year].jobs += 1;
            initialValue[year].avgSalary += item.salary_in_usd;
        }
        let temp: filterDataType[] = [];
        Object.keys(initialValue).forEach((year) => {
            if (initialValue[year].jobs > 0) {
                initialValue[year].avgSalary =
                    initialValue[year].avgSalary / initialValue[year].jobs;
            }
            temp.push({
                key: Math.random(),
                year: year,
                jobs: initialValue[year].jobs,
                salary: parseFloat(initialValue[year].avgSalary).toFixed(2),
            });
        });
        setFileterData(temp);
    }, []);
    console.log(filterData)

    useEffect(() => {
        filterDataFunc();
    }, []);
    return <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
        <Tabs centered>
            <TabPane tab="Table View" key="1">
                <Maintable filterData={filterData} />

            </TabPane>
            <TabPane tab="Chart View" key="2">
                <ChartComp filterData={filterData} />
            </TabPane>

        </Tabs>
    </div>;
};

export default Home;
