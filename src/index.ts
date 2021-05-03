import express from 'express';
import helmet from 'helmet';
import cors, { CorsOptions } from 'cors';
import morgan from 'morgan';

const port = process.env.PORT || '3000';

const corsOptions: CorsOptions = {
  origin: true,
  optionsSuccessStatus: 200,
  credentials: true
};

const helmetConfig = {
  frameguard: {
    action: 'deny'
  },
  permittedCrossDomainPolicies: true,
  referrerPolicy: {
    policy: 'no-referrer'
  }
};

const app = express();

app.use(helmet(helmetConfig));
app.use(express.json());
app.use(cors(corsOptions));
app.use(morgan('combined'));

app.listen(port, () => console.log(`Listening on port ${port}`));
