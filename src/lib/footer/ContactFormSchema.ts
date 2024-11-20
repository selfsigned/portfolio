import { z } from 'zod';

export const contactSchema = z.object({
	name: z.string().min(3, 'Name is too short').max(100, 'Name is too long'),
	email: z.string().email('Invalid Email address').min(5).max(200, 'Email is too long'),
	message: z.string().min(35, 'Please write a few more words').max(10000, 'Message is too long')
});
