const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;
//
const OnRequest = (req, res) => {
  console.log(req.url);

  switch (req.url) {
    case '/':
      htmlHandler.getIndex(req, res);
      break;
    case '/page2':
      htmlHandler.getPage2(req, res);
      break;
    case '/page3':
      htmlHandler.getPage3(req, res);
      break;
    case '/bailando.mp4':
      mediaHandler.getMedia(req, res, 'video/mp4', '../client/bailando.mp4');
      break;
    case '/bird.mp4':
      mediaHandler.getMedia(req, res, 'video/mp4', '../client/bird.mp4');
      break;
    case '/bling.mp3':
      mediaHandler.getMedia(req, res, 'audio/mp3', '../client/bling.mp3');
      break;
    default:
      htmlHandler.getIndex(req, res);
      break;
  }
};

http.createServer(OnRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
