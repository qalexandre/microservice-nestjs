import { KafkaOptions, Transport } from '@nestjs/microservices';

export const microserviceConfig: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ['localhost:9093'],
    },
    consumer: {
      groupId: 'ex-consumer',
    },
  },
};
