import OrderForm from "../components/OrderForm";
import Header from "../components/Header";

export default function Order(){
    return(
        <>
            <Header checkPage={true}/>
            <OrderForm />
        </>
    )
}