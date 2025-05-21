import { Module } from '@nestjs/common'
import { ActuatorController } from './controllers'

@Module({
  controllers: [ActuatorController],
})
class ActuatorModule {}

export { ActuatorModule }
