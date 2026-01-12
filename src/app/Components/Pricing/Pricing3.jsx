"use client"
import { useEffect, useState } from "react";
import PricingCard from "../Card/PricingCard";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const Pricing3 = () => {

    const [isActive, setIsActive] = useState('monthly');

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section className="pricing-section-3 section-padding fix" data-background="/assets/images/pricing-bg.jpg">
            <div className="container">
                <div className="section-title text-center mxw-685 mx-auto">
                    <div className="subtitle">
                        Penawaran Harga <Image src="/assets/images/icon/fireIcon.svg" alt="img" width={16} height={17} />
                    </div>
                    <h2 className="title">Pilih Paket Sesuai Kebutuhan</h2>
                    <p className="text">Kami menawarkan paket fleksibel yang dapat disesuaikan dengan skala perusahaan Anda.</p>
                </div>
                <div className="pricing-wrapper style1">
                    <div className="tab-section d-flex justify-content-center align-items-center">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className={`nav-item ${isActive === 'monthly' ? 'active' : ''}`} onClick={() => setIsActive('monthly')} role="presentation">
                                <button className="nav-link active" id="pills-monthly-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-monthly" type="button" role="tab" aria-controls="pills-monthly"
                                    aria-selected="true">Bulanan</button>
                            </li>
                            <li className={`nav-item ${isActive === 'yearly' ? 'active' : ''}`} role="presentation" style={{opacity: 0.5, cursor: 'not-allowed', pointerEvents: 'none'}}>
                                <button className="nav-link" id="pills-yearly-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-yearly" type="button" role="tab" aria-controls="pills-yearly"
                                    aria-selected="false" tabIndex="-1" disabled>Tahunan</button>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content" id="pills-tabContent">
                        <div className={`tab-pane ${isActive === 'monthly' ? 'active' : ''}`} id="pills-monthly" role="tabpanel"
                            aria-labelledby="pills-monthly-tab">
                            <div className="row gy-5">

                                <PricingCard
                                    name="Paket Startup"
                                    price="Rp 0"
                                    monthly="Per Bulan"
                                    content="Cocok untuk tim kecil yang baru memulai manajemen digital."
                                    FeatureList={[
                                        "Akses Hingga 10 Karyawan",
                                        "Absensi GPS & Selfie",
                                        "Laporan Bulanan",
                                        "Manajemen Cuti Dasar",
                                        "Dukungan Email",
                                    ]}
                                    btnname="Hubungi Admin"
                                    btnurl="/contact"
                                ></PricingCard>

                                <PricingCard
                                    name="Paket Bisnis"
                                    price="Rp 499rb"
                                    monthly="Per Bulan"
                                    content="Solusi lengkap untuk perusahaan berkembang."
                                    FeatureList={[
                                        "Akses Hingga 50 Karyawan",
                                        "Semua Fitur Startup",
                                        "Manajemen Shift & Lembur",
                                        "Aplikasi Mobile & Web",
                                        "Dukungan Prioritas",
                                    ]}
                                    btnname="Pilih Paket"
                                    btnurl="/pricing"
                                    isComingSoon={true}
                                ></PricingCard>

                                <PricingCard
                                    name="Paket Enterprise"
                                    price="Hubungi Kami"
                                    monthly="Kustom"
                                    content="Untuk perusahaan skala besar dengan kebutuhan khusus."
                                    FeatureList={[
                                        "Karyawan Tanpa Batas",
                                        "Semua Fitur Bisnis",
                                        "Integrasi Payroll & API",
                                        "Pelatihan Khusus",
                                        "Akun Manajer Dedikasi",
                                    ]}
                                    btnname="Hubungi Sales"
                                    btnurl="/contact"
                                    isComingSoon={true}
                                ></PricingCard>

                            </div>
                        </div>
                        <div className={`tab-pane ${isActive === 'yearly' ? 'active' : ''}`} id="pills-yearly" role="tabpanel" aria-labelledby="pills-yearly-tab">
                            <div className="row gy-5">

                                <PricingCard
                                    name="Paket Startup"
                                    price="Rp 2 jt"
                                    monthly="Per Tahun"
                                    content="Hemat biaya dengan berlangganan tahunan untuk tim kecil."
                                    FeatureList={[
                                        "Akses Hingga 10 Karyawan",
                                        "Absensi GPS & Selfie",
                                        "Laporan Bulanan",
                                        "Manajemen Cuti Dasar",
                                        "Dukungan Email",
                                    ]}
                                    btnname="Coba Gratis"
                                    btnurl="/pricing"
                                ></PricingCard>

                                <PricingCard
                                    name="Paket Bisnis"
                                    price="Rp 5 jt"
                                    monthly="Per Tahun"
                                    content="Pilihan terbaik untuk efisiensi jangka panjang."
                                    FeatureList={[
                                        "Akses Hingga 50 Karyawan",
                                        "Semua Fitur Startup",
                                        "Manajemen Shift & Lembur",
                                        "Aplikasi Mobile & Web",
                                        "Dukungan Prioritas",
                                    ]}
                                    btnname="Pilih Paket"
                                    btnurl="/pricing"
                                ></PricingCard>

                                <PricingCard
                                    name="Paket Enterprise"
                                    price="Hubungi Kami"
                                    monthly="Kustom"
                                    content="Solusi komprehensif tanpa batas."
                                    FeatureList={[
                                        "Karyawan Tanpa Batas",
                                        "Semua Fitur Bisnis",
                                        "Integrasi Payroll & API",
                                        "Pelatihan Khusus",
                                        "Akun Manajer Dedikasi",
                                    ]}
                                    btnname="Hubungi Sales"
                                    btnurl="/contact"
                                ></PricingCard>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing3;