import { styled } from '@mui/system';
import React from "react";
import { Typography } from "@mui/material";
import Carousel from "./Carousel";


// Styled components
const Banner = styled('div')({
  backgroundImage: 'url(./banner2.jpg)',
});

const BannerContent = styled('div')({
  height: 400,
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 25,
  justifyContent: 'space-around',
});

const Tagline = styled('div')({
  display: 'flex',
  height: 400,
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
});

const BannerComponent = () => {
  return (
    <Banner>
      <BannerContent>
      <Tagline>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Hunter
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </Tagline>
        <Carousel />
      </BannerContent>
    </Banner>
  );
};

export default BannerComponent;
