import Image from "next/image";

const Feature5 = () => {
    return (
        <section className="feature-section fix section-padding pt-0">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="feature-box-items">
                            <div className="icon" style={{
                                background: 'linear-gradient(90deg, #00B7FF 0%, #0045E5 100%)',
                                borderRadius: '8px',
                                padding: '10px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '60px',
                                height: '60px'
                            }}>
                                <Image src="/assets/images/icon/01.svg" alt="img" width={40} height={40} style={{filter: 'brightness(0) invert(1)'}} />
                            </div>
                            <div className="content">
                                <h3>Buat Jadwal</h3>
                                <p>Atur jadwal kerja shift atau non-shift karyawan dengan mudah dan fleksibel.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="feature-box-items">
                            <div className="icon" style={{
                                background: 'linear-gradient(90deg, #00B7FF 0%, #0045E5 100%)',
                                borderRadius: '8px',
                                padding: '10px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '60px',
                                height: '60px'
                            }}>
                                <Image src="/assets/images/icon/02.svg" alt="img" width={40} height={40} style={{filter: 'brightness(0) invert(1)'}} />
                            </div>
                            <div className="content">
                                <h3>Kustomisasi Aturan</h3>
                                <p>Sesuaikan kebijakan cuti, lembur, dan izin sesuai dengan peraturan perusahaan Anda.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="feature-box-items">
                            <div className="icon" style={{
                                background: 'linear-gradient(90deg, #00B7FF 0%, #0045E5 100%)',
                                borderRadius: '8px',
                                padding: '10px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '60px',
                                height: '60px'
                            }}>
                                <Image src="/assets/images/icon/03.svg" alt="img" width={40} height={40} style={{filter: 'brightness(0) invert(1)'}} />
                            </div>
                            <div className="content">
                                <h3>Pantau Kinerja</h3>
                                <p>Dapatkan laporan kehadiran dan produktivitas karyawan secara real-time dan akurat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature5;