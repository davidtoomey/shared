import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";

import { MdKeyboardArrowRight } from "react-icons/md";
const Pricing = () => {
  return (
    <Container
      disablegutters="true"
      maxwidth="xl"
      sx={{ pt: 50, pb: 6 }}
      component="main"
      className="pricing-main"
      id="pricing"
    >
      <div className="pricing-heading">
        <Typography
          component="h4"
          variant="h4"
          align="center"
          sx={{ color: "#26425a", fontWeight: "600" }}
          gutterBottom
        >
          Try it free for 14 days
        </Typography>
        <button className="nav-btn">Add to Slack</button>
      </div>
      <div className="pricing-cards-main">
        <PricingCard
          price={9}
          planName="Starter"
          features={{
            feature1: "Unlimited Seats",
            feature2: "Chat GPT 3.5",
            feature3: "50,000  tokens",
            feature4: "37,500 words",
          }}
          btnText="Add to Slack"
        />
        <PricingCard
          price={20}
          planName="Business"
          features={{
            feature1: "Unlimited Seats",
            feature2: "Chat GPT 4 Turbo",
            feature3: "100,000  tokens",
            feature4: "75,000 words",
          }}
          btnText="Add to Slack"
        />
        <PricingCard
          price={100}
          planName="Teams"
          features={{
            feature1: "Unlimited Seats",
            feature2: "Chat GPT 4 Turbo",
            feature3: "750,000  tokens",
            feature4: "560,000 words",
          }}
          btnText="Add to Slack"
        />
        <PricingCard
          planName="Custom"
          features={{
            feature1: "One-time purchase",
            feature2: "Custom AI personalities",
            feature3: "Integeration with model of your choice",
            feature4: "Option to plug in your Azure OpenAI account",
          }}
          btnText="Talk to Sales"
          emailLink="info@peznetsolutions.com"
        />
      </div>
    </Container>
  );
};
const PricingCard = (props) => {
  return (
    <div className="pricing-card">
      <Typography
        component="h4"
        variant="h4"
        align="left"
        sx={{ color: "#26425a", fontWeight: "600" }}
        gutterBottom
      >
        {props.planName}
      </Typography>
      {props.price && (
        <Typography
          component="h4"
          variant="h4"
          align="left"
          sx={{ color: "#576b73", fontWeight: "300" }}
          gutterBottom
        >
          ${props.price}/<span className="pricing-card-month">mon</span>
        </Typography>
      )}
      <ul>
        <li>
          <MdKeyboardArrowRight />
          {props.features.feature1}
        </li>
        <li>
          <MdKeyboardArrowRight />

          {props.features.feature2}
        </li>
        <li>
          <MdKeyboardArrowRight />

          {props.features.feature3}
        </li>
        <li>
          <MdKeyboardArrowRight />

          {props.features.feature4}
        </li>
      </ul>
      {props.emailLink ? (
        <a href={`mailto:${props.emailLink}`} className="nav-btn">
          {props.btnText}
        </a>
      ) : (
        <button className="nav-btn">{props.btnText}</button>
      )}
    </div>
  );
};

export default Pricing;
