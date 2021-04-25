function Stopwatch() {
    let started = false;
    let startTime, stopTime = null;
    
    this.start = () => {
        if (started)
            throw new Error('Stopwatch has already started.');
        
        started = !started;
        startTime = new Date();
    };

    this.stop = () => {
        if (!started)
            throw new Error('Stopwatch is not started');

        started = !started;
        stopTime = new Date();
    };

    this.reset = () => {
        started = false;
        startTime = null;
        stopTime = null;
    };

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

const sw = new Stopwatch();
