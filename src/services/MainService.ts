import { BaseService } from './BaseService';

export class MainService extends BaseService {
  constructor() {
    super();
  }

  public getMainPage() {
    return { title: 'test', body: 'This is Test Page For PaaS-TA' };
  }
}
