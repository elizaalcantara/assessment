import { Entity, model, property } from '@loopback/repository';

@model({ settings: { "strict": false } })
export class Reservas extends Entity {

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
    type: 'number',
    id: true,
    required: false
  })
  id: number;

  @property({
    type: 'string',
    required: false,
    default: 'ativa',
  })
  status: string;

  @property({
    type: 'date',
    required: false,
    defaultFn: "now",
  })
  criadoEm: string;

  @property({
    type: 'number',
    required: false,
  })
  duracao = (+this.fimEm - +this.inicioEm) / 60000;

  @property({
    type: 'number',
    required: false,
  })
  valor = this.duracao * 0.5;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Reservas>) {
    super(data);
  }
}
