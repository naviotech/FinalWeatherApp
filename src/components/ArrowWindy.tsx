import { Stage, Layer, Circle, Text, Arrow } from 'react-konva';
type WindDirectionProps = {
  direction: number
}

const WindDirection = ({ direction }: WindDirectionProps) => {
  
  // Convertir dirección de grados a radianes
  const directionRadians = (direction + 90) * (Math.PI / 180);

  // Calcular la posición final de la flecha
  const arrowX = Math.cos(directionRadians) * 25;
  const arrowY = Math.sin(directionRadians) * 25;

  return (
    <Stage width={100} height={100}>
      <Layer>
        {/* Dibujar el círculo */}
        <Circle x={50} y={50} radius={4} stroke="blue" />

        {/* Dibujar las direcciones cardinales */}
        <Text x={45} y={5} text="N" fontSize={15} />
        <Text x={45} y={85} text="S" fontSize={15} />
        <Text x={85} y={45} text="E" fontSize={15} />
        <Text x={5} y={45} text="W" fontSize={15} />

        {/* Dibujar la flecha */}
        <Arrow
          points={[50, 50, 50 + arrowX, 50 + arrowY]}
          pointerLength={8}
          pointerWidth={5}
          fill="white"
          stroke="white"
          strokeWidth={2}
        />
      </Layer>
    </Stage>
  );
};

export default WindDirection;