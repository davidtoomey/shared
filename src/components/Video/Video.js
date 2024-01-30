import React from "react";
import { Container, Typography } from "@mui/material";
import { MdKeyboardArrowRight } from "react-icons/md";



const Video = () => {
  return (
    <main className="video-container">
      <Container
        disableGutters
        maxWidth="md"
        className=""
        sx={{ pl: 3, pr: 3,
          "@media (max-width: 768px)": {
           paddingLeft: "42px",
           paddingRight: "42px"
          }
        }}
        id="features"
        
      >
        <Typography
          component="h4"
          variant="h4"
          sx={{
            color: "#fff",
            fontWeight: "600",
          }}
          gutterBottom
        >
          ChatGPT can't be trusted with confidential data.
        </Typography>
        <div className="video-main">
          <div className="video-left">
            <p style={{marginTop: 0}}>
              Business across industries are the banning the use ChatGPT because
              any data you prompt it with is usedto train the AI
            </p>
            <Typography
              component="h4"
              variant="h4"
              align="left"
              sx={{ color: "#fff", fontWeight: "600" }}
              className="video-list-heading"
              gutterBottom
            >
              The Insight Slackbot Offers:
            </Typography>
            <ul>
              <li>
                <MdKeyboardArrowRight />A Secure Environment
              </li>
              <li>
                <MdKeyboardArrowRight />
                Integeration Directly to Slack
              </li>
              <li>
                <MdKeyboardArrowRight />
                Pricing based on usage,not per seat
              </li>
              <li>
                <MdKeyboardArrowRight />
                Tailored Ai personalitiesto fit your industry
              </li>
            </ul>
          </div>
          <div className="video-right">
            <iframe
              src="https://www.youtube.com/embed/9wqRMHDp2Ow?si=IubZv_Fg9X_2pYIk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Video;
