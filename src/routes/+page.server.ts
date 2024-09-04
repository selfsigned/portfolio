import { z } from 'zod';
import { sendEmail } from '$lib/server/aws/ses';
import { contactSchema } from '$lib/footer/ContactFormSchema';
import { fail } from '@sveltejs/kit';

export const actions = {
	contact: async ({ request }) => {
		// TODO rate limit
		const data = await request.formData();
		const message = {
			name: data.get('name'),
			email: data.get('email'),
			message: data.get('message')
		};
		const contact = contactSchema.safeParse(message);
		if (!contact.success) {
			return fail(400, { errors: contact.error.flatten().fieldErrors });
		}

		try {
			await sendEmail(
				'me@selfsigned.dev',
				'[Portfolio] Msg from ' + contact.data.name,
				`Name: ${contact.data.name}
				Email: ${contact.data.email}
				Message:\n${contact.data.message}
				`
			);
		} catch (error) {
			console.error(error);
			return fail(500, { errors: { server: 'Message could not be sent' } });
		}

		return {
			message: 'Message sent!'
		};
	}
};
