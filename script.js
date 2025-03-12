document.addEventListener('DOMContentLoaded', function() {
    const imgContainer = document.getElementById('imgContainer');
    const mainImage = document.getElementById('mainImage');
    const clickCounter = document.getElementById('clickCounter');
    const clickSound = document.getElementById('clickSound');

    // 預設第二張圖片
    const secondImage = new Image();
    secondImage.src = "image1.jpeg";

    let counter = 0;
    let isAnimating = false;

    imgContainer.addEventListener('click', function() {
        if (isAnimating) return;

        isAnimating = true;
        counter++;
        clickCounter.textContent = `點擊次數: ${counter}`;

        // 強制重新播放音效
        clickSound.pause();
        clickSound.currentTime = 0;
        clickSound.play();

        // 切換到第二張圖片
        const originalSrc = mainImage.src;
        mainImage.src = secondImage.src;

        // 0.1秒後切換回原始圖片
        setTimeout(function() {
            mainImage.src = originalSrc;
            isAnimating = false;
        }, 100);
    });
});
