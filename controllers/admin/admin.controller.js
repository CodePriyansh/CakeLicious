const { request, response } = require("express");
const Admin = require('../../models/admin/admin.model');
const jwt = require = require('jsonwebtoken');

exports.signup = (request, response, next) => {
        const { adminName, adminEmail, adminPassword } = request.body
        Admin.create({
                name: adminName,
                email: adminEmail,
                password: adminPassword
            })
            .then(result => {
                console.log("result: ", result)
                return response.status(201).json(result);
            })
            .catch(err => {
                console.log("Error: ", err)
                return response.status(500).json(err)
            })

    }
    /* "name": "admin",
    "email": "admin@gmail.com",
    "password": "123456",
    "_id": "624d585a4dc4edbcfae3db57",
    "__v": 0
}
*/

exports.signin = (request, response, next) => {
    const { adminPassword, adminEmail, adminName } = request.body
    Admin.find({
            email: adminEmail,
            name: adminName,
            username: adminPassword
        })
        .then(result => {
            console.log(result);
            if (result) {
                let paylod = { subject: result._id };
                let token = jwt.sign(paylod, 'abcdefghijklm');
                return response.status(200).json({
                    status: 'login success',
                    current_user: result,
                    token: token
                })
            }
        })
        .catch(err => {
            console.log(err)
            return response.status(500).json({ message: "Oops Something Went Wrong" });
        })
};
/* "name": "admin",
    "email": "admin@gmail.com",
    "password": "123456",
    "_id": "624d585a4dc4edbcfae3db57",
    "__v": 0
}
*/