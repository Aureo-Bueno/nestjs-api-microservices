import { INestApplication, Injectable, Logger, OnApplicationShutdown  } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnApplicationShutdown  {
  private readonly logger = new Logger(PrismaService.name);
  
  async onApplicationShutdown(signal?: string) {
    await this.$disconnect();
  }

  enableShutdownHooks(app: INestApplication) {
    app.enableShutdownHooks();
  }
}
