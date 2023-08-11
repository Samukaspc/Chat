import { Input, Button, Checkbox } from "antd";
import { Center, LoginForm, LoginPage, StartEnd } from "./styled";

export default function Inicio() {
    return (
        <>
            <LoginPage>
                <LoginForm>
                    <h1>Login</h1>
                    <p>Usuário</p>
                    <Input placeholder="Usuário" />
                    <p>Senha</p>
                    <Input placeholder="*******" />
                    <StartEnd>
                        <Checkbox>Manter conectado</Checkbox> <a href="/recuperarSenha">Esqueceu a senha?</a>
                    </StartEnd>
                    <Center>
                        <Button type="primary" onClick={() => {
                            window.location.href = "/dascheboard"
                        }} >Entrar</Button>
                    </Center>
                    <p>Não tem Uma conta? <a href="/cadastro">Cadastro</a> </p>
                </LoginForm>
            </LoginPage>
        </>
    )
}