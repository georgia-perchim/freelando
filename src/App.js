import { Card } from "./components/Card/Card";
import { Styles } from "./components/GlobalStyles/Styles";
import { ProvedorTema } from "./components/ProvedorTema/ProvedorTema";

function App() {
  return (
    <ProvedorTema>
      <Styles />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </ProvedorTema>
  );
}

export default App;
