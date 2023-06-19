const getAllStudents = (req, res) => {
    res.status(200).json({ response: true, data: { name: "John", age: 24 } });
}

const createStudent = (req, res) => {
    const body = req.body;
    console.log(body);

    res.status(201).json({ response: true, data: body });
}

module.exports = {
    getAllStudents,
    createStudent
}