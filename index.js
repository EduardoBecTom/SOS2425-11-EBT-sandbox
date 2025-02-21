const express = require('express');
const cool = require('cool-ascii-faces');
const app = express();
const PORT = 16078;

app.use("/",express.static('./public'));

app.get('/hello', (request, response) =>{
    response.send('Hello from the server!');
}
);

app.get('/cool', (request, response) =>{
    response.send("Este es Mario literal : <br>"+cool()+"<br> Este es antonio literal : <br>"+cool());
}
);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}
);
