use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ProjectMetadata {
    pub id: String,
    pub name: String,
    pub version: String,
    pub frame_count: u32,
    pub frame_width: u32,
    pub frame_height: u32,
    pub aspect_ratio: String,
}

impl Default for ProjectMetadata {
    fn default() -> Self {
        Self {
            id: "proj_default_01".to_string(),
            name: "Untitled Collage".to_string(),
            version: "0.1.0".to_string(),
            frame_count: 3,
            frame_width: 1080,
            frame_height: 1350,
            aspect_ratio: "4:5".to_string(),
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EngineStatus {
    pub initialized: bool,
    pub active_threads: usize,
    pub engine_type: String,
    pub version: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct HealthCheckResponse {
    pub status: String,
    pub app_name: String,
    pub version: String,
    pub engine: EngineStatus,
    pub default_project: ProjectMetadata,
}
