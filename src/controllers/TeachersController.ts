import { Request, Response } from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHoursToMinutes';

export default class TeachersController {
  async index(request: Request, response: Response) {
    const classes = await db('classes')

    const teachers = {
      total: classes.length
    }

    return response.json(teachers)
  }
}
