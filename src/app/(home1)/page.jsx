import React from 'react';
import HeroBanner3 from '../Components/HeroBanner/HeroBanner3';
import Feature4 from '../Components/Feature/Feature4';
import Feature5 from '../Components/Feature/Feature5';
import Feature6 from '../Components/Feature/Feature6';
import HowWork3 from '../Components/HowWork/HowWork3';
import Pricing3 from '../Components/Pricing/Pricing3';
// import Counter1 from '../Components/Counter/Counter1';
import About3 from '../Components/About/About3';
// import Brand3 from '../Components/Brand/Brand3';
// import Testimonial3 from '../Components/Testimonial/Testimonial3';
import Blog1 from '../Components/Blog/Blog1';

const page = () => {
    return (
        <div>
            <HeroBanner3
                bgimg="/assets/images/hero/hero-bg.png"
                subtitle="Kelola Tim Lebih Efektif"
                title="Solusi Manajemen Presensi & HR <span>Perusahaan</span>"
                content="Disiplinku menghadirkan efisiensi dalam pengelolaan kehadiran, izin, cuti, dan administrasi karyawan Anda. Sederhanakan operasional HR dan tingkatkan produktivitas tim sekarang juga."
                btnname="Mulai Sekarang"
                btnurl="/contact"
                btnname2="Unduh Aplikasi"
                btnurl2="/about"
                img1="/assets/images/hero/01.png"
                img2="/assets/images/hero/mobile.png"
            ></HeroBanner3>
            <Feature4
                img="/assets/images/hero/01.png"
                subtitle="Fitur Unggulan"
                title="Manajemen Karyawan Jadi Lebih Mudah"
                content="Kami menyediakan alat lengkap untuk memastikan operasional HR berjalan lancar tanpa hambatan, dari presensi hingga laporan kinerja."
                FeatureList={[
                    "<b>Antarmuka Ramah Pengguna :</b> <span> Mudah digunakan, bahkan untuk pemula.</span>",
                    "<b>Aman & Terpercaya :</b> <span> Data perusahaan Anda aman bersama kami.</span>",
                    "<b>Dukungan 24/7 :</b> <span> Kami siap membantu kapan saja.</span>",
                    "<b>Skalabel untuk Tim :</b> <span> Dirancang untuk tumbuh bersama tim Anda.</span>",
                ]}
                btnname="Pelajari Lebih Lanjut"
                btnurl="/about"
            ></Feature4>
            <Feature5></Feature5>
            <Feature6></Feature6>
            <HowWork3></HowWork3>
            <Pricing3></Pricing3>
            {/* <Counter1></Counter1> */}
            <About3
                img1="/assets/images/disiplinku/office_team.png"
                subtitle="Apa Yang Kami Lakukan"
                title="Solusi satu atap untuk kebutuhan HRD Anda."
                content="Disiplinku membantu perusahaan beralih dari administrasi manual yang rumit ke sistem digital yang efisien dan akurat."
                boxtitle1="Tim Ahli Berpengalaman"
                boxcontent1="Didukung oleh tim yang berpengalaman dalam mengembangkan solusi HRIS terbaik untuk berbagai industri."
                boxtitle2="Layanan Terintegrasi"
                boxcontent2="Sistem yang terhubung mulai dari mesin absensi, aplikasi mobile, hingga sistem payroll."
            ></About3>
            {/* <Brand3></Brand3> */}
            {/* <Testimonial3></Testimonial3> */}
            <Blog1></Blog1>
        </div>
    );
};

export default page;