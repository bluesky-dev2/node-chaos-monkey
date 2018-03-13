const EventEmitter = require("events");

class PeakSchedule extends EventEmitter {
  constructor(properties) {
    super();
    this.startTime = new Da
    this.properties = properties;
  }

  sleepAndStart(){
    console.debug(`Peak schedule is about to sleep now for ${this.properties.sleepTimeBetweenPeaksInMS} ms`)
    this.emit("stop", {});
    setTimeout(() => {
      console.debug(`Peak schedule woke up and is about to execute for ${this.properties.pickLengthInMS} ms`)
      this.peak(new Date());
    }, this.properties.sleepTimeBetweenPeaksInMS);
  }

  peak(startTime){
    this.emit("start", {});
    const endTime = new Date();
    if((endTime - startTime) < this.properties.pickLengthInMS){
        setTimeout(() => {
          this.peak(startTime);  
        }, 0);
    }
    else{
      this.sleepAndStart();
    }
  }

  start(){
    console.log(`Peak schedule is initializing`);
    this.sleepAndStart();
  }
}

module.exports = PeakSchedule;