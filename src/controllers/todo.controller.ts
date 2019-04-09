import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
  ModelDefinition,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { Reservas } from '../models';
import { ReservasRepository } from '../repositories';
import { stringify } from 'querystring';
import { DbDataSource } from '../datasources';

export class TodoController {
  constructor(
    @repository(ReservasRepository)
    public reservasRepository: ReservasRepository,
  ) { }

  @post('/reservas', {
    responses: {
      '200': {
        description: 'Reservas model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Reservas } } },
      },
    },
  })
  async create(@requestBody() reservas: Reservas): Promise<Reservas> {
    return await this.reservasRepository.create(reservas);
  }

  @get('/reservas/count', {
    responses: {
      '200': {
        description: 'Reservas model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Reservas)) where?: Where,
  ): Promise<Count> {
    return await this.reservasRepository.count(where);
  }

  @get('/reservas', {
    responses: {
      '200': {
        description: 'Array of Reservas model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Reservas } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Reservas)) filter?: Filter,
  ): Promise<Reservas[]> {
    return await this.reservasRepository.find(filter);
  }

  @patch('/reservas', {
    responses: {
      '200': {
        description: 'Reservas PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() reservas: Reservas,
    @param.query.object('where', getWhereSchemaFor(Reservas)) where?: Where,
  ): Promise<Count> {
    return await this.reservasRepository.updateAll(reservas, where);
  }

  @get('/reservas/{id}', {
    responses: {
      '200': {
        description: 'Reservas model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Reservas } } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Reservas> {
    return await this.reservasRepository.findById(id);
  }

  @patch('/reservas/{id}', {
    responses: {
      '204': {
        description: 'Reservas PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() reservas: Reservas,
  ): Promise<void> {
    await this.reservasRepository.updateById(id, reservas);
  }

  @put('/reservas/{id}', {
    responses: {
      '204': {
        description: 'Reservas PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() reservas: Reservas,
  ): Promise<void> {
    await this.reservasRepository.replaceById(id, reservas);
  }

  @del('/reservas/{id}', {
    responses: {
      '204': {
        description: 'Reservas DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.reservasRepository.deleteById(id);
  }
}
