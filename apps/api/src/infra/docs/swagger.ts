import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes'

const setupSwagger = (app: INestApplication): void => {
  const config = new DocumentBuilder()
    .setTitle('Game Score Calculator API')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        in: 'header',
      },
      'access-token',
    )
    .build()
  const doc = SwaggerModule.createDocument(app, config)
  const theme = new SwaggerTheme()
  const options = {
    customCss: theme.getBuffer(SwaggerThemeNameEnum.DARK),
    persistAuthorization: true,
  }
  SwaggerModule.setup('docs', app, doc, options)
}

export { setupSwagger }
