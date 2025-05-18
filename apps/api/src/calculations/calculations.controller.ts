import { Body, Controller, Post } from '@nestjs/common'
import { CalculationsService } from './calculations.service'
import { CreateCalculationDto } from './create-calculation.dto'

@Controller('calculations')
export class CalculationsController {
  constructor(private svc: CalculationsService) {}

  @Post()
  create(@Body() dto: CreateCalculationDto) {
    return this.svc.create(dto)
  }
}
