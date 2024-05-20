import React, { useContext, useEffect, useState } from 'react'
import { TableDetailProps } from '../utils/types'
import { Typography } from 'antd';
import { PieChart } from '@mui/x-charts';
import { useParams } from 'react-router-dom';
import { generalContext } from '../provider/authContext';
const { Title } = Typography

type pieCartType = {
  id: React.Key;
  value: number;
  label: string;
}

const ChartDetailComp: React.FC<TableDetailProps> = ({ requiredData }) => {

  const ctx = useContext(generalContext)
  console.log(ctx.isDark)
  const [top10Jobs, setTop10Jobs] = useState([])
  const { year } = useParams<{ year: string }>()
  useEffect(() => {
    const filterTop10 = [...requiredData];
    filterTop10.sort((a, b) => {
      return b.noOfJobs - a.noOfJobs;
    })
    let p: pieCartType[] = []
    for (let item of filterTop10.slice(0, 10)) {
      p.push({ id: item.key, value: item.noOfJobs, label: item.jobTitle })
    }
    setTop10Jobs(p);
  }, [])

  return (
    <div>
      <Title level={3}>Top 10 jobs in {year}</Title>
      <PieChart
        series={[
          {
            data: top10Jobs,
            color: "red",
          },

        ]}

        sx={{
          "& .fsdMuiPieArcLabel-highlighted": {
            fill: '#fff !important',
            fontWeight: 'bold',
            color: "#fff",
          },

          "& text": {
            fill: ctx.isDark ? "#fff !important" : "black",
          }
        }}


        width={1000}
        height={500}
      />
    </div>
  )
}

export default ChartDetailComp