import { writable } from 'svelte/store';

type Notification = { message: string; error?: boolean };

export const notifications = writable<Notification[]>([]);

/**
 * Sends a notification to the user on the main page, stays 3 seconds
 * @param message The message to display
 * @param error Is the message an error?
 */
export function notify(message: string, error?: boolean) {
	notifications.update((n) => [{ message: message, error: error }, ...n]);
	setTimeout(removeNotification, 3000);
}

function removeNotification() {
	notifications.update((n) => [...n.slice(0, n.length - 1)]);
}
