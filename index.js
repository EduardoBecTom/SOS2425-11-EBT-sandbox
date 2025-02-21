const express = require('express');
const cool = require('cool-ascii-faces');
const app = express();
const PORT = 16078;

app.get('/', (request, response) =>{
    response.send('Hello from the server!');
}
);

app.get('/cool', (request, response) =>{
    response.send(cool());
}
);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}
);
