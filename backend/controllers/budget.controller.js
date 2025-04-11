const BudgetModel = require("../models/budget.model")
const UserModel = require("../models/user.model")

async function createBudget(request, response){
    // accept the data from the request body
    const {type, amount, description} = request.body
    // type, amount, description
    // Id from request query
    const userId = request.userId
   
    // save the budget
    const budget = await BudgetModel.create({
        type, description, amount, userId
    })
    // return the response
    response.json(budget)
}

async function getBudgetSummary(request, response){
    
    // get user Id and check
    const userId = request.userId
    const budget = await BudgetModel.find({userId})
   
    const result = budget.reduce(function(acc, current){
        acc[current.type] += current.amount
        return acc
    },{income: 0, outcome: 0})

    // get project of user for the month

    // sum budgets by type
    // return response
    response.json(result)


}

async function getBudget(request, response) {
    const userId = request.userId
    const budget = await BudgetModel.find({userId})
    response.json({budget})

}

async function deleteBudget(request, response){
    const userId = request.userId
    const budgetId = request.params.budgetId
    if (!budgetId){
        return response.status(404).json({message: "budget not found"})
    }
    await BudgetModel.findOneAndDelete({_id: budgetId, userId})
    response.status(204).send()
}

module.exports = {
    createBudget, getBudgetSummary, getBudget, deleteBudget
}
