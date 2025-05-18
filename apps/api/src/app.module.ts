import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from './infra'
import { CalculationsModule } from './modules/calculations/calculations.module'

@Module({
  imports: [PrismaModule, CalculationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
