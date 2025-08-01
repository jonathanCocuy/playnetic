import "./App.css";
import { MainLayout } from "./layout/MainLayout";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

function App() {
  const [isScreenTooSmall, setIsScreenTooSmall] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const minimumSize = window.innerWidth < 1480;

      if (minimumSize && !isScreenTooSmall) {
        Swal.fire({
          title: '⚠️ Pantalla muy pequeña ⚠️',
          text: 'Se recomienda un ancho mínimo de 1480px para una mejor experiencia.',
          icon: 'warning',
          confirmButtonText: 'Entendido',
          confirmButtonColor: '#ff6b6b',
          allowOutsideClick: false,
          allowEscapeKey: false,
          showCloseButton: false,
          width: '800px',
          background: '#202020',
          color: '#fff',
        });
      }
      setIsScreenTooSmall(minimumSize);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, [isScreenTooSmall]);

  return (
    <div>
      <MainLayout />
    </div>
  );
}

export default App;
