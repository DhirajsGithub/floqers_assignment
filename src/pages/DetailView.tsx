import { Tabs, Typography } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import React, { useCallback, useEffect, useState } from 'react'
import TableDetail from './TableDetail';
import ChartDetailComp from './ChartDetailComp';
import rowData from "../utils/csvjson";
import { detailViewDataType } from '../utils/types';
import { useParams } from 'react-router-dom';
const { Title } = Typography

const DetailView: React.FC = () => {
    const [requiredData, setRequiredData] = useState<detailViewDataType[]>([])
    const { year } = useParams<{ year: string }>()

    const filterDataFunc = useCallback(() => {
        const initalObj = {

        }
        for (let item of rowData) {
            if (String(item["work_year"]) === year) {
                if (initalObj[item["job_title"]]) {
                    initalObj[item["job_title"]] += 1;
                } else {
                    initalObj[item["job_title"]] = 1
                }
            }
        }

        let temp: detailViewDataType[] = []
        for (let item of Object.keys(initalObj)) {
            temp.push({ key: Math.random(), jobTitle: item, noOfJobs: initalObj[item] })
        }
        setRequiredData(temp)
    }, [])

    useEffect(() => {
        filterDataFunc()
    }, [])

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Title level={2}>{year} data for jobs and there frequency</Title>
            <Tabs centered>
                <TabPane tab="Table View" key="1">
                    <TableDetail requiredData={requiredData} />

                </TabPane>
                <TabPane tab="Chart View" key="2">
                    <ChartDetailComp requiredData={requiredData} />
                </TabPane>

            </Tabs>
        </div>
    )
}

export default DetailView