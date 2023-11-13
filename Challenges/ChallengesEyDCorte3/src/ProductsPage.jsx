import React, {useEffect} from "react";
import {useParams, useSearchParams, useNavigate} from 'react-router-dom'


export const ProductsPage = () => {
    const {id} = useParams();
    const [params] = useSearchParams(); 

    const navigate = useNavigate();

    const onLogOut = () => {
        navigate('/login', {
            replace : true
        })
    }

    return (
        <div> 
            Products Page {id||1} {params.get('sort')}
            <button onClick={() => onLogOut()}>LogOut</button>
        </div>
    )

}