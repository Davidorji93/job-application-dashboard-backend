import { Injectable } from '@nestjs/common';
import { JobApplication } from './app.entity';

@Injectable()
export class ApplicationsService {
  private readonly applications: JobApplication[] = [
    { id: '1', jobTitle: 'Frontend Developer', companyName: 'TechCorp', status: 'accepted', dateApplied: '2024-10-12' },
    { id: '2', jobTitle: 'Backend Developer', companyName: 'WebSolutions', status: 'pending', dateApplied: '2024-11-01' },
    { id: '3', jobTitle: 'Data Analyst', companyName: 'Data Inc', status: 'rejected', dateApplied: '2024-10-20' },
  ];

  getAllApplications(): JobApplication[] {
    return this.applications;
  }

  getApplicationStats() {
    const stats = {
      total: this.applications.length,
      accepted: this.applications.filter(app => app.status === 'accepted').length,
      pending: this.applications.filter(app => app.status === 'pending').length,
      rejected: this.applications.filter(app => app.status === 'rejected').length,
    };
    return stats;
  }
}
