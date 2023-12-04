$(document).ready(function () {
    const listProducts = $(".list-products");
    let scrollAmount = 300; // Change this value to adjust the scrolling distance
    const animationDuration = 1900; // Just under 2 seconds for the animation
    let timesScrolled = 0;

    setInterval(function () {
        const newScrollPosition = listProducts.scrollLeft() + scrollAmount;
        timesScrolled++;
        if (timesScrolled >= 2) {
            timesScrolled = 0;
            scrollAmount *= -1;
        }
        listProducts.stop().animate(
            {
                scrollLeft: newScrollPosition,
            },
            animationDuration
        );
    }, 5000);
});
