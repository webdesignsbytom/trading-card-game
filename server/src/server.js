import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
// Path
import { join } from 'path';
import * as url from 'url';
// Import routers
import authRouter from './routes/auth.js';
import cardsRouter from './routes/cards.js';
import userRouter from './routes/users.js';
import packRouter from './routes/packs.js';
import tradeRouter from './routes/trade.js';
import eventRouter from './routes/events.js';
import battleRouter from './routes/battles.js';
import deckRouter from './routes/decks.js';
// Env
import { HTTP_URL, PORT } from './utils/config.js';

const app = express();
app.disable('x-powered-by');

// Add middleware
app.use(
  cors({ 
    origin: "*"
  })
);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create path to HTML
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// Start of actions
app.use('/', authRouter);
app.use('/mon-cards', cardsRouter);
app.use('/users', userRouter);
app.use('/packs', packRouter);
app.use('/trades', tradeRouter);
app.use('/events', eventRouter);
app.use('/battles', battleRouter);
app.use('/decks', deckRouter);

// Server interface page
app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: join(__dirname, 'views'),
  });
});

app.get('/test', (req, res) => {
  res.status(200).send('Congratulations Mr Bond you found my server lair.')
});

// For all unknown requests 404 page returns
app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not Found' });
  } else {
    res.type('txt').send('404 Not Found');
  }
});

app.use((error, req, res, next) => {
  console.error(error)

  if (error.code === 'P2025') {
    return sendDataResponse(res, 404, 'Record does not exist')
  }

  return sendDataResponse(res, 500)
})

// Start our API server
app.listen(PORT, () => {
  console.log(
    `\nServer is running on ${HTTP_URL}${PORT} \n This no longer consumes souls\n`
  );
});
