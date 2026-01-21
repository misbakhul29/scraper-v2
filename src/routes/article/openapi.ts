import { registry } from '../../lib/openapi.registry';
import { publicArticleSchema } from '../../lib/schema';
import { z } from 'zod';

const SuccessResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.object({
    topic: z.string(),
    status: z.string(),
    webhookUrl: z.string()
  })
});

registry.registerPath({
  method: 'get',
  path: '/api/article/status',
  tags: ['Article'],
  summary: 'Cek Status Artikel',
  description: 'Endpoint ini memeriksa status artikel berdasarkan ID.',
  request: { },
  responses: {
    200: {
      description: 'Status Artikel Ditemukan',
      content: {
        'application/json': {
          schema: SuccessResponseSchema,
        },
      },
    },
    404: {
      description: 'Artikel Tidak Ditemukan',
      content: {
        'application/json': {
          schema: z.object({ error: z.string() }),
        },
      },
    },
  },
})

registry.registerPath({
  method: 'post',
  path: '/api/article/generate',
  tags: ['Article'],
  summary: 'Generate Artikel via AI',
  description: 'Endpoint ini memvalidasi input menggunakan Zod dan mengirim task ke RabbitMQ.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: publicArticleSchema, 
        },
      },
    },
  },
  responses: {
    202: {
      description: 'Request diterima dan masuk antrian',
      content: {
        'application/json': {
          schema: SuccessResponseSchema,
        },
      },
    },
    400: {
      description: 'Validasi Gagal',
      content: {
        'application/json': {
          schema: z.object({ error: z.string() }),
        },
      },
    },
  },
});