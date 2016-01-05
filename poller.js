function Poller(method) {
  if (typeof method !== "function") {
    throw new TypeError("Constructor must be passed a function!");
  }
	this.queryMethod = method;
	this.storage = null;
	this.interval = null;
}

Poller.prototype.queryThis = function() {
	return this.queryMethod();
}

Poller.prototype.queryAndStore = function() {
  this.storage = this.queryMethod();
  return this.storage;
}

Poller.prototype.start = function(timeInterval) {
  if (timeInterval < 0) {
    throw new RangeError("time passed to start method must be physically possible");
  }
	this.interval = setInterval(this.queryMethod,timeInterval);
  return this.interval;
}

Poller.prototype.stop = function() {
  clearInterval(this.interval);
}

Poller.prototype.startAndStore = function(timeInterval) {
  if (timeInterval < 0) {
    throw new RangeError("time passed to start method must be physically possible");
  }
  this.interval = setInterval(function() {
    this.storage = this.queryMethod();
  }, timeInterval);
  return this.interval;
}

Poller.prototype.retrieveStorage = function() {
  return this.storage;
}

module.exports = {
  Poller: Poller
}