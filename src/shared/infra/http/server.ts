import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(4444, () => {
  console.log('Server started on port 4444');
});
