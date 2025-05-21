import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/src/infra'
import { AddCalculationRequestDTO } from '../dtos/request'
import { AddCalculationResponseDTO } from '../dtos/response'

@Injectable()
export class AddCalculationService {
  constructor(private prisma: PrismaService) {}

  async add(dto: AddCalculationRequestDTO): Promise<AddCalculationResponseDTO> {
    const response = await this.prisma.calculation.create({
      data: dto,
    })
    return {
      id: response.id,
      gameName: response.gameName,
      score: response.score,
      createdAt: response.createdAt.toString(),
    }
  }
}
