import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, {cors: true});
    await app.listen(process.env.PORT || 5000, () => console.log(`Server was started on PORT ${process.env.PORT || 5000}`));
  } catch (err) {
    console.log(`Bootstrap error: ${err.message}`)
  }

}

bootstrap();
