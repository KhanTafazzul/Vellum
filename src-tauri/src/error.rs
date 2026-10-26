use serde::Serialize;
use thiserror::Error;

#[derive(Debug, Error)]
pub enum AppError {
    #[error("I/O error: {0}")]
    Io(#[from] std::io::Error),

    #[error("Serialization error: {0}")]
    Serialization(#[from] serde_json::Error),

    #[error("Engine processing error: {0}")]
    Engine(String),

    #[error("Project validation error: {0}")]
    Validation(String),

    #[error("Internal system error: {0}")]
    Internal(String),
}

#[derive(Debug, Serialize)]
pub struct SerializedAppError {
    pub code: String,
    pub message: String,
}

impl Serialize for AppError {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::Serializer,
    {
        let (code, message) = match self {
            AppError::Io(err) => ("IO_ERROR", err.to_string()),
            AppError::Serialization(err) => ("SERIALIZATION_ERROR", err.to_string()),
            AppError::Engine(msg) => ("ENGINE_ERROR", msg.clone()),
            AppError::Validation(msg) => ("VALIDATION_ERROR", msg.clone()),
            AppError::Internal(msg) => ("INTERNAL_ERROR", msg.clone()),
        };

        let payload = SerializedAppError {
            code: code.to_string(),
            message,
        };
        payload.serialize(serializer)
    }
}

pub type AppResult<T> = Result<T, AppError>;
