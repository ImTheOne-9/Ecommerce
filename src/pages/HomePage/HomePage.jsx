import react from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";

const HomePage = () =>{
    const arr = ['TV', 'Tu lanh', 'Dien thoai']
    return(
        <div style={{padding:'0px 120px'}}>
            <WrapperTypeProduct>
                {arr.map((item) => {
                    return <TypeProduct key={item} name={item} />
                })}
            </WrapperTypeProduct>
            
            Homepage
        </div>
    )
}
export default HomePage;