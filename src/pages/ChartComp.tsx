import React, { useContext } from "react";
import { FilterDataProps } from "../utils/types";
import { generalContext } from "../provider/authContext";
import { LineChart } from "@mui/x-charts";

const ChartComp: React.FC<FilterDataProps> = ({ filterData }) => {
  const ctx = useContext(generalContext);
  const uData = filterData.map((item) => Number(item.jobs));
  const pData = filterData.map((item) => Number(item.salary));
  const xLabels = filterData.map((item) => item.year);
  console.log(uData);

  return (
    <div>
      <LineChart
        slotProps={{
          legend: {
            labelStyle: {

              fill: ctx.isDark ? "#fff" : "black",
            },
          },
        }}
        width={700}
        height={400}
        sx={{
          overflow: "scroll",
          width: "400px",
          height: "300px",
          //change left yAxis label styles
          "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
            // strokeWidth: "0.4",
            fill: ctx.isDark ? "#fff" : "black",
          },
          "& .MuiChartsAxis-right .MuiChartsAxis-tickLabel": {
            // strokeWidth: "0.4",
            fill: ctx.isDark ? "#fff" : "black",
          },

          // change bottom label styles
          "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
            strokeWidth: "0.5",
            fill: ctx.isDark ? "#fff" : "black",
          },
          // bottomAxis Line Styles
          "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
            stroke: ctx.isDark ? "#fff" : "black",
          },

          "& .MuiChartsAxis-left .MuiChartsAxis-line": {
            stroke: ctx.isDark ? "#fff" : "black",
          },
          "& .MuiChartsAxis-right .MuiChartsAxis-line": {
            stroke: ctx.isDark ? "#fff" : "black",
          },
          ".MuiBarElement-series-l_id": {
            "& .MuiChartsBar-root": {
              fill: "red",
            },
          },
        }}
        series={[
          { data: pData, label: "Avg. Salary", yAxisKey: "leftAxisId" },
          { data: uData, label: "No of Jobs", yAxisKey: "rightAxisId" },
        ]}
        xAxis={[
          {
            scaleType: "point",
            data: xLabels,
            label: "Year",
            labelStyle: { backgroundColor: "#fff" },
          },
        ]}
        yAxis={[
          { id: "leftAxisId", labelStyle: { fill: "red !imporant" } },
          { id: "rightAxisId" },
        ]}
        rightAxis="rightAxisId"
      />
    </div>
  );
};
export default ChartComp;
