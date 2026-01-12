import Image from "next/image";
import Link from "next/link";

const Blog1 = () => {
    return (

        <section className="blog-section section-padding fix">
            <div className="container">
                <div className="blog-wrapper style1">
                    <div className="section-title text-center mxw-685 mx-auto">
                        <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                            Blog Kami <Image src="/assets/images/icon/fireIcon.svg" alt="img" width={16} height={17} />
                        </div>
                        <h2 className="title wow fadeInUp" data-wow-delay=".4s">Artikel Terbaru Seputar HRD</h2>
                    </div>
                    <div className="row gy-5">
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card style1 wow fadeInUp" data-wow-delay=".2s">
                                <div className="thumb">
                                    <Image src="/assets/images/disiplinku/blog_attendance.png" alt="img" width={326} height={219} />
                                </div>
                                <div className="body">
                                    <div className="tag-meta">
                                        <Image src="/assets/images/icon/FolderIcon.svg" alt="img" width={16} height={12} />
                                        Workplace
                                    </div>
                                    <h3><Link href="/blog/blog-details">Pentingnya Digitalisasi Absensi di Era Modern</Link></h3>
                                    <div className="blog-meta">
                                        <div className="item child1">
                                            <span className="icon">
                                                <Image src="/assets/images/icon/userIcon.svg" alt="img" width={14} height={16} />
                                            </span>
                                            <span className="text">Oleh Admin</span>
                                        </div>
                                        <div className="item">
                                            <span className="icon">
                                                <Image src="/assets/images/icon/calendar.svg" alt="img" width={15} height={16} />
                                            </span>
                                            <span className="text">30 Sep 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card style1 wow fadeInUp" data-wow-delay=".4s">
                                <div className="thumb">
                                    <Image src="/assets/images/disiplinku/blog_wfh.png" alt="img" width={326} height={219} />
                                </div>
                                <div className="body">
                                    <div className="tag-meta">
                                        <Image src="/assets/images/icon/FolderIcon.svg" alt="img" width={16} height={12} />
                                        Teknologi
                                    </div>
                                    <h3><Link href="/blog/blog-details">Cara Meningkatkan Produktivitas Karyawan WFH</Link></h3>
                                    <div className="blog-meta">
                                        <div className="item child1">
                                            <span className="icon">
                                                <Image src="/assets/images/icon/userIcon.svg" alt="img" width={14} height={16} />
                                            </span>
                                            <span className="text">Oleh Admin</span>
                                        </div>
                                        <div className="item">
                                            <span className="icon">
                                                <Image src="/assets/images/icon/calendar.svg" alt="img" width={15} height={16} />
                                            </span>
                                            <span className="text">30 Sep 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card style1 wow fadeInUp" data-wow-delay=".6s">
                                <div className="thumb">
                                    <Image src="/assets/images/disiplinku/blog_remote.png" alt="img" width={326} height={219} />
                                </div>
                                <div className="body">
                                    <div className="tag-meta">
                                        <Image src="/assets/images/icon/FolderIcon.svg" alt="img" width={16} height={12} />
                                        Manajemen
                                    </div>
                                    <h3><Link href="/blog/blog-details">Strategi Efektif Mengelola Tim Jarak Jauh</Link></h3>
                                    <div className="blog-meta">
                                        <div className="item child1">
                                            <span className="icon">
                                                <Image src="/assets/images/icon/userIcon.svg" alt="img" width={14} height={16} />
                                            </span>
                                            <span className="text">Oleh Admin</span>
                                        </div>
                                        <div className="item">
                                            <span className="icon">
                                                <Image src="/assets/images/icon/calendar.svg" alt="img" width={15} height={16} />
                                            </span>
                                            <span className="text">30 Sep 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog1;