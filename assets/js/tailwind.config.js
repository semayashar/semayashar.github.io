tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#2563eb',
                secondary: '#1e40af',
                accent: '#3b82f6',
                dark: '#0f172a',
                light: '#f8fafc',
                deskLight: '#fcfcfc',
                deskDark: '#121212',
                ink: '#1A1A1A',
                sticky: '#FDE68A',
                darkSticky: '#D97706',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                handwriting: ['Caveat', 'cursive'],
                mono: ['Courier Prime', 'monospace'],
            },
            boxShadow: {
                paper: '0 10px 30px -5px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.05)',
                floating: '0 30px 60px -15px rgba(0,0,0,0.3), 0 4px 10px rgba(0,0,0,0.1)',
                polaroid: '0 15px 35px -5px rgba(0,0,0,0.15)',
            },
            animation: {
                'float-slow': 'float 6s ease-in-out infinite',
                'float-med': 'float 5s ease-in-out infinite',
                'float-fast': 'float 4s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0) rotate(var(--rot))' },
                    '50%': { transform: 'translateY(-12px) rotate(var(--rot))' },
                },
            },
        },
    },
};
