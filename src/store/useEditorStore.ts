import { create } from 'zustand';
import { CanvasLayer, EditorTool, HealthCheckResponse, ProjectMetadata } from '../types/project';

interface EditorState {
  health: HealthCheckResponse | null;
  isLoadingHealth: boolean;
  healthError: string | null;
  activeTool: EditorTool;
  zoom: number;
  project: ProjectMetadata;
  layers: CanvasLayer[];
  selectedLayerId: string | null;

  setHealth: (health: HealthCheckResponse | null) => void;
  setLoadingHealth: (loading: boolean) => void;
  setHealthError: (error: string | null) => void;
  setActiveTool: (tool: EditorTool) => void;
  setZoom: (zoom: number | ((prev: number) => number)) => void;
  selectLayer: (id: string | null) => void;
  updateLayer: (id: string, updates: Partial<CanvasLayer>) => void;
  setProject: (project: Partial<ProjectMetadata>) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  health: null,
  isLoadingHealth: true,
  healthError: null,
  activeTool: 'select',
  zoom: 0.65,
  project: {
    id: 'proj_init_01',
    name: 'Instagram Seamless Carousel',
    version: '0.1.0',
    frameCount: 3,
    frameWidth: 1080,
    frameHeight: 1350,
    aspectRatio: '4:5',
  },
  layers: [
    {
      id: 'layer_bg_placeholder',
      name: 'Background Landscape',
      type: 'image',
      x: 120,
      y: 180,
      width: 2200,
      height: 980,
      rotation: 0,
      opacity: 1,
      visible: true,
      locked: false,
    },
    {
      id: 'layer_hero_title',
      name: 'Carousel Title',
      type: 'text',
      x: 280,
      y: 300,
      width: 600,
      height: 120,
      rotation: 0,
      opacity: 0.95,
      visible: true,
      locked: false,
      frameIndex: 0,
    },
    {
      id: 'layer_floating_badge',
      name: 'Accent Badge',
      type: 'shape',
      x: 1100,
      y: 220,
      width: 140,
      height: 140,
      rotation: -12,
      opacity: 1,
      visible: true,
      locked: false,
      frameIndex: 1,
    },
  ],
  selectedLayerId: 'layer_bg_placeholder',

  setHealth: (health) => set({ health }),
  setLoadingHealth: (isLoadingHealth) => set({ isLoadingHealth }),
  setHealthError: (healthError) => set({ healthError }),
  setActiveTool: (activeTool) => set({ activeTool }),
  setZoom: (zoomOrUpdater) =>
    set((state) => ({
      zoom: typeof zoomOrUpdater === 'function' ? zoomOrUpdater(state.zoom) : zoomOrUpdater,
    })),
  selectLayer: (selectedLayerId) => set({ selectedLayerId }),
  updateLayer: (id, updates) =>
    set((state) => ({
      layers: state.layers.map((l) => (l.id === id ? { ...l, ...updates } : l)),
    })),
  setProject: (projectUpdates) =>
    set((state) => ({
      project: { ...state.project, ...projectUpdates },
    })),
}));
