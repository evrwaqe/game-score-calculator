import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { User } from '@prisma/client'
import { AddCalculationService } from '../services'
import { AddCalculationRequestDTO } from '../dtos/request'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'

@ApiTags('Calculations')
@ApiBearerAuth('access-token')
@Controller('calculations')
export class CalculationsController {
  constructor(private readonly addCalculationService: AddCalculationService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async add(
    @Req() req: Request & { user: User },
    @Body() dto: AddCalculationRequestDTO,
  ) {
    return this.addCalculationService.add({ ...dto, userId: req.user.id })
  }
}
