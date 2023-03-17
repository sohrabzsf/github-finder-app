import { useContext } from "react";
import { AlertContext } from "../contexts/AlertContext";
import { FaExclamationCircle } from "react-icons/fa";

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <div className="flex items-start mb-4 px-4 space-x-2">
        {alert.type === "error" && (
          <FaExclamationCircle className="flex-none text-xl text-error" />
        )}
        <p className="flex-1 leading-5 text-base-content">
          <strong>{alert.message}</strong>
        </p>
      </div>
    )
  );
}

export default Alert;
