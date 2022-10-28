import Form from "./components/Form";
import { AppStyle } from "./styles/AppStyle";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql/",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AppStyle>
        <Form/>
      </AppStyle>
    </ApolloProvider>
  );
}
export default App;
