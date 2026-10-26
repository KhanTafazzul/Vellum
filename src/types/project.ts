export interface EngineStatus {
  initialized: boolean;
  activeThreads: number;
  engineType: string;
  version: string;
}

export interface ProjectMetadata {
  id: string;
  name: string;
  version: string;
  frameCount: number;
  frameWidth: number;
  frameHeight: number;
  aspectRatio: string;
}

export interface HealthCheckResponse {
  status: string;
  appName: string;
  version: string;
  engine: EngineStatus;
  defaultProject: ProjectMetadata;
}

export interface CanvasLayer {
  id: string;
  name: string;
  type: 'image' | 'text' | 'shape';
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  opacity: number;
  visible: boolean;
  locked: boolean;
  frameIndex?: number;
}

export interface FrameConfig {
  index: number;
  name: string;
  width: number;
  height: number;
}

export type EditorTool = 'select' | 'pan' | 'frame' | 'image' | 'text' | 'shape';
