import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { CryptoState } from '../CryptoContext';
import { HistoricalChart } from '../config/api';
import { chartDays } from "../config/data";
import SelectButton from "./SelectButton";

// Register Required Chart.js Components Import and register the necessary components from Chart.js before using the Line chart.
// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const Container = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  padding: 40px;

  @media (max-width: 960px) {
    width: 100%;
    margin-top: 0;
    padding: 20px;
    padding-top: 0;
  }
`;

function CoinInfo({ coin }) {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();

  const fetchHistoricData = async () => {
    try {
      const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
      setHistoricData(data.prices);
    } catch (error) {
      console.error('Error fetching historical data:', error);
    }
  };

  useEffect(() => {
    fetchHistoricData();
  }, [currency, days]);

  const darkTheme = createTheme({
    palette: {
      primary: { main: '#fff' },
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        {!historicData ? (
          <CircularProgress style={{ color: 'gold' }} size={250} thickness={1} />
        ) : (
        <>
          <Line
            data={{
              labels: historicData.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),
              datasets: [
                {
                  data: historicData.map((coin) => coin[1]),
                  label: `Price ( Past ${days} Days ) in ${currency}`,
                  borderColor: '#EEBC1D',
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />

          <div
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {chartDays.map((day) => (
              <SelectButton
                key={day.value}
                onClick={() => setDays(day.value)}
                selected={day.value === days}
              >
                {day.label}
              </SelectButton>
            ))}
          </div>

        </>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default CoinInfo;
