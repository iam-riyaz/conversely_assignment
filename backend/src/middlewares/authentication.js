import jwt from "jsonwebtoken"

export const  authentication = (req, res, next) => {
  const token = req.header('Authorization')

  if (!token) {
    return res.status(401).json({ message: 'No token, authentication denied' });
  }
  else{
    const mainToken= token.split(" ")[1]
    try {
      const decoded = jwt.verify(mainToken, process.env.JWT_SALT);
      req.user = decoded.user;
      next();
    } catch (err) {
      res.status(401).json({ message: 'Token is not valid' });
    }

  }

 
};