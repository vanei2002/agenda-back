import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateAppointmentDto } from 'src/dtos/create-appointment.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppointmentsService {
  constructor(private readonly prisma: PrismaService) {}

  private combineDateAndTime = (date: Date, time: string): Date => {
    const [hours, minutes] = time.split(':').map(Number);
    const combined = new Date(date);

    combined.setHours(hours);
    combined.setMinutes(minutes);
    combined.setSeconds(0);
    combined.setMilliseconds(0);

    return combined;
  };

  async create(data: CreateAppointmentDto) {
    Logger.debug(`Creating new appointment for examId: ${data.examId}`);

    const fullDate = this.combineDateAndTime(data.date, data.time);
    const savedAppointment = await this.prisma.appointment.create({
      data: {
        date: fullDate,
        note: data.notes,
        examId: data.examId,
      },
    });

    return {
      data: savedAppointment,
      message: 'Appointment created successfully',
    };
  }

  async findAll() {
    const appointments = await this.prisma.appointment.findMany({
      include: {
        exam: true, // inclui dados do exame, se quiser
      },
    });

    return { data: appointments, message: 'Success' };
  }

  async remove(id: string) {
    const findAppointment = await this.prisma.appointment.findUnique({
      where: { id },
    });

    if (!findAppointment) {
      throw new NotFoundException(`Agendamento com id ${id} não encontrado`);
    }

    await this.prisma.appointment.delete({
      where: { id },
    });

    return { message: 'Agendamento removido com sucesso' };
  }
}
