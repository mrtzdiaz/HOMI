import ReactDOM from 'react-dom/client'
import '../index.css'
import Navbar from '../components/navbar/navbar';
import TablaMateriaPrima from '../components/materiaPrima/tablaMateriaPrima';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <section>
        <Navbar />
        <div className='mt-10 min-h-18 text-center text-5xl text-blueH [text-shadow:_2.5px_2.5px_black]'>
            <strong>Costos Básicos</strong>
        </div>
        <TablaMateriaPrima/>
    </section>
);