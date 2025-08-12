import { body, validationResult } from 'express-validator';

export const validateProduct = [
  body('name').notEmpty().trim().isLength({ max: 100 }),
  body('description').optional().trim().isLength({ max: 500 }),
  body('priceEth').isFloat({ min: 0.001 }),
  body('priceUsd').isFloat({ min: 0.01 }),
  body('fileUrl').isURL()
];

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
