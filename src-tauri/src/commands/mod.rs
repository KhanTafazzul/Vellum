use tauri::State;
use crate::error::AppResult;
use crate::models::HealthCheckResponse;
use crate::AppState;

#[tauri::command]
pub async fn health_check(state: State<'_, AppState>) -> AppResult<HealthCheckResponse> {
    let engine_status = state.engine.status();
    let default_project = state.default_project.clone();

    Ok(HealthCheckResponse {
        status: "ok".to_string(),
        app_name: "Vellum Canvas Editor".to_string(),
        version: env!("CARGO_PKG_VERSION").to_string(),
        engine: engine_status,
        default_project,
    })
}
