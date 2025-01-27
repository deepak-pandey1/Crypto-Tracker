import React from 'react'
import { styled } from '@mui/system'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { CryptoState } from '../../CryptoContext'
import { TrendingCoins } from '../../config/api'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { Link } from 'react-router-dom'



const CarouselWrapper = styled('div')({
  height: "50%",
  display: "flex",
  alignItems: "center",
});

const CarouselItemLink = styled(Link)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  textTransform: "uppercase",
  color: "white",
});

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function Carousel() {

  const [trending, setTrending] = useState([]);

  const { currency, symbol } = CryptoState();
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };
  console.log(trending);

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const items = trending.map((coin) => {

    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <CarouselItemLink key={coin.id} to={`/coins/${coin.id}`} style={{ textDecoration: 'none' }}>

        <img
            src={coin?.image}
            alt={coin.name}
            height="80"
            style={{ marginBottom: 10 }}
        />
          
        <span>
          {coin?.symbol}
          &nbsp;

          <span
          style={{
            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
            fontWeight: 750,
          }}>
            {profit && "+"} {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>

        </span>


          <span style={{ fontSize: 22, fontWeight: 500 }}>
            {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
          </span>

      </CarouselItemLink>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <CarouselWrapper>
      <AliceCarousel 
      mouseTracking
      infinite
      autoPlayInterval={1000}
      animationDuration={1500}
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      autoPlay
      items={items}
      />
    </CarouselWrapper>
  )
}

export default Carousel