const taskDb = require('../model/model');

exports.find = async (req, res) => {
    try {
        const result = await taskDb.find();
        console.log("category result:", result);
        res.status(200).json(result);
    } catch (err) {
        console.log('error', err);
    };
}

exports.create = async (req, res) => {
    try {
        const { title, description, date, category } = req.body;
        console.log({ title, description, date, category });

        const data = await taskDb.create({
            title,
            description,
            date,
            category
        });
        console.log(data);
        res.status(200).json(data);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
