pub mod commands;
pub mod engine;
pub mod error;
pub mod models;

use engine::CanvasEngine;
use models::ProjectMetadata;

pub struct AppState {
    pub engine: CanvasEngine,
    pub default_project: ProjectMetadata,
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let app_state = AppState {
        engine: CanvasEngine::new(),
        default_project: ProjectMetadata::default(),
    };

    tauri::Builder::default()
        .manage(app_state)
        .invoke_handler(tauri::generate_handler![
            commands::health_check,
        ])
        .run(tauri::generate_context!())
        .expect("error while running Vellum application");
}
