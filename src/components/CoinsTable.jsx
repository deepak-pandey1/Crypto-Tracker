import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { CoinList } from '../config/api'
import { CryptoState } from '../CryptoContext'
import { Container, createTheme, TextField, ThemeProvider, Typography } from '@mui/material'
import { LinearProgress, Paper, Table, TableContainer, TableHead, TableRow, TableCell } from '@mui/material'
import { TableBody } from '@mui/material'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";


export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}




function CoinsTable() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    const { currency, symbol } = CryptoState();

    const fetchCoins = async () => {
        setLoading(true);
        const { data } = await axios.get(CoinList(currency));
        console.log(data);
    
        setCoins(data);
        setLoading(false);
    };
    
    
    useEffect(() => {
        fetchCoins();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency]);

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
        },
            type: "dark",
        },
    });

    const handleSearch = () => {
        return coins.filter(
            (coin) =>
            coin.name.toLowerCase().includes(search) ||
            coin.symbol.toLowerCase().includes(search)
        );
    };

     // Styled-components for table row
    const TableRowStyled = styled(TableRow)`
        background-color: #16171a;
        cursor: pointer;
        &:hover {
            background-color: #131111;
    }`;

    const StyledPagination = styled(Pagination)(({ theme }) => ({
        "& .MuiPaginationItem-root": {
          color: "gold",
        },
    }));

    const navigate = useNavigate();


    return (
        <ThemeProvider theme={darkTheme}>
            <Container style={{ textAlign: "center" }}>
                <Typography
                    variant="h4"
                    style={{ margin: 18, fontFamily: "Montserrat" }}
                >
                    Cryptocurrency Prices by Market Cap
                </Typography>

                <TextField
                    label="Search For a Crypto Currency.."
                    variant="outlined"
                    style={{ marginBottom: 20, width: "100%" }}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <TableContainer>
                    {loading ? (
                        <LinearProgress style={{ backgroundColor: "gold" }} />
                    ) : (
                        <Table>
                            <TableHead style={{ backgroundColor: "#EEBC1D" }}>
                                <TableRow>
                                    {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                                        <TableCell
                                            style={{
                                                color: "black",
                                                fontWeight: "700",
                                                fontFamily: "Montserrat",
                                                textAlign: head === "Coin" ? "left" : "right",
                                                padding: "10px",
                                                width: head === "Coin" ? "30%" : "20%", // Adjust column widths for equal spacing
                                              
                                            }}
                                            key={head}
                                            align={head === "Coin" ? "" : "right"}
                                        >
                                        {head}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {handleSearch()
                                .slice((page - 1) * 10, (page - 1) * 10 + 10)
                                .map((row) => {
                                    const profit = row.price_change_percentage_24h > 0;

                                    return (
                                        <TableRowStyled
                                            onClick={() => navigate(`/coins/${row.id}`)}
                                            key={row.name}
                                        >
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                style = {{
                                                    display: "flex",
                                                    gap: 15,
                                                    color: "white", // Set text color to white
                                                }}
                                                >
                                                    <img
                                                        src={row?.image}
                                                        alt={row.name}
                                                        height="50"
                                                        style={{ marginBottom: 10 }}
                                                    />

                                                    <div
                                                      style={{ display: "flex", flexDirection: "column" }}
                                                    >
                                                      <span
                                                        style={{
                                                          textTransform: "uppercase",
                                                          fontSize: 22,
                                                        }}
                                                      >
                                                        {row.symbol}
                                                      </span>
                                                      <span style={{ color: "darkgrey" }}>{row.name}</span>
                                                    </div>
                                            </TableCell>

                                            <TableCell align="right" style={{ color: "white" }}>
                                                {symbol}{" "}
                                                {numberWithCommas(row.current_price.toFixed(2))}
                                            </TableCell>
                                            
                                            <TableCell
                                                align="right"
                                                style={{
                                                    color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                                                    fontWeight: 500,
                                                }}
                                            >
                                                  {profit && "+"}
                                                  {row.price_change_percentage_24h.toFixed(2)}%
                                            </TableCell>

                                            <TableCell align="right" style={{ color: "white" }}>
                                                {symbol}{" "}
                                                {numberWithCommas(
                                                    row.market_cap.toString().slice(0, -6)
                                                )}
                                                M
                                            </TableCell>
                                                
                                        </TableRowStyled>
                                    );


                                })}
                            </TableBody>

                        </Table>
                    )}
                </TableContainer>

                {/* Comes from @material-ui/lab */}
                <StyledPagination
                    count={(handleSearch()?.length / 10).toFixed(0)}
                    style={{
                        padding: 20,
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                    onChange={(_, value) => {
                      setPage(value);
                      window.scroll(0, 450);
                    }}
                />

            </Container>
        </ThemeProvider>
    )
}

export default CoinsTable