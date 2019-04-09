import {DefaultCrudRepository} from '@loopback/repository';
import {Reservas} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ReservasRepository extends DefaultCrudRepository<
  Reservas,
  typeof Reservas.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Reservas, dataSource);
  }
}
