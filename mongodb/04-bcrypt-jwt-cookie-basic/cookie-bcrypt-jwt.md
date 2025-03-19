## cookie

- for send cookie `res.cookie("anyName","whatToStore")`
- for read cookie `req.cookies.anyName`
- too see cookie we need to install `npm i cookie-parser`

## bcrypt

- this is used for securely stored password encryption and decryption
- first install `npm i bcrypt`
- this is a async process
- first create salt = `await bcrypt.genSalt(10)`
- then create hash = `await bcrypt.hash(password,salt)`
- for verify = `await bcrypt.compare(password,hashPassword)

## JWT

- this is used for send and received data for user login and authentication
- first install `npm i jsonwebtoken`
- create token = `jwt.sign({data:data},"secretKey",{expiresIn: "2h"})`
- verify token = `jwt.verify(createdToken, "secretKey")
