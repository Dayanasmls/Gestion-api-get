import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InicioControllerController } from './inicio-controller/inicio-controller.controller';

@Module({
  imports: [],
  controllers: [AppController, InicioControllerController],
  providers: [AppService],
})
export class AppModule {}
