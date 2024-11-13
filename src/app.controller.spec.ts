import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationsController } from './app.controller';
import { ApplicationsService } from './app.service';
import { JobApplication } from './app.entity';

describe('ApplicationsController', () => {
  let applicationsController: ApplicationsController;
  let applicationsService: ApplicationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApplicationsController],
      providers: [
        {
          provide: ApplicationsService,
          useValue: {
            getAllApplications: jest.fn(),
            getApplicationStats: jest.fn(),
          },
        },
      ],
    }).compile();

    applicationsController = module.get<ApplicationsController>(ApplicationsController);
    applicationsService = module.get<ApplicationsService>(ApplicationsService);
  });

  it('should be defined', () => {
    expect(applicationsController).toBeDefined();
  });

  describe('getAllApplications', () => {
    it('should return an array of job applications', () => {
      const result: JobApplication[] = [
        { id: '1', jobTitle: 'Frontend Developer', companyName: 'TechCorp', status: 'accepted', dateApplied: '2024-10-12' },
        { id: '2', jobTitle: 'Backend Developer', companyName: 'WebSolutions', status: 'pending', dateApplied: '2024-11-01' },
      ];
      
      jest.spyOn(applicationsService, 'getAllApplications').mockReturnValue(result);
      
      expect(applicationsController.getAllApplications()).toEqual(result);
    });
  });

  describe('getApplicationStats', () => {
    it('should return statistics for job applications', () => {
      const stats = {
        total: 3,
        accepted: 1,
        pending: 1,
        rejected: 1,
      };
      
      jest.spyOn(applicationsService, 'getApplicationStats').mockReturnValue(stats);
      
      expect(applicationsController.getApplicationStats()).toEqual(stats);
    });
  });
});
