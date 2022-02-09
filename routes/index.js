var express = require("express");
var router = express.Router();
var formidable = require("formidable");
var fs = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/file", (req, res) => {
  let path = req.query.path;
  if (fs.existsSync(path)) {
    fs.readFile(path, (err, data) => {
      if (err) {
        return res.status(400).json({ error: err });
      } else {
        res.status(200).end(data);
      }
    });
  } else {
    return res.status(404).json({ error: "File not found" });
  }
});

router.delete("/file", (req, res) => {
  let form = new formidable.IncomingForm({
    uploadDir: "C:/Users/Juan Pieri/OneDrive/Área de Trabalho/Projetos/dropbox-clone/public/upload",
    keepExtensions: true,
  });

  form.parse(req, (err, fields, files) => {
    if (fs.existsSync(fields.path)) {
      fs.unlink(fields.path, (err) => {
        if (err) {
          return res.status(400).json({ err });
        } else {
          return res.json({
            fields,
          });
        }
      });
    }
  });
});

router.post("/upload", (req, res) => {
  let form = new formidable.IncomingForm({
    uploadDir: "C:/Users/Juan Pieri/OneDrive/Área de Trabalho/Projetos/dropbox-clone/public/upload",
    keepExtensions: true,
  });

  form.parse(req, (err, fields, files) => {
    return res.json({
      files,
    });
  });
});

module.exports = router;
