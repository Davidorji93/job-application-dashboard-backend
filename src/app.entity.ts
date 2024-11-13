export class JobApplication {
    id: string;
    jobTitle: string;
    companyName: string;
    status: 'pending' | 'accepted' | 'rejected';
    dateApplied: string;
  }
  