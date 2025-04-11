const express = require("express");
const { register, login } = require("../controllers/user.controller");
const { createBudget, getBudgetSummary, getBudget, deleteBudget } = require("../controllers/budget.controller");
const { userAuth } = require("../middlewares/user.middleware");
const router = express.Router();
router.post("/users",register)
router.post("/users/login",login)
router.post("/budgets", userAuth, createBudget)
router.get("/budgets",userAuth, getBudget)
router.get("/budgets/summary",userAuth, getBudgetSummary)
router.delete("/budgets/:budgetId",userAuth, deleteBudget)
module.exports = router
