import { countries } from "../countries.js";
import { apiKey } from "../apikey";
import fetch from "isomorphic-unfetch";

const Index = props => (
  <div>
    {countries.map(country => {
      return <p>{country}</p>;
    })}
    <p>{apiKey}</p>
  </div>
);

// Index.getInitialProps = () => {
//   let states = states;
//   return
// };

export default Index;
