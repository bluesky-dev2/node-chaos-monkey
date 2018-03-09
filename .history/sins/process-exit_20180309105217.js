const SinBase = require("./sin-base");
const EventsEmitter = require("events").EventEmitter;
class ProcessExitSin extends SinBase {
  constructor(expressApp) {
    super(...arguments);
    this.eventEmitter = new EventsEmitter();
  }

  start() {
    process.exit(1)
  }

  stop() {
    //hmm
  }
}

module.exports = ProcessExitSin;