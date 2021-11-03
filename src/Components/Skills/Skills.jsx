import "./Skills.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Progress from "../Progress/Progress";
export default function SimplePaper() {
  const skills = [
    {
      val: 60,
      img: "assets/Mysql-removebg-preview.png",
    },
    {
      val: 70,
      img: "assets/Material_UI-removebg-preview.png",
    },
    {
      val: 30,
      img: "assets/MongoDB-removebg-preview.png",
    },
    {
      val: 60,
      img: "https://research.reading.ac.uk/act/wp-content/uploads/sites/2/icons/python.png",
    },
    {
      val: 50,
      img: "assets/node.jpeg",
    },
    {
      val: 80,
      img: "https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667",
    },
    {
      val: 80,
      img: "assets/bootstrap-stack.png",
    },
    {
      val: 87,
      img: "assets/Tailwind.png",
    },
    {
      val: 50,
      img: "assets/DATA-STRUCTURES.png",
    },
    {
      val: 75,
      img: "assets/C.jpeg",
    },
    {
      val: 90,
      img: "assets/HtmlCssJs.png",
    },
    {
      val: 55,
      img: "assets/Java.png",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: '2%',
          width: 128,
          height: "100%",
          borderRadius: 1,
        },
      }}
    >
      {skills.map((skill) => (
        <Paper
          elevation={3}
          children={
            <div className="skillsContainer">
              <Progress val={skill.val} />
              <img className="image" src={skill.img} alt=""></img>
            </div>
          }
        />
      ))}
    </Box>
  );
}
