import { z } from 'zod'

export const planSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    price: z.number(),
    icon_url: z.string(),
    active: z.boolean(),
    duration: z.number(),
});
  
const planServiceSchema = z.object({
    id: z.number(),
    service_id: z.number(),
    plan_id: z.number(),
    plan: planSchema,
});
  
const serviceSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    plans: z.array(planSchema),
});

export const responseSchema = z.object({
    services: z.array(serviceSchema),
});
export const planResponseSchema = z.object({
    plans: z.array(planSchema)
})

export type Services = z.infer<typeof responseSchema>
export type Plans = z.infer<typeof planSchema>