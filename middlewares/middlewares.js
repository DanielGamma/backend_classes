const sayHi = (req, res, next) => {
    console.log("Hello from Middleware");
    next();
}

const checkBody = (req, res, next) => {
    const body = req.body;
    if (!Object.keys(body).length) {
        res.status(400).json({ response: false, error: "No data provided!" });
    } else {
        next();
    }
}
module.exports = {
    sayHi,
    checkBody
}