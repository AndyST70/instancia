import express from "express";
import fileUpload from "express-fileupload";

// import { uploadFile, getFiles, getFileURL } from "./s3.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./images",
  })
);



app.get('/check', (req, res) => {
  return res.status(200).send('ok');
});

app.get('/vm', (req, res) => {
return res.status(200).send('Saludos de desde VM #1');
});


// inicio de la app
app.get("/", (req, res) => {
  res.json({
    "instancia": "Instancia #1 - API #1",
    "Curso": "Seminario de sistemas 1",
    "Sección": "Sección A",
    "Periodo": "2 semestre 2024",
    "Estudiante": "Andy Ezequiel Sanic  Tiul - 202006699"
  });
});



const port = 6000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
