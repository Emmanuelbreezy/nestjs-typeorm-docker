import { MigrationInterface, QueryRunner } from 'typeorm';
import { Logger } from '@nestjs/common';

export class PublicItems1715537078656 implements MigrationInterface {
  private readonly logger = new Logger(PublicItems1715537078656.name);
  public async up(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('UP');
    await queryRunner.query('UPDATE item SET isPublic = 1');
  }

  public async down(): Promise<void> {
    this.logger.log('DOWN');
  }
}
