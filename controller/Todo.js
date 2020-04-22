const Todo = require('../models/todo.model');

module.exports = {
    async showTodo(req, res) {
        try {
            const existTodo = await Todo.find({});
            if (!existTodo) {

            }
            res.render('index', {
                title: 'Todo',
                messages: {
                    success: "",
                    error: ""
                },
                data: existTodo
            })
        } catch (error) {
            res.status(500).send({
                error: `An error has occured ${error}`
            })
        }
    },
    async addTodo(req, res) {
        try {
            const existTodo = await Todo.findOne({
                name: req.body.name
            })
            if (existTodo) {
                return res.render('add', {
                    title: 'Todo',
                    name: '',
                    messages: {
                        error: "مقدار وارد شده تکراری است"
                    }
                })
            }

            await new Todo({
                name: req.body.name
            }).save().then(item => {
                res.redirect('/');

            })

        } catch (error) {
            res.status(500).send({
                error: `An error has occured ${error}`
            })
        }
    },
    async editTodo(req, res) {
        try {
            await Todo.findOneAndUpdate({_id:req.params.id},
                {$set:{
                    name:req.query.name
                }}
            )            
        } catch (error) {
            res.status(500).send({
                error: `An error has occured ${error}`
            })
        }
    },
    async deleteTodo(req, res) {
        try {
            await Todo.findOneAndDelete({_id:req.params.id})
            res.redirect('/')
        } catch (error) {
            res.status(500).send({
                error: `An error has occured ${error}`
            })
        }
    }

}