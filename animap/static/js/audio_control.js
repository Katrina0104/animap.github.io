document.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('background-audio');
    
    // 检查 LocalStorage 中是否有音频播放状态
    const isPlaying = localStorage.getItem('audioPlaying') === 'true';
    const currentTime = localStorage.getItem('audioCurrentTime');
  
    if (currentTime) {
      audio.currentTime = parseFloat(currentTime);
    }
  
    if (isPlaying) {
      audio.play();
    }
  
    // 监听页面离开事件，保存音频状态
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('audioPlaying', !audio.paused);
      localStorage.setItem('audioCurrentTime', audio.currentTime);
    });
  
    // 自动播放音频
    audio.autoplay = true;
    audio.hidden = true;
    audio.loop = true; // 设置音频循环播放
  });