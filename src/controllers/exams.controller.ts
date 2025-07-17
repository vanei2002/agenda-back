import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import { ExamsService } from 'src/services/exams.service';

@Controller('exams')
export class ExamsController {
  constructor(private readonly examsService: ExamsService) {}

  @Get()
  async findAll() {
    try {
      const response = await this.examsService.findAll();
      return response;
    } catch (err) {
      throw new InternalServerErrorException(
        'Failed to create appointment',
        err,
      );
    }
  }
}
