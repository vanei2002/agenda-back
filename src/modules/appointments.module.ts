import { Module } from '@nestjs/common';
import { AppointmentsController } from 'src/controllers/appointments.controller';
import { AppointmentsService } from 'src/services/appointments.service';

@Module({
  controllers: [AppointmentsController],
  providers: [AppointmentsService],
})
export class AppointmentsModule {}
