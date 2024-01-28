import { useAppContext } from '../contexts/AppContext';
import Link from 'next/link';

export default function Step1() {

    const AppContext = useAppContext();
    console.log(AppContext.player1);
    console.log(AppContext.player2);
    return (
        <main className='text-5xl flex flex-col items-center justify-center w-screen h-screen'>
            Step2
            <Link
            className='mt-10' 
            href={{ pathname: '/selectpg', query: {step : 3}}}>
        {"--->"}
        </Link>
        </main>
    )
}