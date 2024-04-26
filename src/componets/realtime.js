import React, { useState, useEffect } from 'react';

const RealtimeClock = () => {
  // Configura o estado do tempo atual
  const [currentTime, setCurrentTime] = useState(new Date());

  // Define um intervalo para atualizar o tempo a cada segundo
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Atualiza a cada segundo

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []); // O array vazio [] garante que o efeito seja executado apenas uma vez na montagem

  return (
    <div>
      {/* Exibe a hora formatada */}
      <h2>{currentTime.toLocaleTimeString()}</h2>
    </div>
  );
};

export default RealtimeClock;
