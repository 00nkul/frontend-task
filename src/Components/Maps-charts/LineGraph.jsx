import React, { useEffect, useState } from "react";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import axios from "axios";

function LineGraph() {
    const [data, setData] = useState([]);
    const [labels, setLabels] = useState([]);
    const [selectedOption, setSelectedOption] = useState("cases"); // Default option is cases

    const options = ["cases", "deaths", "recovered"];

    useEffect(() => {
        // Fetch historical data
        axios
            .get("https://disease.sh/v3/covid-19/historical/all?lastdays=50")
            .then((response) => {
                const historicalData = response.data;
                const labels = Object.keys(historicalData[selectedOption] || {});
                const caseData = Object.values(historicalData[selectedOption] || {});

                setData(caseData);
                setLabels(labels);
            })
            .catch((error) => {
                console.error("Error fetching historical data:", error);
            });
    }, [selectedOption]);

    return (
        <div className="w-full">
            <div className="mb-3">
                <label htmlFor="dataSelector">Select Data:</label>
                <select
                    id="dataSelector"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                        </option>
                    ))}
                </select>
            </div>
            <Line
                className="w-full"
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: `World Wide ${selectedOption}`,
                            data: data,
                            fill: false,
                            borderWidth: 0,
                            backgroundColor: "rgb(0, 0, 0)",
                            borderColor: "red",
                            responsive: true,
                        },
                    ],
                }}
            />
        </div>
    );
}

export default LineGraph;
