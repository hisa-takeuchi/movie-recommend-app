import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Link href="/question">
        <Button variant="contained">AIに診断してもらう</Button>
      </Link>
    </Container>
  );
}
