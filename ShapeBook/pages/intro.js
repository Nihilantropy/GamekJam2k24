import Link from 'next/link';

export default function Intro() {
    return (
        <main className='text-5xl flex flex-col items-center justify-center w-screen h-screen'>
            <p className="mx-5">C'era una volta, in un regno ricco di fiumi e verde di
            boschi,<br/> un grande castello di Zucchero e Glassa.<br/>La regina, una
            strega buona e potente, governava con giustizia.</p>
        <Link
            className='mt-10' 
            href={{ pathname: '/selectpg', query: {step : 1}}}>
        {"--->"}
        </Link>
        </main>
    )
}