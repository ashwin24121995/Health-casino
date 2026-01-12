// Audio Manager for game sounds
class AudioManager {
  private audioContext: AudioContext | null = null;
  private masterVolume: number = 0.5;
  private soundEnabled: boolean = true;

  constructor() {
    // Initialize on first user interaction
    if (typeof window !== 'undefined') {
      document.addEventListener('click', () => this.initAudioContext(), { once: true });
    }
  }

  private initAudioContext() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  private ensureAudioContext() {
    if (!this.audioContext) {
      this.initAudioContext();
    }
    return this.audioContext;
  }

  // Play a beep sound
  playBeep(frequency: number = 800, duration: number = 100) {
    if (!this.soundEnabled) return;

    try {
      const ctx = this.ensureAudioContext();
      if (!ctx) return;

      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(this.masterVolume * 0.3, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration / 1000);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + duration / 1000);
    } catch (e) {
      console.log('Audio playback not supported');
    }
  }

  // Play a winning sound
  playWinSound() {
    if (!this.soundEnabled) return;

    try {
      const ctx = this.ensureAudioContext();
      if (!ctx) return;

      const notes = [523.25, 659.25, 783.99]; // C, E, G
      const duration = 150;

      notes.forEach((frequency, index) => {
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';

        const startTime = ctx.currentTime + (index * duration / 1000);
        gainNode.gain.setValueAtTime(this.masterVolume * 0.3, startTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration / 1000);

        oscillator.start(startTime);
        oscillator.stop(startTime + duration / 1000);
      });
    } catch (e) {
      console.log('Audio playback not supported');
    }
  }

  // Play a losing sound
  playLoseSound() {
    if (!this.soundEnabled) return;

    try {
      const ctx = this.ensureAudioContext();
      if (!ctx) return;

      const notes = [392, 349.23, 293.66]; // G, F, D
      const duration = 150;

      notes.forEach((frequency, index) => {
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';

        const startTime = ctx.currentTime + (index * duration / 1000);
        gainNode.gain.setValueAtTime(this.masterVolume * 0.3, startTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration / 1000);

        oscillator.start(startTime);
        oscillator.stop(startTime + duration / 1000);
      });
    } catch (e) {
      console.log('Audio playback not supported');
    }
  }

  // Play a click sound
  playClickSound() {
    if (!this.soundEnabled) return;

    try {
      const ctx = this.ensureAudioContext();
      if (!ctx) return;

      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.frequency.setValueAtTime(1000, ctx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.05);
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(this.masterVolume * 0.2, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.05);
    } catch (e) {
      console.log('Audio playback not supported');
    }
  }

  // Play a multiplier increase sound
  playMultiplierSound() {
    if (!this.soundEnabled) return;

    try {
      const ctx = this.ensureAudioContext();
      if (!ctx) return;

      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.frequency.setValueAtTime(600, ctx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(this.masterVolume * 0.3, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.1);
    } catch (e) {
      console.log('Audio playback not supported');
    }
  }

  // Toggle sound on/off
  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    return this.soundEnabled;
  }

  // Set master volume (0-1)
  setVolume(volume: number) {
    this.masterVolume = Math.max(0, Math.min(1, volume));
  }

  // Get sound status
  isSoundEnabled() {
    return this.soundEnabled;
  }
}

// Export singleton instance
export const audioManager = new AudioManager();
