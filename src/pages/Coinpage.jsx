import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { SingleCoin } from '../config/api'
import { CryptoState } from '../CryptoContext'
import styled from "styled-components";
import CoinInfo from '../components/CoinInfo'
import { Typography } from '@mui/material'
import { numberWithCommas } from '../components/CoinsTable'
import { LinearProgress } from '@mui/material'




// Styled Components
const Container = styled.div`
  display: flex;
  // flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Sidebar = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  border-right: 2px solid grey;
  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
  }
`;

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: 20,
  fontFamily: "Montserrat",
}));

const Description = styled(Typography)(({ theme }) => ({
  width: "90%",
  fontFamily: "Montserrat",
  padding: 25,
  paddingBottom: 15,
  paddingTop: 0,
  textAlign: "justify",
}));




function Coinpage() {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  
  const { currency, symbol } = CryptoState();
  
  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };
  
  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <Container>
      <Sidebar>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
          />
          <Heading variant="h3">{coin?.name}</Heading>
          <Description variant="subtitle1">
            {(coin?.description.en.split(". ")[0])}.
          </Description>

          <div
            style={{
              alignSelf: "start",
              padding: 25,
              paddingTop: 10,
              width: "90%",
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
              alignItems: "center",
              "@media (max-width: 960px)": { // Example of applying the responsive styles inline
                display: "flex",
                justifyContent: "space-around",
              },
              "@media (max-width: 600px)": {
                flexDirection: "column",
                alignItems: "center",
              },
              "@media (max-width: 400px)": {
                alignItems: "start",
              },
            }}
          >

          <span style={{ display: "flex" }}>
            <Heading variant="h5">Rank:</Heading>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Heading variant="h5">Current Price:</Heading>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Heading variant="h5">Market Cap:</Heading>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>

          </div>


      </Sidebar>
      {/* chart */}
      <CoinInfo coin={coin} />
    </Container>
  )
}

export default Coinpage