import { TextField, Radio, RadioGroup, Input, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const Home = () => {
  const history = useHistory();
  const [name, setCname] = useState(null);

  const data = [
    {
      "name": "javascript",
      questions: [
        {
          answer_type: 'Multiple-choice',
          id: '1',
          name: 'what is javascript',
          answer: [{
            ansName: 'It is the programming language for the web',
            isRight: true
          }, {
            ansName: 'It used for design',
            isRight: false,
          }, {
            ansName: 'it is framework',
            isRight: false,
          },
          {
            ansName: 'None ofthe above',
            isRight: false,
          }
          ]
        },
        {
          answer_type: 'trueFalse',
          id: '2',
          name: 'The external javascript file must contain <script> tag. True of False?',
          answer: [{
            ansName: 'true',
            isRight: false,
          }, {
            ansName: 'false',
            isRight: true,

          },
          ]
        },
        {
          answer_type: 'fill-In-The-Blank',
          id: '3',
          name: '___________  is not a reserved word in javascript',
          answer: [{
            ansName: 'interface',
            isRight: false,
          }, {
            ansName: 'program',
            isRight: true,
          }, {
            ansName: 'throws',
            isRight: false,
          }
          ]
        },
        {
          answer_type: 'Match-the-following',
          id: '4',
          name: 'Match the following \nOption A) 1)test1 2)test2 3)test3\n Option b)i)case3 ii)case2 iii)case1',
          answer: [{
            ansName: '1-i,2-ii,3-iii',
            isRight: true,
          }, {
            ansName: '1-iii,2-ii,3-i',
            isRight: false
          }, {
            ansName: '1-ii,2-i,3-iii',
            isRight: false,
          }
          ]
        },
        {
          answer_type: 'multiSelect',
          id: '4',
          name: 'what is datatypes in javascript',
          answer: [{
            ansName: 'string',
            isRight: true,
          }, {
            ansName: 'number',
            isRight: true
          }, {
            ansName: 'none of the above',
            isRight: false,
          }
          ]
        },

      ],
    },
    {
      "name": "Java",
      questions: [
        {
          answer_type: 'Multiple-choice',
          id: '1',
          name: 'Which of the following is not a  Java feature?',
          answer: [{
            ansName: 'dynamic',
            isRight: false
          }, {
            ansName: 'architectural neutral',
            "isRight": false,
          }, {
            ansName: 'use of pointers',
            "isRight": true,
          },
          {
            ansName: 'object oriented',
            "isRight": false,
          }
          ]
        },
        {
          answer_type: 'trueFalse',
          id: '2',
          name: 'In an instance method or a constructor "this" is a refernce to the current object',
          answer: [{
            ansName: 'true',
            isRight: true
          }, {
            ansName: 'false',
            isRight: false,

          },
          ]
        },
        {
          answer_type: 'fill-In-The-Blank',
          id: '3',
          name: '__________ is used to find and fix bugs in the java program',
          answer: [{
            ansName: 'JDB',
            isRight: true,
          }, {
            ansName: 'JVM',
            isRight: false
          }, {
            ansName: 'JDK',
            isRight: false,
          }
          ]
        },
        {
          answer_type: 'Match-the-following',
          id: '4',
          name: 'Match the following \nOption A) 1)test1 2)test2 3)test3\n Option b)i)case3 ii)case2 iii)case1',
          answer: [{
            ansName: '1-i,2-ii,3-iii',
            isRight: true,
          }, {
            ansName: '1-iii,2-ii,3-i',
            isRight: false
          }, {
            ansName: '1-ii,2-i,3-iii',
            isRight: false,
          }
          ]
        },
        {
          answer_type: 'multiSelect',
          id: '4',
          name: 'what is datatypes in javascript',
          answer: [{
            ansName: 'string',
            isRight: true,
          }, {
            ansName: 'number',
            isRight: true
          }, {
            ansName: 'none of the above',
            isRight: false,
          }
          ]
        },

      ],
    },
    {
      "name": "C++",
      questions: [
        {
          answer_type: 'Multiple-choice',
          id: '1',
          name: 'what is C++',
          answer: [{
            ansName: 'It is an object oriented programming language',
            isRight: false,
          }, {
            ansName: 'It is a procedural programming language',
            "isRight": false,
          }, {
            ansName: 'it supports both procedural and object oriented programming language',
            "isRight": true,
          },
          {
            ansName: 'It is a functional programming langugae',
            "isRight": false,
          }
          ]
        },
        {
          answer_type: 'trueFalse',
          id: '2',
          name: 'Super classes are also called as Parent classses/Base classes',
          answer: [{
            ansName: 'true',
            isRight: true
          }, {
            ansName: 'false',
            isRight: false,

          },
          ]
        },
        {
          answer_type: 'fill-In-The-Blank',
          id: '3',
          name: 'Object oriented programming employs ____________ programming approach',
          answer: [{
            ansName: 'bottom up',
            isRight: true,
          }, {
            ansName: 'procedural',
            isRight: false
          }, {
            ansName: 'top down',
            isRight: false,
          }
          ]
        },
        {
          answer_type: 'Match-the-following',
          id: '4',
          name: 'Match the following \nOption A) 1)test1 2)test2 3)test3\n Option b)i)case3 ii)case2 iii)case1',
          answer: [{
            ansName: '1-i,2-ii,3-iii',
            isRight: true,
          }, {
            ansName: '1-iii,2-ii,3-i',
            isRight: false
          }, {
            ansName: '1-ii,2-i,3-iii',
            isRight: false,
          }
          ]
        },
        {
          answer_type: 'multiSelect',
          id: '4',
          name: 'what is datatypes in c++',
          answer: [{
            ansName: 'string',
            isRight: true,
          }, {
            ansName: 'number',
            isRight: true
          }, {
            ansName: 'none of the above',
            isRight: false,
          }
          ]
        },

      ],
    },

  ]
  const [checkedData, setCheckedData] = useState(" ");
  const [genderData, setGenderData] = useState([{ name: "female" }, { name: "male" }, { name: "other" }]);
  const [LangData, setLangData] = useState([{ name: "javascript" }, { name: "Java" }, { name: "C++" }]);
  const [gender,setGender] = useState("gender")
  const [Lang, setLang] = useState("Lang");
  const [Data, setData] = useState(data);
  const [questionsData, setQuestions] = useState([]);
  const [answerData, setAnswer] = useState([]);

  const send_data = (id, check, lng) => {

    let testData = []
    let len = Data.length
    let flag = false
    console.log(Lang);
    console.log(Data);

    for (let i = 0; i <= Data.length - 1; i++) {
      console.log("test data--->>>hdjhjj", Data[i].name, lng)
      if (Data[i].name === lng) {
        console.log("test data--->>>", Data[i].name, lng, flag)
        testData = Data[i].questions
        console.log("checkkkkkhhjkkk",testData)
        setQuestions(Data[i].questions)
        flag = true
        console.log(flag)
      }
    }
    {
      flag &&
        history.push("/StartTest", { data: testData, candididateName: name, Gender: gender ,Language: Lang })

    }


  }
  return (
    <div className="contain">
      <div style={{ borderColor: "black",margin:"-50px" }}>
          <h2 style={{color:"blue",fontSize:"40px"}}>MCQ</h2>
        <TextField variant="outlined"
          style={{
            fontSize: 20,
            fontWeight: 'bold'
          }}
          value={name}
          className="text"
          onChange={(e) => setCname(e.target.value)}
          label="Enter your name"
       
        />
        <div >

          <div className="genders">
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                {genderData.map((item) => (<div>
                  <FormControlLabel value={item.name} control={<Radio />} label={item.name} onClick={() => setGender(item.name)} />
                </div>
                ))
                }
              </RadioGroup>
            </FormControl>

          </div>
        </div>
        <div >

          <div className="languages">
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">Select your preference of test language</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                {LangData.map((item, key) => (<div>
                  <FormControlLabel value={item.name} control={<Radio />} label={item.name} onClick={() => setLang(item.name)} />
                </div>
                ))
                }
              </RadioGroup>
            </FormControl>

          </div>
        </div>

        <div>

          <div className="btns">
            <Button
              onClick={() =>
                send_data(name, checkedData, Lang)} style={{ color: "white",fontSize:"14px"}}>Start Test</Button></div>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    //backgroundColor:"white"
    //  flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttondivStyle: {
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'center',
  },
  buttondiv: {
    color: "white"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  separator: {
    marginVertical: 30,
    // height: 1,
    width: '80%',
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
    alignItems: 'center'
  },
  cardStyle: {
    width: "80%",
    height: "30px",
    backgroundColor: "#6C72CB",
    alignItems: 'center'
  }
});

// export default Home;