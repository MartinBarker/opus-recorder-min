const express = require('express')
const path = require('path')
const app = express()

app.use("/src/js", express.static('./src/js/'));

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/src/html', 'waveRecorder.html'))
    //res.sendFile('example/waveRecorder.html')
)
app.listen(3000, () => console.log('Example app listening on port 3000!'))