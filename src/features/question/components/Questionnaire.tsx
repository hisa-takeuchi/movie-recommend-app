"use client";

import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FC, useState } from "react";

import Question from "@/features/question/components/Question";
import Results from "@/features/question/components/Results";
import { QuestionnaireType } from "@/features/question/types/question";
import { TmdbMovie } from "@/types/api";

const Questionnaire: FC<QuestionnaireType> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState<TmdbMovie[]>([]);
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  const currentQuestion = questions[currentQuestionIndex];

  const handleBack = () => {
    setCurrentQuestionIndex((currentIndex) => Math.max(0, currentIndex - 1));
  };

  const handleNext = async (e: ChangeEvent<HTMLInputElement>) => {
    const question = currentQuestion.question;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: e.target.value,
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setLoading(true);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL as string}/api/answers`,
          {
            method: "POST",
            body: JSON.stringify(answers),
          },
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = (await response.json()) as TmdbMovie[];
        console.log(data);
        setResults(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <Box>
          <Typography align="center" component="p">
            ただいま、あなたにピッタリな作品をリコメンド中です
            <br />
            少々お待ち下さい。
          </Typography>
        </Box>
      ) : (
        <Box>
          {results.length > 0 ? (
            <Results results={results} />
          ) : (
            <Card sx={{ padding: 5 }}>
              <CardContent>
                <Question onAnswerChange={handleNext} {...currentQuestion} />
              </CardContent>
            </Card>
          )}
          <Box mt={2}>
            {results.length > 0 ? (
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setCurrentQuestionIndex(0);
                  setResults([]);
                  router.push("/");
                }}
              >
                TOPへ戻る
              </Button>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                onClick={handleBack}
                disabled={currentQuestionIndex === 0}
              >
                前へ
              </Button>
            )}
          </Box>
        </Box>
      )}
    </>
  );
};

export default Questionnaire;
