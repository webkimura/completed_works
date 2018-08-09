
// Параллакс от движения мыши
if ($(window).width() > 960)
{
    $('body').parallax({
        'elements': [
            {
                'selector': '.image-dots',
                'properties': {
                    'x': {
                        'left': {
                            'initial': 159,
                            'multiplier': 0.04,
                            'unit': 'px',
                            'invert': false
                        }
                    },
                    'y': {
                        'bottom': {
                            'initial': -48,
                            'multiplier': 0.04,
                            'unit': 'px',
                            'invert': false
                        }
                    }
                }
                
            }
        ]
    });
    $('body').parallax({
        'elements': [
            {
                'selector': '.image-bg__1',
                'properties': {
                    'x': {
                        'left': {
                            'initial': 0,
                            'multiplier': 0.01,
                            'unit': 'px',
                            'invert': false
                        }
                    },
                    'y': {
                        'top': {
                            'initial': 66,
                            'multiplier': 0.04,
                            'unit': 'px',
                            'invert': false
                        }
                    }
                }
                
            }
        ]
    });
    $('body').parallax({
        'elements': [
            {
                'selector': '.image-bg__2',
                'properties': {
                    'x': {
                        'right': {
                            'initial': 0,
                            'multiplier': 0.01,
                            'unit': 'px',
                            'invert': false
                        }
                    },
                    'y': {
                        'top': {
                            'initial': 66,
                            'multiplier': 0.04,
                            'unit': 'px',
                            'invert': false
                        }
                    }
                }
                
            }
        ]
    });
}