import { Layout } from "./layouts/Layout";
import Main from "./Main";

function App(props: any) {
  console.log(props, "prop from layout");
  return (
    <Layout>
      <Main />
    </Layout>
  );
}

export default App;
