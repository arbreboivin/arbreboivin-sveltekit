/**
 * Store thème clair/sombre — synchronisé avec localStorage et la classe sur <html>.
 */
import { writable } from 'svelte/store';

const STORAGE_KEY = 'arbreboivin-theme';

export type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
	if (typeof window === 'undefined') return 'light';
	const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
	if (stored === 'dark' || stored === 'light') return stored;
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
	return 'light';
}

function applyTheme(theme: Theme) {
	if (typeof document === 'undefined') return;
	const html = document.documentElement;
	if (theme === 'dark') {
		html.classList.add('dark');
		html.setAttribute('data-theme', 'dark');
	} else {
		html.classList.remove('dark');
		html.setAttribute('data-theme', 'light');
	}
}

function createThemeStore() {
	const { subscribe, set, update } = writable<Theme>('light');

	return {
		subscribe,
		set: (theme: Theme) => {
			localStorage.setItem(STORAGE_KEY, theme);
			applyTheme(theme);
			set(theme);
		},
		toggle: () => {
			update((t) => {
				const next = t === 'dark' ? 'light' : 'dark';
				localStorage.setItem(STORAGE_KEY, next);
				applyTheme(next);
				return next;
			});
		},
		init: () => {
			const theme = getInitialTheme();
			applyTheme(theme);
			set(theme);
			return theme;
		}
	};
}

export const themeStore = createThemeStore();
