getTimeRemaining() {
    const time = this.finalDate - Date.now();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return {
        time,
        days,
        hours,
        minutes,
        seconds,
    };

    new CountdownTimer({
        selector: '#timer-1',
        targetDate: new Date('Jul 17, 2019'),
      });