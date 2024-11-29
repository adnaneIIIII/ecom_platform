"use client";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import React from "react";

const data = [
  { Value: 12, date: "Mar-02" },
  { Value: 18, date: "Mar-03" },
  { Value: 50, date: "Mar-08" },
  { Value: 20, date: "Mar-12" },
  { Value: 12, date: "Mar-16" },
];
type charttype = {
  data: {
    date: string;
    totalSales: number;
  }[];
};

function CharacterData() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart width={700} height={300} data={data}>
        <XAxis dataKey={"date"} className="" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="Value" stroke="#5226ff" />

      </LineChart>
    </ResponsiveContainer>
  );
}

export default CharacterData;
