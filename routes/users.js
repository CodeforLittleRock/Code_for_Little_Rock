import { Router } from "express";
import gravatar from "gravatar";
import bcrypt from "bcrypt";
import jwt, { JsonWebTokenError } from "jsonwebtoken";
import config from "config";
import { check, validationResult } from "express-validator";
import normalize from "normalize-url"
import { UserModel } from "../models"

export default function usersController(app) {

  const router = Router();


  // @route   POST api/users
  // @desc    Register User
  // @acc
  router.post('/signup', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include valid email.').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { name, email, password } = req.body

    try {
      // See if user exists
      // Error if user exits
      let user = await UserModel.findOne({ email })
      if (user) {
        return res.status(400).json({ errors: [{ msg: 'User already exists.' }] });
      }
      // Get user Gravatar
      const avatar = normalize(
        gravatar.url(email, {
          s: '200',
          r: 'pg',
          d: 'mm',
        }),
        { forceHttps: true }
      );

      user = new UserModel({
        name, email, avatar, password
      })

      // Encrypt pw
      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password, salt)
      await user.save();

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token })
        })

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error')
    }

  })

  app.use("/api/users", router)
}