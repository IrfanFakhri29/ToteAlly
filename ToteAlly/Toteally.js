function gacha() {
    const loader = document.getElementById('loader');
    const result = document.getElementById('result');
    const gachaResult = document.getElementById('gachaResult');

    // Tampilkan loader
    loader.style.display = 'block';
    result.innerText = '';
    gachaResult.innerHTML = '';

    // Simulasikan delay gacha (misalnya 1.5 detik)
    setTimeout(() => {
        const probability = Math.random();
        let resultText, resultImage;

        if (probability < 0.2) {
            resultText = "Selamat! Anda mendapatkan item LANGKA!";
            resultImage = "langka.jpg";
        } else if (probability < 0.4) {
            resultText = "Anda mendapatkan item BIASA 1.";
            resultImage = "putih1.jpg";
        } else if (probability < 0.6) {
            resultText = "Anda mendapatkan item BIASA 2.";
            resultImage = "putih1.jpg";
        } else if (probability < 0.8) {
            resultText = "Anda mendapatkan item BIASA 3.";
            resultImage = "putih1.jpg";
        } else {
            resultText = "Anda mendapatkan item BIASA 4.";
            resultImage = "putih1.jpg";
        }

        // Sembunyikan loader dan tampilkan hasil
        loader.style.display = 'none';
        result.innerText = resultText;
        gachaResult.innerHTML = `<img src="${resultImage}" alt="Gacha Result">`;
    }, 1500);
}
