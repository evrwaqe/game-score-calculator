import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from './infra'
import { CalculationsModule } from './modules/calculations'
import { ActuatorModule } from './modules/actuator'

@Module({
  imports: [PrismaModule, CalculationsModule, ActuatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
