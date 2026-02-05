export const transition = {
	duration: 0.4,
	ease: [0.25, 0.46, 0.45, 0.94] as const, // ease-out-quad
};

export const transitionSlow = {
	duration: 0.6,
	ease: [0.25, 0.46, 0.45, 0.94] as const,
};

export const transitionFast = {
	duration: 0.2,
	ease: [0.25, 0.46, 0.45, 0.94] as const,
};

export const fadeIn = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
	transition,
};

export const slideUp = {
	initial: { opacity: 0, y: 10 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 10 },
	transition,
};

export const slideDown = {
	initial: { opacity: 0, y: -10 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -10 },
	transition,
};

export const scaleIn = {
	initial: { opacity: 0, scale: 0.95 },
	animate: { opacity: 1, scale: 1 },
	exit: { opacity: 0, scale: 0.95 },
	transition,
};

export const scaleInY = {
	initial: { opacity: 0, scaleY: 0.95 },
	animate: { opacity: 1, scaleY: 1 },
	exit: { opacity: 0, scaleY: 0.95 },
	transition,
};
