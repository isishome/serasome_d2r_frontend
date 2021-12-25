const path = require('path')
const express = require('express')
const fe = express()

// 스태틱
fe.use(express.static(path.join(__dirname, 'dist')));

// 에러 핸들링
function logErrors(err, req, res, next) {
  console.error(err)
  next(err)
}

function clientErrorHandler(err, req, res, next) {
  res.status(400).send(err)
}

fe.use(logErrors);
fe.use(clientErrorHandler);

// 서버 바인딩
fe.listen(process.env.PORT || '6002')