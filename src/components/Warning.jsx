import React from 'react';
import { useNavigate } from 'react-router-dom';

const Warning = () => {
    const navigate = useNavigate(); // useNavigate alih-alih useHistory

    return (
        <div className='scroll-smooth bg-gray-200 min-h-screen flex flex-col gap-5 items-center justify-center p-5'>
            <div className=' max-w-[980px] flex flex-col items-center gap-7'>
                <h2 className=' text-7xl font-bold'>Kamu telah terkena <span className=' text-red-600'>PHISING</span></h2>
                <h2 className='text-lg font-medium w-11/12'>Kamu baru saja memasukan data akun milikmu ke dalam website phising, namun tenang saja karena ini hanya simulasi dan data milikmu tidak akan disalahgunakan. Tetapi sebaiknya kamu mengganti passwordmu!</h2>
            </div>
            <button className="bg-black text-white py-2 px-4 mt-5 rounded-full shadow-xl text-xs md:text-base hover:scale-110 active:scale-95 duration-300" onClick={() => navigate('/explanation')}>Klik untuk mengetahui cara menghindari phising!</button>
        </div>
  );
}

export default Warning;
