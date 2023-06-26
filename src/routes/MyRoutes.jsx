import { BrowserRouter,Routes,Route, } from "react-router-dom";
import { ChoosePlayer } from "../component/ChoosePlayer";
import { Game } from "../component/Game";

export function MyRoutes() {
    return(

        <BrowserRouter>

        <Routes>
            <Route path="/" element={<ChoosePlayer />}/>
            <Route path="/choose-players" element={<ChoosePlayer />}/>
            <Route path="/game/:id" element={<Game />}/>

        </Routes>

        </BrowserRouter>
    )
}