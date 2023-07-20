"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const receivable_1 = require("./models/receivable");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
const receivables = [];
app.post('/receivables', (req, res) => {
    const data = req.body;
    try {
        const receivable = new receivable_1.Receivable(data);
        receivables.push(receivable);
        res.status(201).json({ message: 'Receivable data saved successfully.' });
    }
    catch (error) {
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
