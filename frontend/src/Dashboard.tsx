import { Text } from "@chakra-ui/react"
import {useEffect} from "react";
import {verifyAuth} from "./auth/Authenticator";
import {useNavigate} from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!verifyAuth()) {
            navigate('/');
        }
    } ,[])

    return (
        <div>
            <Text>Dashboard2</Text>
        </div>
    )
}