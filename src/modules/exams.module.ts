import { Module } from '@nestjs/common';
import { ExamsController } from 'src/controllers/exams.controller';
import { ExamsService } from 'src/services/exams.service';

@Module({
  controllers: [ExamsController],
  providers: [ExamsService],
})
export class ExamsModule {}
