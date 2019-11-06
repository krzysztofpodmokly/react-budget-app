const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Budget = require('../models/Budget');
const moment = require('moment');

// @route   POST /api/budget
// @desc    Create expense in database
// @access  Public
router.post(
  '/',
  [
    check('cash', 'How much did you spent on that?').isDecimal(),
    check('item', 'What did you pay for?').isString(),
    check('category', 'Pick a category').isString(),
    check('type', 'Is it income or expense?').isString(),
    check('dueDate', 'Date is required').isString()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

    const { cash, item, category, type, dueDate } = req.body;

    try {
      const newExpense = {};
      if (cash) newExpense.cash = cash;
      if (item) newExpense.item = item;
      if (category) newExpense.category = category;
      if (type) newExpense.type = type;
      if (dueDate) newExpense.dueDate = dueDate;

      const budgetItem = new Budget(newExpense);
      await budgetItem.save();
      res.send(budgetItem);
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   GET /api/budget/income
// @desc    Retrieves all of the records from database
// @access  Public
router.get('/income', async (req, res) => {
  try {
    const income = await Budget.find({ type: 'income' });
    res.send(income);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
});

// @route   GET /api/budget/expense
// @desc    Retrieves all of the records from database
// @access  Public
router.get('/expense', async (req, res) => {
  try {
    const expense = await Budget.find({ type: 'expense' });
    res.send(expense);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
});

// @route   DELETE /api/budget/delete/:id
// @desc    Deletes a record based on id
// @access  Public
router.delete('/delete/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    const itemToDelete = await Budget.findById(req.params.id);
    if (!itemToDelete) {
      return res.status(404).send({ msg: 'Item not found' });
    }

    await itemToDelete.remove();
    res.send({ msg: 'Item was removed' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
