import { useAppContext } from '../contexts/AppContext';

export default function Step4() {
    const AppContext = useAppContext();
    return (
        <main>
            <img src={AppContext.imgSrc}></img>
        </main>
    );
}