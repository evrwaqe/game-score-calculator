import { Body, Controller, Post } from '@nestjs/common'
import { AddCalculationService } from '../services/add-calculation.service'
import { AddCalculationRequestDTO } from '../dtos/request'

@Controller('calculations')
export class CalculationsController {
  constructor(private readonly addCalculationService: AddCalculationService) {}

  @Post()
  async add(@Body() dto: AddCalculationRequestDTO) {
    return this.addCalculationService.add(dto)
  }
}
