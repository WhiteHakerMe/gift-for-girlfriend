document.addEventListener('visibilitychange', function() {
    const backgroundMusic = document.getElementById('music');
    const songs = ['music_Raokahi']
    let currentSongIndex = 0
    if (document.hidden) {
        // Sahifadan chiqganda musiqa to'xtatiladi
        backgroundMusic.pause();
    } else {
        // Sahifaga qaytganda musiqa davom etadi
        backgroundMusic.play();
    }
    backgroundMusic.addEventListener('ended', function() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        backgroundMusic.src = songs[currentSongIndex];
        backgroundMusic.play()
    });

});