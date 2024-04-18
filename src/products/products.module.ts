import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PRODUCT_SERVICE, envs } from 'src/config';

@Module({
  controllers: [ProductsController],
  providers: [],
  imports: [
    ClientsModule.register([   
      { 
        name: PRODUCT_SERVICE, 
        transport: Transport.TCP, //canal de comunicación tiene que ser igual al del main.ts del microservicio
        options: {
          host: envs.productsMicroserviceHost,
          port: envs.productsMicroservicePort
        }
      },
    ]),
  ]
})
export class ProductsModule {}