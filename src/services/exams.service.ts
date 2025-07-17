import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class ExamsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const exams = await this.prisma.exams.findMany();

    return { data: exams, message: 'Success' };
  }
}
