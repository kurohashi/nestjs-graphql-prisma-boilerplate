import { Module } from '@nestjs/common';
import { SharedService } from './services/shared.service';
import { DatabaseService } from './services/database/db.service';

const services = [SharedService, DatabaseService];

@Module({
  providers: services,
  exports: services,
})
export class SharedModule {}
