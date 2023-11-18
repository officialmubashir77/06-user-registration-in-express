//  In an express js application, a "controller" refers to a part of your code that is responsible for handling the application's logic. controllers are typically used to process incoming requests.interact with models (data sources), and send responses back to clients.They help organize your application by separating concerns and following the MVC (Model-view-Controller) design pattern.

// *******************
// Home Page Logic
// *******************

const home = async (req ,res) => {
    try {
        res.send("Hello Home Page Controller")
    } catch (error) {
        console.log(error);
        res.status(400).send({ msg : "page not found" })
    }

}

// anotherway controller
const anotherway = async (req ,res) => {
    try {
        res.send("Hello anotherway page from controllers")
    } catch (error) {
        console.log(error);
        res.status(400).send({ msg : "page not found" })
    }

}

// Register controller
const register = async (req ,res) => {
    try {
        console.log(req.body);
        res.status(200).json({ message : req.body })
    } catch (error) {
        console.log(error);
        res.status(400).send({ msg : "page not found" })
    }

}

module.exports = { home , anotherway , register}