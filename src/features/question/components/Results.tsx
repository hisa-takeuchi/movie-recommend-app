import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { FC } from "react";

import MovieCard from "@/features/question/components/MovieCard";
import { TmdbMovie } from "@/types/api";

interface Props {
  results: TmdbMovie[];
}

const Results: FC<Props> = ({ results }) => {
  return (
    <Box>
      <Typography textAlign="center" variant="h5" component="h2" mb={5}>
        あなたにおすすめの映画はこちら
      </Typography>
      <Stack component="ul" pl={0} spacing={5}>
        {results.map((result, index) => (
          <MovieCard key={index} {...result} />
        ))}
      </Stack>
    </Box>
  );
};

export default Results;
