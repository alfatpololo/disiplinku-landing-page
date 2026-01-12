import About4 from '@/app/Components/About/About4';
// import Choose2 from '@/app/Components/Choose/Choose2';
// import Choose4 from '@/app/Components/Choose/Choose4';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import HowWork from '@/app/Components/HowWork/HowWork';
// import Testimonial4 from '@/app/Components/Testimonial/Testimonial4';
import React from 'react';

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="Tentang Kami"
      ></BreadCumb>
      <About4
        img1="/assets/images/disiplinku/office_team.png"
        img2="/assets/images/disiplinku/blog_remote.png"
        subtitle="Tentang Aplikasi Kami"
        title="Solusi Presensi & HR Digital Terdepan"
        content="Disiplinku hadir untuk menjawab tantangan manajemen SDM di era digital. Kami mengintegrasikan teknologi cloud dan mobile untuk memudahkan perusahaan dalam mengelola absensi, penggajian, dan administrasi karyawan secara real-time dan akurat."
        FeatureList={[
          "Teknologi terdepan untuk efisiensi maksimal.",
          "Dipercaya oleh ratusan perusahaan di Indonesia.",
          "Uji coba gratis 14 hari tanpa kartu kredit!",
        ]}
        btnname="Pelajari Lebih Lanjut"
        btnurl="/about"
      ></About4>
      {/* <Choose2
        img1="/assets/images/disiplinku/mobile_app_demo.png"
        img2="/assets/images/disiplinku/blog_attendance.png"
        img3="/assets/images/disiplinku/dashboard_feature.png"
        subtitle="Kustomisasi & Analisa"
        title="Kelola Komunikasi Tim Dengan Mudah."
        content="Platform kami dirancang fleksibel untuk berbagai jenis industri, mulai dari UMKM hingga perusahaan enterprise. Dapatkan laporan analisis mendalam untuk pengambilan keputusan yang lebih baik."
        boximg1="/assets/images/icon/wcuIcon2_1.svg"
        boxtitle1="Kolaborasi Mudah"
        boxcontent1="Fitur pengumuman dan chat internal untuk kelancaran komunikasi tim."
        boximg2="/assets/images/icon/wcuIcon2_2.svg"
        boxtitle2="Solusi Inovatif"
        boxcontent2="Terus berkembang dengan fitur-fitur baru sesuai kebutuhan pasar."
      ></Choose2> */}
      <HowWork></HowWork>
      {/* <Choose4></Choose4> */}
      {/* <Testimonial4></Testimonial4> */}
    </div>
  );
};

export default page;