import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateCalculationDto } from './create-calculation.dto'

@Injectable()
export class CalculationsService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateCalculationDto) {
    return this.prisma.calculation.create({
      data: {
        gameName: dto.gameName,
        score: dto.score,
      },
    })
  }
}
