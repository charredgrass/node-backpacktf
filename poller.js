function Poller(method) {
	this.queryMethod = method;
	this.storage = null;
	this.interval = null;
}

Poller.prototype.queryThis = function() {
	this.queryMethod();
}

Poller.prototype.start = function(timeInterval) {
	this.interval = setInterval(this.queryMethod,timeInterval);
}

Poller.prototype.stop = function() {
  clearInterval(this.interval);
}

Poller.prototype.startAndStore = function(timeInterval) {
  this.interval = setInterval(function() {
    this.storage = this.queryMethod();
  }, timeInterval);
}

module.exports = {
  Poller: Poller
}