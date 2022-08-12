var ALERT_STYLES = {
    info:'info',
    tip:'success',
    danger:'danger',
    working:'warning'
};

/**
 * @param {String} style
 * @param {Object} pluginConfig
 * @return {String} HTML for an alert icon
 */
function makeIcon(style, pluginConfig) {
    var id = pluginConfig[style];
    return '<div class="hints-icon"><i class="'+id+'"></i></div>';
}

/**
 * @param {String} html
 * @return {String} HTML wrapped in a hint container
 */
function wrapInContainer(html) {
    return '<div class="hints-container">'+html+'</div>';
}

module.exports = {
    book: {
        assets: './assets',
        css: [
            'plugin-hints.css'
        ]
    },

    blocks: {
        hint: {
            process: function (block) {
                // Available styles: info, danger, tip, working
                var style = block.kwargs.style || 'info';
                var pluginConfig = this.config.get('pluginsConfig.hints');

                return this
                    .renderBlock('markdown', block.body)
                    .then(function(renderedBody) {
                        return '<div class="alert alert-'+ALERT_STYLES[style]+' hints-alert">'
                            + makeIcon(style, pluginConfig)
                            + wrapInContainer(renderedBody)
                            + '</div>';
                    });
            }
        }
    }
};
