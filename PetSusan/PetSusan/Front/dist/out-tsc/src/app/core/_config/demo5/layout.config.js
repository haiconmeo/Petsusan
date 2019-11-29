"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LayoutConfig = /** @class */ (function () {
    function LayoutConfig() {
        this.defaults = {
            'demo': 'demo5',
            // == Base Layout
            'self': {
                'layout': 'fluid',
                'body': {
                    'background-image': './assets/media/misc/bg-1.jpg',
                },
                'logo': './assets/media/logos/logo-5.png'
            },
            // == Portlet Plugin
            'portlet': {
                'sticky': {
                    'offset': 50
                }
            },
            // == Page Splash Screen loading
            'loader': {
                'enabled': true,
                'type': 'spinner-logo',
                'logo': './assets/media/logos/logo-mini-md.png',
                'message': 'Please wait...'
            },
            // == Colors for javascript
            'colors': {
                'state': {
                    'brand': '#3d4aed',
                    'light': '#ffffff',
                    'dark': '#282a3c',
                    'primary': '#5867dd',
                    'success': '#34bfa3',
                    'info': '#36a3f7',
                    'warning': '#ffb822',
                    'danger': '#fd3995'
                },
                'base': {
                    'label': [
                        '#c5cbe3',
                        '#a1a8c3',
                        '#3d4465',
                        '#3e4466'
                    ],
                    'shape': [
                        '#f0f3ff',
                        '#d9dffa',
                        '#afb4d4',
                        '#646c9a'
                    ]
                }
            },
            'width': 'fixed',
            'header': {
                'self': {
                    'fixed': {
                        'desktop': {
                            'enabled': true,
                            'mode': 'topbar'
                        },
                        'mobile': true
                    }
                },
                'search': {
                    'display': true
                },
                'menu': {
                    'self': {
                        'display': true,
                        'root-arrow': false
                    },
                    'desktop': {
                        'arrow': true,
                        'toggle': 'click',
                        'submenu': {
                            'skin': 'light',
                            'arrow': true
                        }
                    },
                    'mobile': {
                        'submenu': {
                            'skin': 'dark',
                            'accordion': true
                        }
                    }
                }
            },
            'aside': {
                'self': {
                    'skin': 'light',
                    'fixed': true,
                    'display': false,
                    'minimize': {
                        'toggle': true,
                        'default': false
                    }
                },
                'menu': {
                    'dropdown': false,
                    'scroll': true,
                    'submenu': {
                        'accordion': true,
                        'dropdown': {
                            'arrow': true,
                            'hover-timeout': 500
                        }
                    }
                }
            },
            'subheader': {
                'display': true,
                'fixed': false,
                'layout': 'subheader-v5',
                'style': 'transparent',
                'daterangepicker': {
                    'display': true
                }
            },
            'footer': {
                'self': {
                    'layout': 'extended'
                }
            }
        };
    }
    Object.defineProperty(LayoutConfig.prototype, "configs", {
        /**
         * Good place for getting the remote config
         */
        get: function () {
            return this.defaults;
        },
        enumerable: true,
        configurable: true
    });
    return LayoutConfig;
}());
exports.LayoutConfig = LayoutConfig;
//# sourceMappingURL=layout.config.js.map