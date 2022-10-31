import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";
import {Helmet} from "react-helmet"

export default function Portfolio() {
    return (
        <>
        <Helmet>
            <title>Portfolio</title>
            <meta
                name="description"
                content="Porfolio page"
            />
        </Helmet>
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
        </>
    );
};