import { BrowserRouter, Route, Routes }  from 'react-router-dom'
import Inicio from '../page/inicio'
import Dascheboard from '../page/dascheboard'
import Cadastro from '../page/inicio/cadastro'
import RecuperarSenha from '../page/inicio/recuperarSenha'

export default function AppRouter() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/dascheboard" element={<Dascheboard />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/recuperarSenha" element={<RecuperarSenha />} />

        </Routes>
        </BrowserRouter>
    )
}
