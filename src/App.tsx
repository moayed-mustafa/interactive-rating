import RatingComponent from "./components/rating.tsx";
import Layout from "./styles/layouts/layout.tsx";
const App = () => {
  // create a rating container and render both of the rating/thank you in it
  return (
    <Layout>
      <RatingComponent></RatingComponent>
    </Layout>
  );
}

export default App;
