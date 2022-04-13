import { Canvas } from "@react-three/fiber";
import Box from "./component/Box";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas style={{ backgroundColor: "#000" }}>
        <ambientLight intensity={0.3} />
        <Box color="#ff3b3f" position={[3, 0, 0]} />
        <Box color="#007849" position={[-3, 0, 0]} />
        <Box color="orange" position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
