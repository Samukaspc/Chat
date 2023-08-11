import { Center, LoginForm, LoginPage } from "./styled"
import { Input, Button } from "antd"

export default function RecuperarSenha() {
    return (
        <>
            <LoginPage>
                <LoginForm>
                    <h1>Recuperar Senha</h1>
                    <p>E-mail</p>
                    <Input placeholder="E-mail" />
                    <p>Nova Senha</p>
                    <Input placeholder="*******" />
                    <p>Repita a Senha</p>
                    <Input placeholder="*******" />
                    <Center onClick={
                        () => {window.location.href = "/"}
                    } >
                        <Button type="primary" >Voltar</Button>
                        <Button type="primary"  >Salvar</Button>
                    </Center>
                </LoginForm>
            </LoginPage>
        </>
    )
}




