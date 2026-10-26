use crate::error::AppResult;
use crate::models::EngineStatus;

pub struct CanvasEngine {
    pub initialized: bool,
    pub max_concurrency: usize,
}

impl Default for CanvasEngine {
    fn default() -> Self {
        Self {
            initialized: true,
            max_concurrency: num_cpus(),
        }
    }
}

impl CanvasEngine {
    pub fn new() -> Self {
        Self::default()
    }

    pub fn status(&self) -> EngineStatus {
        EngineStatus {
            initialized: self.initialized,
            active_threads: self.max_concurrency,
            engine_type: "Rust Image & Raster Pipeline (Tokio)".to_string(),
            version: env!("CARGO_PKG_VERSION").to_string(),
        }
    }

    pub fn validate_canvas(&self, width: u32, height: u32) -> AppResult<()> {
        if width == 0 || height == 0 {
            return Err(crate::error::AppError::Validation(
                "Canvas dimensions must be greater than zero".into(),
            ));
        }
        Ok(())
    }
}

fn num_cpus() -> usize {
    std::thread::available_parallelism()
        .map(|p| p.get())
        .unwrap_or(4)
}
