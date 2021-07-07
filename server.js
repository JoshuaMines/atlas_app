const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
// app.get('/', function (req, res) {
//     res.sendFile('index.html')
// })

// let deadx = 415 //((deadlift/405)*100)
// let squatx = 315 //((squat/315)*100)
// let benchx = 280 //((bench/280)*100)

// let checkdeadlift: (req, res) => {
// app.post('/api/deadlift', )
//     res.status(200).send('')
// } 


// OPTION 1
// const deadlift[] = (newNum) => {
//   let array = [1]
//   array.pop()
//   array.push(newNum)
// }

//OPTION 2
// let deadlift = [1]
// const newNumberArr = (deadlift) => {
//   array.pop().push(deadlift)
// }

// deadlift = []
let deadlift = []
let squat = []
let bench = []

app.get('/api/deadlift', function(req, res) {
    let deadx = deadlift.map(x => ((x/405)*100));
   deadx = Math.round(deadx)
    res.status(200).send(`you are ${deadx}% of the way to your goal!`);
  })

app.post('/api/deadlift', function(req, res) {
    
    const { deadlift1 } =req.body;
    deadlift.pop()
    deadlift.push(deadlift1);

    // res.status(200).send(deadlift);
});



app.get('/api/squat', function(req, res) {
    let squatx = squat.map(x => ((x/315)*100));
    squatx = Math.round(squatx)
    res.status(200).send(`you are ${squatx}% of the way to your goal!`);
  })

app.post('/api/squat', function(req, res) {
    
    const { squat1 } =req.body;
    squat.pop()
    squat.push(squat1);

    // res.status(200).send(deadlift);
});


app.get('/api/bench', function(req, res) {
  let benchx = bench.map(x => ((x/225)*100));
  benchx = Math.round(benchx)
  res.status(200).send(`you are ${benchx}% of the way to your goal!`);
})

app.post('/api/bench', function(req, res) {
  
  const { bench1 } =req.body;
  bench.pop()
  bench.push(bench1);

  // res.status(200).send(deadlift);
});


const SERVER_PORT = 4000
app.listen(4000, () => console.log(`running on ${SERVER_PORT}`));