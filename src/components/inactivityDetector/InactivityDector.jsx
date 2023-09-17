import { useIdleTimer } from "react-idle-timer";
import { Logout } from "../../pages";
import { useState, useEffect } from "react";

const timeout = 60000*15;

const InactivityDetector = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { getElapsedTime, reset } = useIdleTimer({
    timeout: timeout,
    events: ["mousemove", "keydown", "mousedown"],
    onIdle: () => {
      setShowLogout(true); // Mostrar el componente Logout cuando se vuelve inactivo
    },
    onActive: () => {
      setShowLogout(false); // Ocultar el componente Logout cuando vuelve a ser activo
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsedTime = getElapsedTime();
      if (elapsedTime >= timeout && !showLogout) {
        reset(); // Reiniciar el temporizador si aún no se ha mostrado el componente Logout
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [getElapsedTime, reset, showLogout]);

  return <>{showLogout && <Logout />}</>;
};

export { InactivityDetector };
