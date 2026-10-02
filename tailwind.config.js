export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                glow: '0 0 60px rgba(99, 102, 241, 0.18)',
                glowStrong: '0 20px 80px rgba(96, 165, 250, 0.2)',
            },
            backgroundImage: {
                'hero-grid': 'radial-gradient(circle at top left, rgba(99, 102, 241, 0.18), transparent 24%), radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.14), transparent 28%)',
            },
            colors: {
                surface: '#09101e',
                surfaceSoft: '#131a30',
                accent: '#7c3aed',
                accent2: '#2563eb',
            },
        },
    },
    plugins: [],
};
