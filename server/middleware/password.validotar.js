const PasswordValidator = (req, res, next) => {
    const { password } = req.body
    let IncludesNumber = false
    let IncludesSpecial = false
    if (password.includes("0") || password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") || password.includes("6") || password.includes("7") || password.includes("8") || password.includes("9") || password.includes("10")) {
        IncludesNumber = true
    }
    if (password.includes("!") || password.includes("@") || password.includes("#") || password.includes("$") || password.includes("%") || password.includes("&") || password.includes("*") || password.includes("(") || password.includes(")") || password.includes("|")) {
        IncludesSpecial = true
    }

    if (password.length >= 7 && IncludesNumber && IncludesSpecial) next()
    else res.status(400).send({ response:"Password must include special character and minimum character 8" })


}

module.exports = { PasswordValidator }