import { Input, Button } from "antd";
import { Center, LoginForm, LoginPage } from "./styled";

export default function Cadastro() {
    return (
        <>
            <LoginPage>
                <LoginForm>
                    <h1>Cadastro</h1>
                    <p>Nome:</p>
                    <Input placeholder="Nome" />
                    <p>Senha:</p>
                    <Input placeholder="*******" />
                    <p>Repita a Senha:</p>
                    <Input placeholder="*******" />
                    <p>E-mail:</p>
                    <Input placeholder="*******" />
                    <Center onClick={
                        () => {
                            window.location.href = "/"
                        }
                    } >
                        <Button type="primary" >Voltar</Button>
                         <Button type="primary"  >Salvar</Button>
                    </Center>
                </LoginForm>
            </LoginPage>
        </>
    )
}