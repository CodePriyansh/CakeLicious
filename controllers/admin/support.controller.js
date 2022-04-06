const Support = require("../../models/admin/admin.support.model");
exports.support = (request, response, next) => {

    Suppot.find()
        .populate("customers")
        .then(result => {
            return response.status(201).json(result);
        })
        .catch(err => {
            return response.status(403).json({ message: "Oops! Something went wrong.." });
        });
}
exports.query = (request, response, next) => {

    let support = new Support({
        customer: request.body.cid
    })

    support.queries.push({ response: request.body.response })

    support.save().then((result) => {
        response.status(200).json(result)
    }).catch((err) => {
        response.status(500).json
    })




}