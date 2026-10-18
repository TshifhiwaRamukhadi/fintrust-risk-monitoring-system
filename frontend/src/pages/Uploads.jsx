import { useState } from "react";
import { motion } from "framer-motion";

const API_URL =
  "https://fintrust-risk-monitoring-system.onrender.com";

export default function Uploads() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const upload = async () => {
    if (!file) {
      setErrorMessage("Please select a CSV file.");
      return;
    }

    try {
      setUploading(true);
      setErrorMessage("");
      setSuccessMessage("");

      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(
        `${API_URL}/upload-csv`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Upload failed."
        );
      }

      setSuccessMessage(
        data.message ||
          `${file.name} uploaded successfully.`
      );
    } catch (error) {
      setErrorMessage(
        error.message || "Upload failed."
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1>CSV Upload Center</h1>

      <div className="upload-card p-4 bg-light rounded shadow-sm">
        <input
          type="file"
          accept=".csv"
          onChange={(e) => {
            setFile(e.target.files[0]);
            setSuccessMessage("");
            setErrorMessage("");
          }}
        />

        <button
          className="btn btn-success mt-3 ms-3"
          onClick={upload}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>

      {uploading && (
        <motion.div
          className="processing-modal mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h4>Processing Upload...</h4>

          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: "100%" }}
            />
          </div>

          <p className="mt-2">
            Uploading CSV to AWS S3...
          </p>
        </motion.div>
      )}

      {successMessage && (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="alert alert-success mt-4"
        >
          {successMessage}
        </motion.div>
      )}

      {errorMessage && (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="alert alert-danger mt-4"
        >
          {errorMessage}
        </motion.div>
      )}
    </div>
  );
}