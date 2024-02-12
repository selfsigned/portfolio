import { writable } from 'svelte/store';

type Notification = { message: string; error?: boolean };

export const notifications = writable<Notification[]>([]);

export function notify(message: string, error?: boolean) {
	notifications.update((n) => [{ message: message, error: error }, ...n]);
	setTimeout(removeNotification, 3000);
}

function removeNotification() {
	notifications.update((n) => [...n.slice(0, n.length - 1)]);
}
