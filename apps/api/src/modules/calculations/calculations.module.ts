import { Module } from '@nestjs/common'
import { CalculationsController } from './controllers'
import { AddCalculationService } from './services'

@Module({
  controllers: [CalculationsController],
  providers: [AddCalculationService],
})
export class CalculationsModule {}
