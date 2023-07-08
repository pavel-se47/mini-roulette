import React, { useState, useEffect } from 'react';

function WheelOfFortune() {
  const [currentAngle, setCurrentAngle] = useState(0);
  const [targetSector, setTargetSector] = useState(null);
  const sectors = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const sectorAngle = 360 / sectors.length;
  const targetSectorIndex = 4; // Индекс сектора, на котором нужно остановиться

  const handleRotateClick = () => {
    const targetAngle = sectorAngle * targetSectorIndex;
    const newAngle = 360 * 3 + targetAngle;
    setCurrentAngle(newAngle);
  };

  useEffect(() => {
    if (currentAngle === 0) return;

    const rotationTimeout = setTimeout(() => {
      setTargetSector(sectors[targetSectorIndex]);
    }, 3000);

    return () => clearTimeout(rotationTimeout);
  }, [currentAngle, targetSectorIndex, sectors]);

  return (
    <div className="wheel-container">
      <div
        className="wheel"
        style={{ transform: `rotate(${currentAngle}deg)` }}
      >
        {sectors.map((sector, index) => (
          <div className="sector" key={index}>
            {sector}
          </div>
        ))}
      </div>
      <button className="rotate-button" onClick={handleRotateClick}>
        Вращать
      </button>
      {targetSector && (
        <div className="result">Выпал сектор: {targetSector}</div>
      )}
    </div>
  );
}

export default WheelOfFortune;
