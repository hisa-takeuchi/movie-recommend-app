import { Box, Container } from "@mui/material";

import Questionnaire from "@/features/question/components/Questionnaire";
import { QuestionType } from "@/features/question/types/question";

const fetchQuestions = async (): Promise<QuestionType[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/data/questions.json`,
    { next: { revalidate: 60 } },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch questions");
  }
  const data: QuestionType[] = res.json();

  return data;
};

export default async function Question() {
  const questions = await fetchQuestions();

  return (
    <Container component="main" maxWidth="md">
      <Box mt={8}>
        <Questionnaire questions={questions} />
      </Box>
    </Container>
  );
}
