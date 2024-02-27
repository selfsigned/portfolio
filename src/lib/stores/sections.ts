import { readable, writable, get } from 'svelte/store';

export type Position = [x: number, y: number, z: number];
export type Rotation = [azimuthAngle: number, polarAngle: number];
export type PageSection = {
	name: string;
	key: string;
	idx?: number;
	targetPos?: Position;
	targetRot?: Rotation;
	scrollEffect?: boolean;
};

const sectionsArrayW = writable<Array<PageSection>>([]);
const sectionsW = writable<Record<string, PageSection>>({});

// Public exports
export function addSection(s: PageSection) {
	s.idx = get(sectionsArrayW).length;
	if (!get(sectionsW)[s.key]) {
		sectionsArrayW.update((arr) => [...arr, s]);
		sectionsW.update((obj) => {
			return { ...obj, [s.key]: { ...s } };
		});
	}
}

export const sectionsArray = readable<Array<PageSection>>(sectionsArrayW, (set) => {
	return sectionsArrayW.subscribe((value) => {
		set(value);
	});
});

export const sections = readable<Array<PageSection>>(sectionsW, (set) => {
	return sectionsArrayW.subscribe((value) => {
		set(value);
	});
});
