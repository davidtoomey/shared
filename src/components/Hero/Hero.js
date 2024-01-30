import { Container, Typography } from "@mui/material";
import lockImg from "../../assets/lock.png";
const Hero = () => {
  return (
    <Container
      disableGutters
      maxWidth="xl"
      component="main"
      className="main-hero"
    >
      <Container
        disableGutters
        maxWidth="md"
        component="main"
        sx={{ pt: 20, pb: 6, pl: 5, pr: 5 }}
        className=""
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          sx={{ color: "#26425a", fontWeight: "700", textAlign: "left" }}
          gutterBottom
          className="hero-main-heading"
        >
          The AI Slackbot that doesn't compromise data security.
        </Typography>
        <img alt="security" className="hero-img" src={lockImg} />
      </Container>
    </Container>
  );
};

export default Hero;
