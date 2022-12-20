module.exports = {
    theme: {
        extend: {
            fontFamily:{
                'fontLobster': ['Lobster', 'cursive']
            },
            screens: {
                'xs': {'max': '640px'},
                'otro': {'min': '540px'}
            },
            backgroundImage: theme => ({
                'body-image': "url('../img/pattern.png')",
                'banner-image': "url('../img/banner7.jfif')"
            }),
            colors: {
                "blue-primary": "#37bcf9",
                "blue-secundary": "#0370b9"
            },
            boxShadow: {
                asideBox: "9px 8px 14px -3px rgba(66,66,66,0.67), 9px 8px 14px -3px rgba(66,66,66,0.67), 9px 8px 14px -3px rgba(66,66,66,0.67);"
            },
            animation: {
                'spin-low': 'spin 2s linear infinite',
                'from-bellow': 'fromBellow 500ms linear',
                'bg-banner': 'backBanner 10s linear',
                'text-banner': 'showBannerText 1s linear',
                'show-card-icon': 'showCardIcon 300ms linear',
                'show-card-icon-left': 'showCardIconLeft 300ms linear',
                'show-card-category': 'showCardCategory 400ms linear',
                'show-card-description': 'showCardDesc 400ms linear'
            },
            keyframes: {
                fromBellow: {
                    '0%': {transform: 'translateY(0%)'},
                    '50%': {transform: 'translateY(200%)'},
                    '100%0': {transform: 'translateY(0%)'}
                },
                backBanner: {
                    '0%': {'background-positiion': '-200px -200px'},
                    '100%': {'background-positiion': '0px 0px'}
                },
                showBannerText: {
                    '0%': {
                        transform: 'translateX(-600%) scale(5,5)',
                        'text-shadow': 'none',
                        colors: 'transparent',
                        opacity: 0
                    },
                    '100%': {
                        transform: 'translateX(0%) scale(1,1)',
                        'text-shadow': '2px 2px 1px black',
                        colors: 'white',
                        opacity: 1
                    }
                },
                showCardIcon: {
                    'from': {
                        transform: "translateY(-200%)"
                    },
                    'to': {
                        transform: "translateY(0%)"
                    }
                },
                showCardIconLeft: {
                    'from': {
                        transform: "translateX(-200%)"
                    },
                    'to': {
                        transform: "translateX(0%)"
                    }
                },
                showCardCategory: {
                    'from': {
                        transform: "translateY(-300%)"
                    },
                    'to': {
                        transform: "translateY(0%)"
                    }
                },
                showCardDesc:{
                    'from': {
                        transform: "translateX(-300%)"
                    },
                    'to': {
                        transform: "translateX(0%)"
                    }
                }
            }
        }
    },
    variants: {
        animation: ['responsive', 'hover', 'group-hover'],
        animate: ['responsive', 'hover', 'group-hover'],
        fontSize: ['responsive', 'hover', 'group-hover'],
        scale: ['responsive', 'hover', 'group-hover'],
        transform: ['responsive', 'hover', 'group-hover'],
        padding: ['responsive', 'hover', 'group-hover'],
        margin: ['responsive', 'hover', 'group-hover'],
        height: ['responsive', 'hover', 'group-hover']
    }
}