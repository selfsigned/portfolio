import { Resource } from 'sst';
import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';

const client = new SESv2Client();

/**
 * Sends an email using the SESv2Client from the AWS SDK.
 *
 * @param to - The email address of the recipient.
 * @param subject - The subject of the email.
 * @param body - The body content of the email.
 * @returns A promise that resolves when the email is sent successfully.
 */
export const sendEmail = async (to: string, subject: string, body: string) => {
	await client.send(
		new SendEmailCommand({
			FromEmailAddress: to,
			Destination: {
				ToAddresses: [to]
			},
			Content: {
				Simple: {
					Subject: { Data: subject },
					Body: { Text: { Data: body } }
				}
			}
		})
	);
};
