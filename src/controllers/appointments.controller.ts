import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  InternalServerErrorException,
} from '@nestjs/common';
import {
  CreateAppointmentDto,
  CreateAppointmentSchema,
} from 'src/dtos/create-appointment.dto';
import { AppointmentsService } from 'src/services/appointments.service';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post()
  async create(
    @Body()
    data: CreateAppointmentDto,
  ) {
    try {
      const body = CreateAppointmentSchema.parse(data);
      const response = await this.appointmentsService.create(body);
      return response;
    } catch (err) {
      throw new InternalServerErrorException(
        'Failed to create appointment',
        err,
      );
    }
  }

  @Get()
  async findAll() {
    try {
      const response = await this.appointmentsService.findAll();
      return response;
    } catch (err) {
      throw new InternalServerErrorException(
        'Failed to create appointment',
        err,
      );
    }
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    try {
      const response = await this.appointmentsService.remove(id);
      return response;
    } catch (err) {
      throw new InternalServerErrorException(
        'Failed to create appointment',
        err,
      );
    }
  }
}
