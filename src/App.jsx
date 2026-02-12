import { Header} from "./header"
import  Hero  from "./hero"
import  Companies  from "./companies";
import HowItWorks from "./howItWorks";
import Reciepes from "./reciepes";
import Reviews from "./reviews";
import Price from "./price";
import Form from "./form";
import Footer from "./footer";

export default function App(){
  return(
    <>
      <Header/>
      <Hero/>
      <Companies></Companies>
      <HowItWorks></HowItWorks>
      <Reciepes></Reciepes>
      <Reviews></Reviews>
      <Price></Price>
      <Form></Form>
      <Footer></Footer>
    </>
  )
}