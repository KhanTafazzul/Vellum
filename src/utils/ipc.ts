import { invoke } from '@tauri-apps/api/core';
import { HealthCheckResponse } from '../types/project';

/**
 * Checks if the frontend is currently running within a Tauri runtime container.
 */
export const isTauriEnvironment = (): boolean => {
  return typeof window !== 'undefined' && '__TAURI_INTERNALS__' in window;
};

/**
 * Invokes the Rust backend `health_check` IPC command.
 * Provides a mock fallback if previewed directly in a standard browser.
 */
export async function checkBackendHealth(): Promise<HealthCheckResponse> {
  if (isTauriEnvironment()) {
    return await invoke<HealthCheckResponse>('health_check');
  }

  // Graceful browser fallback for UI-only preview/testing
  console.warn('[Vellum IPC] Tauri runtime not detected. Providing development fallback.');
  return {
    status: 'ok',
    appName: 'Vellum Canvas Editor (Dev Web)',
    version: '0.1.0-web',
    engine: {
      initialized: true,
      activeThreads: 4,
      engineType: 'Rust Tokio Engine (Simulated)',
      version: '0.1.0',
    },
    defaultProject: {
      id: 'proj_dev_fallback',
      name: 'Panoramic Collage',
      version: '0.1.0',
      frameCount: 3,
      frameWidth: 1080,
      frameHeight: 1350,
      aspectRatio: '4:5',
    },
  };
}
