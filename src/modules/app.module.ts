import { Module } from '@nestjs/common';
import { ExamsModule } from './exams.module';
import { AppointmentsModule } from './appointments.module';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [ExamsModule, AppointmentsModule, PrismaModule],
})
export class AppModule {}
