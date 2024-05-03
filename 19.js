
function formatWithZero(num) {
    return num < 10 ? "0" + num : num;
}

function updateClock() {
    const now = new Date();
    const hours = formatWithZero(now.getHours());
    const minutes = formatWithZero(now.getMinutes());
    const seconds = formatWithZero(now.getSeconds());

    // Clear the console
    process.stdout.write("\x1B[2J\x1B[0f");

    // Move the cursor to the beginning of the console
    process.stdout.write("\x1B[0;0f");
    process.stdout.write(`${hours}:${minutes}:${seconds}`);
}

setInterval(updateClock, 1000);