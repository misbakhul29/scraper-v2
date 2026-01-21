import z, { success } from "zod";
import { registry } from "../lib/openapi.registry";

registry.registerPath({
    method: 'get',
    path: '/health',
    tags: ['Health'],
    summary: 'Cek Kesehatan Server',
    description: 'Endpoint ini memeriksa apakah server berjalan dengan baik.',
    responses: {
      200: {
        description: 'Server Berjalan dengan Baik',
        content: {
          'application/json': {
            schema: z.object({
              success: z.literal('true'),
              message: z.string().default("Server Berjalan dengan Baik"),
              timestamp: z.date().default(() => new Date()),
            }),
          },
        },
      },
    },
})