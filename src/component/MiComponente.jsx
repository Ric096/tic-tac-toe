import { useState } from 'react';
import { ModalPractica } from './ModalPractica';

function MiComponente() {
  const [modalOpen, setModalOpen] = useState(false);

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  return (
    <div>
      <button onClick={handleOpenModal}>Abrir modal</button>
      {modalOpen && (
        <ModalPractica onClose={handleCloseModal}>
          <h2>Contenido del modal</h2>
          <p>Este es el contenido del modal.</p>
        </ModalPractica>
      )}
    </div>
  );
}

export default MiComponente;