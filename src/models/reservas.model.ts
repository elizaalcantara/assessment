import { Entity, model, property } from '@loopback/repository';

@model({ settings: { "strict": false } })
export class Reservas extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'date',
    required: true,
  })
  inicioEm: string;

  @property({
    type: 'date',
    required: true,
  })
  fimEm: string;

  @property({
    type: 'date',
    required: true,
  })
  criadoEm: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Reservas>) {
    super(data);
  }
}
