import Link from 'next/link';
import data from '../../Data/team1.json';
import Image from 'next/image';

const Team2 = () => {
    // Nama-nama yang perlu diturunkan gambarnya
    const adjustPositionNames = ['Deden.JPG', 'Ajie.JPG', 'Devina.JPG', 'Exsan.JPG', 'Jemi.JPG'];
    const shouldAdjustPosition = (imgPath) => adjustPositionNames.some(name => imgPath.includes(name));
    
    return (
        <section className="team-section-3 section-padding pt-0 fix">
            <div className="container">
                <div className="section-title text-center mxw-685 mx-auto">
                    <h2 className="title wow fadeInUp" data-wow-delay=".4s">Tim Hebat Di Balik Disiplinku</h2>
                </div>
                <div className="row">
                    {data.slice(0, 3).map((item, index) => (
                        <div key={index} className="col-xl-4 col-md-6">
                            <div className="team-card style1 wow fadeInLeft" data-wow-delay=".3s">
                                <div className="team-thumb" style={{ width: '300px', height: '300px', margin: '0 auto', position: 'relative', overflow: 'hidden', borderRadius: '50%' }}>
                                    <Image src={item.img} alt="img" width={300} height={300} style={{ objectFit: 'cover', width: '100%', height: '100%', objectPosition: shouldAdjustPosition(item.img) ? 'center 40%' : 'center' }} />
                                </div>
                                <div className="team-card-content">
                                    <h3>
                                        <Link href="/team/team-details">{item.title}</Link>
                                    </h3>
                                    <p className="designation">{item.desc}</p>
                                    <ul className="social-links">
                                        <li><Link href={item.facebook}><i className="bi bi-facebook"></i></Link></li>
                                        <li><Link href={item.twitter}><i className="bi bi-twitter"></i></Link></li>
                                        <li><Link href={item.linkedin}><i className="bi bi-linkedin"></i></Link></li>
                                        <li><Link href={item.pinterest}><i className="bi bi-pinterest"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Team2;