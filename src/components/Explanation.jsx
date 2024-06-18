import React from 'react';

const Explanation = () => {

  return (
    <div className="min-h-screen flex flex-col">
        {/* <button className="border border-black text-black py-1 px-3 rounded mb-4 hover:scale-105 active:scale-90 duration-300 absolute left-5 top-4" onClick={() => navigate('/warning')}>Back</button> */}
        <div className=' w-full h-auto bg-gray-200 p-5'>
            <h1 className=' text-3xl font-bold mb-3 m-4'>Apakah kamu tau apa itu PHISING?</h1>
            <p className=' font-medium m-4 rounded-2xl shadow-lg bg-white py-4 px-5 hover:scale-105 duration-300'>Phishing adalah metode penipuan di mana penyerang mencoba untuk mendapatkan <span className=' font-black'>informasi sensitif</span> seperti kata sandi, nomor kartu kredit, dan data pribadi lainnya dengan <span className=' font-black'>menyamar sebagai entitas yang 
            terpercaya</span> dalam komunikasi elektronik. Pada simulasi ini, Anda mengalami phishing melalui sebuah tautan dari email yang mengarahkan Anda ke situs web tiruan.</p>
        </div>

        <div className='w-full h-auto bg-gray-200 p-5'>
        <h1 className='text-3xl font-bold mb-3 m-4'>Ayo kenali Ciri-Ciri Email Phishing!</h1>
        <ol className='p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 relative'>
            <li className='rounded-2xl shadow-lg bg-white py-4 px-5 flex flex-col items-center gap-3 hover:scale-105 duration-300'>
                <h2 className='font-bold text-xl'>Alamat Pengirim Mencurigakan</h2>
                <p>Harap periksa alamat email pengirim. Email phising sering kali menggunakan alamat yang mirip dengan yang asli tetapi dengan sedikit perbedaan.</p>
            </li>
            <li className='rounded-2xl shadow-lg bg-white py-4 px-5 flex flex-col items-center gap-3 hover:scale-105 duration-300'>
                <h2 className='font-bold text-xl'>Tata Bahasa yang Buruk</h2>
                <p>Perhatikan tata bahasa pesan email yang dikirim kepada Anda karena banyak email phishing memiliki kesalahan tata bahasa atau ejaan.</p>
            </li>
            <li className='rounded-2xl shadow-lg bg-white py-4 px-5 flex flex-col items-center gap-3 hover:scale-105 duration-300'>
                <h2 className='font-bold text-xl'>Link yang Mencurigakan</h2>
                <p>Untuk mengetahui validitas link/tautan, harap arahkan mouse ke tautan tanpa mengklik untuk melihat URL sebenarnya. Situs web phising sering menggunakan URL yang hampir mirip dengan situs asli, tetapi sebenarnya URL aslinya berbeda dan tidak resmi.</p>
            </li>
            <li className='rounded-2xl shadow-lg bg-white py-4 px-5 flex flex-col items-center gap-3 hover:scale-105 duration-300'>
                <h2 className='font-bold text-xl'>Permintaan Informasi Pribadi</h2>
                <p>Ketahuilah bahwa entitas/pihak yang terpercaya jarang meminta informasi pribadi melalui email</p>
            </li>
        </ol>
        </div>

        <div className='w-full h-auto bg-gray-200 p-5'>
        <h1 className='text-3xl font-bold mb-3 m-4'>Bagaimana cara Menghindari Phishing?</h1>
        <ol className='p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 relative'>
            <li className='rounded-2xl shadow-lg bg-white py-4 px-5 flex flex-col items-center gap-3 hover:scale-105 duration-300'>
                <h2 className='font-bold text-xl'>Verifikasi Sumber</h2>
                <p>Jangan klik tautan atau unduh lampiran dari email atau pesan yang tidak dikenal. Jika menerima email atau pesan yang meminta Anda untuk mengambil tindakan tertentu, periksa dengan menghubungi organisasi atau perusahaan yang bersangkutan melalui 
                    nomor telepon resmi yang tercantum di situs web resmi mereka bukan melalui nomor telepon atau tautan yang diberikan dalam email tersebut.</p>
            </li>
            <li className='rounded-2xl shadow-lg bg-white py-4 px-5 flex flex-col items-center gap-3 hover:scale-105 duration-300'>
                <h2 className='font-bold text-xl'>Periksa URL</h2>
                <p>Sebelum memasukkan informasi pribadi, pastikan URL situs web adalah yang resmi dan aman. Jika URL dimulai dengan "http", maka perlu waspada karena data yang dikirimkan melalui HTTP tidak dienkripsi dan dapat disadap oleh pihak ketiga. Sedangkan, 
                    URL yang diawali dengan "https" menunjukkan bahwa situs tersebut menggunakan enkripsi untuk melindungi data, sehingga lebih aman untuk dikunjungi.</p>
            </li>
            <li className='rounded-2xl shadow-lg bg-white py-4 px-5 flex flex-col items-center gap-3 hover:scale-105 duration-300'>
                <h2 className='font-bold text-xl'>Gunakan Autentikasi Dua Faktor</h2>
                <p>Aktifkan autentikasi dua faktor (2FA) untuk menambah lapisan keamanan tambahan. sehingga meskipun kata sandi Anda dicuri, akun Anda tetap aman karena penyerang juga memerlukan kode verifikasi kedua.</p>
            </li>
            <li className='rounded-2xl shadow-lg bg-white py-4 px-5 flex flex-col items-center gap-3 hover:scale-105 duration-300'>
                <h2 className='font-bold text-xl'>Perbarui Keamanan</h2>
                <p>Pastikan perangkat lunak antivirus dan peramban web Anda selalu diperbarui. Pembaruan ini sering kali mencakup perbaikan keamanan yang penting untuk melindungi perangkat Anda dari ancaman terbaru.</p>
            </li>
        </ol>
        </div>

        <div className='w-full h-auto bg-gray-200 p-5'>
        <h1 className='text-3xl font-bold mb-3 m-4'>Lakukan ini jika Terkena Phishing!</h1>
        <ol className='p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative'>
            <li className='rounded-2xl shadow-lg bg-white py-4 px-5 flex flex-col items-center gap-3 hover:scale-105 duration-300'>
                <h2 className='font-bold text-xl'>Segera Ubah Kata Sandi</h2>
                <p>Jika Anda merasa telah memberikan informasi ke situs phising, segera ubah kata sandi akun Anda.</p>
            </li>
            <li className='rounded-2xl shadow-lg bg-white py-4 px-5 flex flex-col items-center gap-3 hover:scale-105 duration-300'>
                <h2 className='font-bold text-xl'>Hubungi Penyedia Layanan</h2>
                <p>Laporkan kejadian tersebut ke bank atau penyedia layanan terkait.</p>
            </li>
            <li className='rounded-2xl shadow-lg bg-white py-4 px-5 flex flex-col items-center gap-3 hover:scale-105 duration-300'>
                <h2 className='font-bold text-xl'>Pantau Akun Anda</h2>
                <p>Periksa aktivitas yang mencurigakan di akun Anda, termasuk email dan akun bank. Jika ada aktivitas yang tidak dikenal, laporkan segera.</p>
            </li>
            <li className='rounded-2xl shadow-lg bg-white py-4 px-5 flex flex-col items-center gap-3 hover:scale-105 duration-300'>
                <h2 className='font-bold text-xl'>Laporkan ke Pihak Berwenang</h2>
                <p>Laporkan insiden phishing ke otoritas keamanan siber setempat atau platform keamanan siber nasional.</p>
            </li>
            <li className='rounded-2xl shadow-lg bg-white py-4 px-5 flex flex-col items-center gap-3 hover:scale-105 duration-300'>
                <h2 className='font-bold text-xl'>Hapus Email Phishing</h2>
                <p>Segera hapus email atau pesan yang mencurigakan untuk mencegah risiko lebih lanjut.</p>
            </li>
            <li className='rounded-2xl shadow-lg bg-white py-4 px-5 flex flex-col items-center gap-3 hover:scale-105 duration-300'>
                <h2 className='font-bold text-xl'>Periksa dan Lindungi Perangkat Anda</h2>
                <p>Jalankan pemindaian antivirus dan pastikan tidak ada perangkat lunak berbahaya yang terinstal di perangkat Anda.</p>
            </li>
        </ol>
        </div>
    </div>
  );
};

export default Explanation;
