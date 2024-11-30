import Joi from "joi";

export const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(), // Password must be 4-100 characters
  });

  const { error } = schema.validate(req.body); // Validate req.body, not res.body

  if (error) {
    return res
      .status(400)
      .json({ message: "Bad request", error});
  }
  next(); // Proceed to the next middleware if validation passes
};

export const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(), // Use password for login validation
  });

  const { error } = schema.validate(req.body); // Validate req.body, not res.body

  if (error) {
    return res.status(400)
      .json({ message: "Bad request", error});
  }
  next(); // Proceed to the next middleware if validation passes
};
