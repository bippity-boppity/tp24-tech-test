import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Receivable } from './models/receivable';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const receivables: Receivable[] = [];

app.post('/receivables', (req, res) => {
  const data = req.body;

  try {
    const receivable = new Receivable(data);
    receivables.push(receivable);
    res.status(201).json({ message: 'Receivable data saved successfully.' });
  } catch (error) {
    console.error('Error saving receivable data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/summary', (req, res) => {
  const openInvoices = receivables.filter((receivable) => !receivable.closedDate);
  const closedInvoices = receivables.filter((receivable) => receivable.closedDate);

  const openInvoicesTotal = openInvoices.reduce((total, receivable) => {
    return total + Number(receivable.openingValue);
  }, 0);

  const closedInvoicesTotal = closedInvoices.reduce((total, receivable) => {
    return total + Number(receivable.openingValue);
  }, 0);

  const summary = {
    openInvoices: openInvoicesTotal,
    closedInvoices: closedInvoicesTotal,
  };

  res.json(summary);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
