import * as React from "react";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import './MyTimeline.css'
import timelines from "./Timelines";
import { Button } from "@mui/material";
const  MyTimeline = () => {
  let workIcon = { background: "#e66" };
  let schoolIcon = { background: "#ee5" };
  return (
    <>
      <VerticalTimeline>
        {timelines.map((timeline) => {
          let isWork = timeline.icon === "work";
          return (
            <VerticalTimelineElement
              key={timeline.id}
              date={timeline.date}
              dateClassName="date"
              iconStyle={isWork ? workIcon : schoolIcon}
            >
              <h3 className="vertical-timeline-element-title">
                {timeline.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {timeline.location}
              </h5>
              <p id="description">{timeline.description}</p>
            <Button style={{border:'2px dashed #ee5', color: "#40ad"}} variant="outlined"  size="large" href="https://github.com/Thiraphat-DEV">GITHUB</Button>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </>
  );
}

export default MyTimeline;
