function formatTime(minutes){
    const day = Math.floor(minutes / 1440);
    const hour = Math.floor((minutes - day * 1440) / 60);
    const minute = minutes - (day * 1440) - (hour * 60);
    return day + " day(s) " + hour + " hour(s) " + minute + " minute(s).";
}

formatTime(120);
formatTime(59);
formatTime(3601);
