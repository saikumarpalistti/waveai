const express = require('express');
const app = express();
const port = process.env.PORT || 3001; 


const searchResults = [
  { id: 1, text: 'Search result 1' },
  { id: 2, text: 'Search result 2' },
  
];

app.get('/search', (req, res) => {
  const query = req.query.q; 
  const filteredResults = searchResults.filter((result) =>
    result.text.toLowerCase().includes(query.toLowerCase())
  );
  res.json(filteredResults);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
