import { Module } from '@nestjs/common'
import { CalculationsService } from './calculations.service'
import { CalculationsController } from './calculations.controller'
import { PrismaModule } from '../prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  providers: [CalculationsService],
  controllers: [CalculationsController],
})
export class CalculationsModule {}
