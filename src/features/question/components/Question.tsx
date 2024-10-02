import {
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  ListItemButton,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import React, { FC } from "react";

import { QuestionType } from "@/features/question/types/question";

interface QuestionProps extends QuestionType {
  onAnswerChange: (value: string) => void;
}

const Question: FC<QuestionProps> = ({
  question,
  keyword,
  answers,
  onAnswerChange,
}) => {
  return (
    <FormControl component="fieldset" fullWidth>
      <Typography
        letterSpacing={1.5}
        textAlign="center"
        fontWeight="bold"
        component="legend"
      >
        {question}
      </Typography>
      <RadioGroup
        aria-label={keyword}
        name={keyword}
        value=""
        onChange={onAnswerChange}
        sx={{ marginTop: 5 }}
      >
        <List sx={{ textAlign: "center" }}>
          {answers.map((answer) => {
            return (
              <ListItem key={answer.value} disablePadding>
                <ListItemButton dense>
                  <FormControlLabel
                    value={answer.label}
                    control={
                      <Radio
                        sx={{
                          "& .MuiSvgIcon-root": {
                            display: "none",
                          },
                        }}
                      />
                    }
                    label={answer.label}
                    sx={{
                      width: "100%",
                      py: 1.5,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </RadioGroup>
    </FormControl>
  );
};

export default Question;
