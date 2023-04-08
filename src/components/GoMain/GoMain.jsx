
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function GoMain() {
    
const navigate = useNavigate();
    useEffect(() => {
            const goMain = () => {
         navigate("/", { replace: true });
    }
        goMain();
    },[navigate])
    return (
        <>
        </>
    );
}