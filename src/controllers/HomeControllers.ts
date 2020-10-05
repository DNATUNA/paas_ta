import { Response } from 'express';
import { Get, JsonController, Res } from 'routing-controllers';
import { MainService } from '../services/MainService';
import { BaseController } from './BaseController';

@JsonController('/')
export class HabitController extends BaseController {
  private mainService: MainService;
  constructor() {
    super();
    this.mainService = new MainService();
  }

  // Test Main Page GET Method
  @Get('/')
  public findHabit(@Res() res: Response) {
    return res.send(this.mainService.getMainPage());
  }
}
