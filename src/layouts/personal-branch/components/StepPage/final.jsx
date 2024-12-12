import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { request } from "service/base.service";

const Final = () => {
  useEffect(() => {
    request()
      .get("/personal-brand/final-result")
      .then((res) => {
        console.log(res?.data);
      })
      .catch((e) => {
        console.log("---data---", e);
      });
  }, []);
  const data = [
    {
      phase: "Know",
      group: "Reveal",
      topics: [
        "Meet the Expert Behind Vietnam’s Rise in Automotive Tech",
        "From Vietnam to the World: Delivering Cost-Efficient Automotive Solutions",
        "What Makes Vietnam a Global Hub for Embedded Systems Innovation?",
        "The Journey of a Visionary: My Path in Automotive Embedded Systems",
        "Breaking Down Automotive Challenges: How We Deliver Quality with Efficiency",
      ],
    },
    {
      phase: "Riddle",
      group: "Reveal",
      topics: [
        "Guess What Drives the Future of Automotive Innovation?",
        "Can You Solve This Embedded Systems Puzzle?",
        "Which Region is Becoming a Cost-Efficiency Powerhouse in Automotive?",
        "The One Tool Every Automotive Engineer Should Know: Can You Guess?",
        "What Makes a Team Outperform Expectations? Hint: It’s Not Just Skill.",
      ],
    },
    // Add more phases as needed
  ];

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Content Phases and Suggested Topics
      </Typography>
      <Grid container spacing={3}>
        {data.map((phase, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Phase: {phase.phase}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Content Group: {phase.group}
                </Typography>
                <Box mt={2}>
                  {phase.topics.map((topic, idx) => (
                    <Accordion key={idx}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                      >
                        <Typography>{topic}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography variant="body2" color="text.secondary">
                          This is a detailed explanation or rationale for the topic.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Final;
