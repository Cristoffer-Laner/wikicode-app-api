import { Task } from "../models/Task.js"

export const taskIndex = async (req, res) => {
    try {
        const tasks = await Task.findAll()
    
        res.status(200).json(tasks)
    } catch (error) {
        console.error(`error when searching for tasks ${new Date()}: ${error}`);
        res.status(400).json({ error: error.message });
    }
}

export const taskCreate = async (req, res) => {
    const { item, title, description, flag, timeLimit } = req.body
    
    try {
        const task = await Task.create({
            item, title, description, flag, timeLimit
        })
    
        res.status(201).json(task)
    } catch (error) {
        console.error(`error when creating task ${new Date()}: ${error}`);
        res.status(400).json({ error: error.message });
    }
}

export const taskDelete = async (req, res) => {
    const { item } = req.params
    
    try {
        const task = await Task.destroy({
            where: { item }
        })
    
        res.status(201).json(task)
    } catch (error) {
        console.error(`error when deleting task ${new Date()}: ${error}`);
        res.status(400).json({ error: error.message });
    }
}

export const taskUpdate = async (req, res) => {
    const { item } = req.params
    const { title, description, flag, timeLimit } = req.body
    
    try {
        const task = await Task.update({
            title, description, flag, timeLimit
        }, {
            where: { item }
        })
    
        res.status(201).json(task)
    } catch (error) {
        console.error(`error when deleting task ${new Date()}: ${error}`);
        res.status(400).json({ error: error.message });
    }
}