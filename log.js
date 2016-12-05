// load log4js package
var log4js = require('log4js');

// config log4js
log4js.configure({
    appenders: [
        {
            type: 'console', // out console platform
            category: 'console'
        },
        {
            type: 'dateFile',
            filename: 'logs/application.log',
            pattern: '-yyyy-MM-dd',
            alwaysIncludePattern: false,
            category: 'dateFilelog',
        }
    ],

    replaceConsole: true, // allow replace console
    levels: {
        console: 'DEBUG',
        dateFilelog: 'DEBUG'
    }
})

// output logger
var logger = log4js.getLogger('console');
var dateFileLogger = log4js.getLogger('dateFilelog');

exports.logger = logger

exports.use = function(app) {
    // 打印debug级别以上的日志级别
    log4js.connectLogger(dateFileLogger, { level: 'DEBUG', format: ':method :url'});
}