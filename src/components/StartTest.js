import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Typography,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import Stack from "@mui/material/Stack";

import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { useLocation } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./style.css";

export const StartTest = () => {
  const { state } = useLocation();
  console.log(state);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [checked, setChecked] = useState("");
  const [CorrectAns, setCorrectAns] = useState();
  const [AnswerData, setAnswerData] = useState([]);
  const [pieChartData, setpieChartData] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isReportGenerate, setIsReportGenerate] = useState(true);
  const [isNoReport, setIsNoReport] = useState(false);
  const [Ischecked, setIschecked] = useState(false);

  //const TestData = params;
  const TestData = state;
  const handleChange = (event) => {
    setIschecked(event.target.checked);
  };
  //console.log("starttest data--->>", JSON.stringify(TestData))
  const renderAnswers = (type, ans, quesId) => {
    //console.log("type--->>", type, "ans--->>", ans, "quesId-->>", quesId)

    switch (type) {
      case "Multiple-choice":
        return (
          //console.log(item.ansName)
          <div>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                {ans.map((item) => (
                  <div className="container" style={{ flexDirection: "row" }}>
                    <Card className="options">
                      <FormControlLabel
                        value={item.ansName}
                        control={<Radio />}
                        label={item.ansName}
                        onClick={() => setChecked(item.ansName)}
                      />
                    </Card>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        );
      case "trueFalse":
        return (
          //console.log(item.ansName)
          <>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                {ans.map((item) => (
                  <div className="container" style={{ flexDirection: "row" }}>
                    <Card className="options">
                      <FormControlLabel
                        value={item.ansName}
                        control={<Radio />}
                        label={item.ansName}
                        onClick={() => setChecked(item.ansName)}
                      />
                    </Card>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
          </>
        );
      case "fill-In-The-Blank":
        return (
          //console.log(item.ansName)
          <>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                {ans.map((item) => (
                  <div className="container" style={{ flexDirection: "row" }}>
                    <Card className="options">
                      <FormControlLabel
                        value={item.ansName}
                        control={<Radio />}
                        label={item.ansName}
                        onClick={() => setChecked(item.ansName)}
                      />
                    </Card>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
          </>
        );
      case "Match-the-following":
        return (
          //console.log(item.ansName)
          <>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                {ans.map((item) => (
                  <div className="container" style={{ flexDirection: "row" }}>
                    <Card className="options">
                      <FormControlLabel
                        value={item.ansName}
                        control={<Radio />}
                        label={item.ansName}
                        onClick={() => setChecked(item.ansName)}
                      />
                    </Card>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
          </>
        );
      case "multiSelect":
        return (
          //console.log(item.ansName)
          <>
            <FormControl>
              {ans.map((item) => (
                <div className="container" style={{ flexDirection: "row" }}>
                  <Card className="options">
                    <FormControlLabel
                      value={item.ansName}
                      control={<Checkbox />}
                      label={item.ansName}
                      onClick={() => setChecked(item.ansName)}
                    />
                  </Card>
                </div>
              ))}
            </FormControl>
          </>
        );
    }
  };
  const generateReport = (ansData) => {
    console.log("ansData--->>", ansData);
    let temp = [];
    let correctCount = 0;
    let incorrectCount = 0;
    let anAnsweredCount = 0;
    for (let i = 0; i <= ansData.length - 1; i++) {
      if (ansData[i].IsYourAnsCorrect === true) {
        correctCount += 1;
      } else if (ansData[i].IsYourAnsCorrect === false) {
        incorrectCount += 1;
      } else if (ansData[i].yourAns === "") {
        anAnsweredCount += 1;
      }
    }
    let pieData = [
      { name: "Correct", number: correctCount },
      { name: "Incorrect", number: incorrectCount },

      { name: "unAnswer", number: anAnsweredCount },
    ];
    console.log("pieData--->>", pieData);
    setpieChartData(pieData);
    setIsSubmit(true);
  };

  const onClickQuestion = (isReport) => {
    let temp = [];
    let correctAns;
    TestData.data[currentQuestion].answer.filter((item) => {
      if (item.isRight === true) {
        correctAns = item.ansName;
      }
    });
    let isCorrectAns = false;
    if (correctAns === checked) {
      isCorrectAns = true;
    } else {
      isCorrectAns = false;
    }
    // let tempCheck
    //{checked=='' || checked == null || checked == undefined ? tempCheck = '' : tempCheck = checked}

    let obj = {
      Correct: correctAns,
      yourAns: checked,
      testQuestion: TestData.data[currentQuestion].name,
      IsYourAnsCorrect: isCorrectAns,
    };

    setAnswerData([...AnswerData, obj]);
    {
      isReport === true
        ? generateReport([...AnswerData, obj])
        : setCurrentQuestion(currentQuestion + 1);
    }
    setChecked("");
  };

  return (
    <>
      {!isSubmit ? (
        <>
          <div className="index-number">
            {TestData.data.map((item, index) => (
              <Button

                onClick={() => setCurrentQuestion(index)}
                className="{[index == currentQuestion ? Styles.button1 : Styles.button2]}"
              >
               <div className="btn-index"  >{index + 1}</div>
              </Button>
            ))}
          </div>
          

          <div>
            <div
              style={{
                fontSize: 20,

                marginBottom: 10,
              }}
            >
              <div className="questions">
                {TestData.data[currentQuestion].name}
              </div>
            </div>
            {renderAnswers(
              TestData.data[currentQuestion].answer_type,
              TestData.data[currentQuestion].answer,
              TestData.data[currentQuestion].id
            )}
            <div className="buttons" style={{ flexDirection: "row" }}>
              <Stack spacing={2} direction="row">
                <Button
                  className="prev-button"
                  variant="contained"
                  color="secondary"
                  disabled={currentQuestion === 0}
                  onClick={() => setCurrentQuestion(currentQuestion - 1)}
                >
                  prev
                </Button>
                {TestData.data.length - 1 === currentQuestion ? (
                  <Button
                    className="submit-button"
                    variant="contained"
                    color="primary"
                    onClick={() => onClickQuestion(isReportGenerate)}
                  >
                    Submit
                  </Button>
                ) : (
                  <Button
                    className="next-button"
                    variant="contained"
                    color="primary"
                    onClick={() => onClickQuestion(isNoReport)}
                  >
                    Next
                  </Button>
                )}
              </Stack>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3 style={{ textAlign: "center" }}>
            Candidate Name :- {TestData.candididateName}
          </h3>
          <h4 style={{ textAlign: "center" }}>Gender:- {TestData.Gender}</h4>
          <h4 style={{ textAlign: "center" }}>Language:-{TestData.Language}</h4>
          
          <div >
          
                <h1 style={{textAlign:"center",fontSize:"25px",}}>Quiz Summary</h1>
           
            <div className="Report-Table" >

              {pieChartData.map((item) => {
                <div >{item.name}</div>;
              })}
              {AnswerData.map((item) => (
                <Card style={{ marginTop: "0.5%" ,border:"2px solid black"}}>
                  <CardContent>
                    <Typography variant="h5">
                     <p style={{color:"blue"}}>Question : {item.testQuestion}</p> 
                    </Typography>
                    <Typography  subtitle1= 'h2'>
                     <p style={{color:"orange"}}>Your Answer : {item.yourAns} </p> 
                    </Typography>
                    <Typography subtitle1= 'h2'>
                     <p style={{color:"green"}}>Correct Answer :{item.Correct}</p> 
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div style={{ flex: 1, height: 500 }}>
              <>
                {/* {pieChartData.map((item:any)=><div>{item.name}</div>)} */}
              </>
              <Chart data={pieChartData}>
                <PieSeries valueField="number" argumentField="name" />
                <Title text="Result Report" />
              </Chart>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const Styles = {
  container: {
    //backgroundColor:"white"
    //flex: 1,
    //s alignItems: 'center',
    //justifyContent: 'center',
  },
  button1: {
    backgroundColor: "red",
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  button2: {
    backgroundColor: "green",
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttondivStyle: {
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "center",
  },
  buttondiv: {
    color: "white",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  separator: {
    marginVertical: 30,
    // height: 1,
    width: "80%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonStyle: {
    width: "80%",
    height: "30px",
    backgroundColor: "#cb69c1",
    alignItems: "center",
  },
  cardStyle: {
    width: "80%",
    height: "30px",
    backgroundColor: "#6C72CB",
    alignItems: "center",
  },
};
// export default StartTest;
