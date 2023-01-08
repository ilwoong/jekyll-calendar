function digit2(value)
{
    return value < 10 ? "0" + value : value;
}

function setClock() {
    const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var ampm = hour >= 12 ? '오후' : '오전';

    if (hour >= 12) {
        hour -= 12;
    }

    hour = digit2(hour);
    minute = digit2(minute);

    document.getElementById("clock-ampm").innerHTML = ampm;
    document.getElementById("clock-date").innerHTML = now.toLocaleDateString() + " " + WEEKDAY[now.getDay()];
    document.getElementById("clock-time").innerHTML = hour + ":" + minute;
}

window.onload = function() {
    setClock();
    setInterval(setClock, 1000);
}