import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const HowWork = () => {
    return (
        <section className="work-process-section section-padding fix">
            <div className="work-process-container-wrapper style1">
                <div className="container">
                    <div className="section-title text-center mxw-565 mx-auto">
                        <SectionTitle
                            SubTitle="Cara Kerja"
                            Title="Mudahkan Pengelolaan SDM Dengan Teknologi Terdepan!"
                        ></SectionTitle>
                    </div>
                    <div className="work-process-wrapper style1">
                        <div className="shape"><Image src="/assets/images/shape/workProcessShape1_1.png" alt="img" width={1416} height={225}   /></div>
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="work-process-box style1 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="step">LANGKAH - 01</div>
                                    <div className="title">Daftar Akun</div>
                                    <div className="text">Buat akun perusahaan Anda dan lengkapi informasi dasar</div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="work-process-box style1 child2 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="step">LANGKAH - 02</div>
                                    <div className="title">Konfigurasi Sistem</div>
                                    <div className="text">Atur jam kerja, shift, dan kebijakan perusahaan</div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="work-process-box style1 wow fadeInUp" data-wow-delay=".6s">
                                    <div className="step">LANGKAH - 03</div>
                                    <div className="title">Mulai Gunakan</div>
                                    <div className="text">Undang karyawan dan mulai kelola presensi dengan mudah</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWork;