function timeToWalk(steps, stepL, speed) {
    const distanceInMeters = steps * stepL;
    const breakTimeInSec = Math.floor(distanceInMeters / 500)* 60;
    const speedInMS = (speed * 1000) / 3600;
    const time = distanceInMeters / speedInMS + breakTimeInSec;

    const hours = Math.floor(time / 3600);
    const mins = Math.floor(time / 60);
    const secs = Math.round(time % 60) 

    console.log(`${hours}:${mins}:${secs}`);
   

}timeToWalk(4000, 0.60, 5)
timeToWalk(2564, 0.70, 5.5)
