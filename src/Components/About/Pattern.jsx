import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function Pattern(props) {
  const theme = useTheme();

  return (
    <Timeline position="right">
      {props.items.map((item) => {
        return (
          <TimelineItem key={item.sid}>
            <TimelineOppositeContent
              sx={{
                m: "auto 0",
                color: "#1f8ac0",
                fontWeight: "600",
                fontSize: "10px",
                width: "100px",
                [theme.breakpoints.up("md")]: {
                  fontSize: "15px",
                },
              }}
              align="right"
            >
              {item.duration}
            </TimelineOppositeContent>
            <TimelineSeparator className="">
              <TimelineConnector
                sx={{
                  [theme.breakpoints.up("md")]: {
                    bgcolor: `${item.color}`,
                  },
                }}
              />
              <TimelineDot
                sx={{
                  bgcolor: "#fff",
                  color: "#000",
                  padding: "10px",
                  [theme.breakpoints.up("md")]: {
                    padding: "8px",
                  },
                }}
                className="text-lg md:text-[15px]"
              >
                {item.icon}
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: `${item.color}` }} />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                py: "32px",
                px: 2,
                [theme.breakpoints.up("md")]: {
                  py: "52px",
                  px: 2,
                },
              }}
            >
              <Typography
                variant="h6"
                component="span"
                sx={{
                  fontSize: "9px",
                  [theme.breakpoints.up("md")]: {
                    fontSize: "15px",
                  },
                }}
              >
                {item.what}
              </Typography>
              <Typography
                sx={{
                  color: "gray",
                  fontSize: "8px",
                  [theme.breakpoints.up("md")]: {
                    fontSize: "14px",
                  },
                }}
              >
                {item.where}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
