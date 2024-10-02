import { Card, CardContent, CardMedia, Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React, { FC } from "react";

import { TmdbMovie } from "@/types/api";

const MovieCard: FC<TmdbMovie> = (movie) => {
  const { title, genres, release_date, poster_path, overview, point } = movie;
  // flatrateが存在する場合は、そのプロバイダー名を取得
  const providers =
    "watch/providers" in movie
      ? movie["watch/providers"].results.JP?.flatrate
      : [];
  return (
    <Card
      component="li"
      sx={{
        paddingX: "1.4rem",
        paddingY: "1.8rem",
        display: "flex",
        gap: "2rem",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 250, height: "100%", borderRadius: 1 }}
        image={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt={title}
      />
      <CardContent sx={{ padding: 0 }}>
        <Stack>
          <Typography component="h3" variant="h5" fontWeight="bold">
            {title}
            <Typography ml={1} component="span" fontWeight="normal">
              ({new Date(release_date).getFullYear()}){" "}
            </Typography>
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} mt={1}>
          {genres?.map((genre) => (
            <Typography
              key={genre.id}
              component="span"
              fontSize=".7rem"
              color="text.secondary"
            >
              {genre.name}
            </Typography>
          ))}
        </Stack>
        <Typography mt={2} component="p" fontSize=".9rem" letterSpacing={0.5}>
          {overview}
        </Typography>
        {point && (
          <Stack
            mt={4}
            px={2}
            py={1}
            sx={{
              borderRadius: 1,
              backgroundColor: "#f5f5f5",
            }}
          >
            <Typography component="p" fontSize=".8rem" color="#000">
              {point}
            </Typography>
          </Stack>
        )}
        {providers && providers.length > 0 && (
          <Stack direction="row" spacing={2} mt={5}>
            {providers.map((provider) => (
              <Box key={provider.provider_id}>
                <Image
                  src={`https://image.tmdb.org/t/p/w92/${provider.logo_path}`}
                  alt={provider.provider_name}
                  width={46}
                  height={46}
                  style={{ borderRadius: "10px" }}
                  quality={100}
                />
              </Box>
            ))}
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

export default MovieCard;
