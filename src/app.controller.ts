import { Controller, Get } from '@nestjs/common';
import { ApplicationsService } from './app.service';
import { JobApplication } from './app.entity';

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Get()
  getAllApplications(): JobApplication[] {
    return this.applicationsService.getAllApplications();
  }

  @Get('stats')
  getApplicationStats() {
    return this.applicationsService.getApplicationStats();
  }
}
