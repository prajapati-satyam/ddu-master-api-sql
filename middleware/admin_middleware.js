const admin_middleware = (req,res,next) => {
    const admin_key = req.body.admin_key;
     if (!admin_key || admin_key !== process.env.ADMIN_KEY) {
        return res.status(401).json({
            message: "invalid key"
        })
     } else {
        next()
     }
}

module.exports = admin_middleware