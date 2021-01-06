import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOngs1605732728952 implements MigrationInterface {
  private ongsTable = new Table({
    name: 'ngos',
    columns: [
      {
        name: 'id',
        type: 'varchar',
        isPrimary: true,
      },
      {
        name: 'name',
        type: 'varchar',
      },
      {
        name: 'email',
        type: 'varchar',
        isUnique: true,
      },
      {
        name: 'password',
        type: 'varchar',
      },
      {
        name: 'whatsapp',
        type: 'varchar',
      },
      {
        name: 'city',
        type: 'varchar',
      },
      {
        name: 'uf',
        type: 'varchar',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.ongsTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.ongsTable);
  }
}
