function Stopwatch() {
    let started = false;
    let startTime = null;
    let stopTime = null;

    Object.defineProperty(this, 'started', {
        get: () => { return started; },
        set: (value) => {
            if (value === 0) { // resetting stopwatch
                started = false;
                startTime = false;
                stopTime = null;
                return;
            }

            if (typeof value !== 'boolean')
                throw new Error('started must be a boolean');
            
            started = value

            if (value) {
                startTime = new Date();
                stopTime = null;
                return;
            }

            stopTime = new Date();
        }
    });

    Object.defineProperty(this, 'startTime', {
        get: () => { return startTime; },
    });

    Object.defineProperty(this, 'stopTime', {
        get: () => { return stopTime; },
    });

    Object.defineProperty(this, 'duration', {
        get: () => {
            let duration = 0;

            if (startTime && !stopTime)
                duration = Date.now() - startTime;
            if (stopTime)
                duration = stopTime - startTime;

            return duration / 1000;
        }
    });
}

Stopwatch.prototype.start = function() {
    if (this.started)
            throw new Error('Stopwatch has already started.');
        
    this.started = !this.started;
}

Stopwatch.prototype.stop = function() {
    if (!this.started)
        throw new Error('Stopwatch is not started');

    this.started = !this.started;
};

Stopwatch.prototype.reset = function() {
    this.started = 0;
};

const sw = new Stopwatch();
