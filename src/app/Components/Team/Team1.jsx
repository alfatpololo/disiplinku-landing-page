import Link from 'next/link';
import data from '../../Data/team1.json';
import Image from 'next/image';

const Team1 = () => {
    const ceo = data[0];
    const teamMembers = data.slice(1);
    
    // Nama-nama yang perlu diturunkan gambarnya
    const adjustPositionNames = ['Deden.JPG', 'Ajie.JPG', 'Devina.JPG', 'Exsan.JPG', 'Jemi.JPG'];
    const shouldAdjustPosition = (imgPath) => adjustPositionNames.some(name => imgPath.includes(name));
    
    return (
<section className="team-page-section section-padding fix">
        <div className="team-page-container-wrapper style1">
            <div className="container">
                <div className="team-page-wrapper style1">
                    {/* CEO Section - Larger and Centered */}
                    <div className="row gy-5 mb-5">
                        <div className="col-xl-6 col-lg-8 col-md-10 mx-auto">
                            <div className="team-card style1">
                                <div className="team-thumb" style={{ maxWidth: '400px', margin: '0 auto', width: '400px', height: '400px', position: 'relative', overflow: 'hidden', borderRadius: '50%' }}>
                                <Image src={ceo.img} alt="img" width={400} height={400} style={{ objectFit: 'cover', width: '100%', height: '100%', objectPosition: shouldAdjustPosition(ceo.img) ? 'center 40%' : 'center' }} />
                                </div>
                                <div className="team-card-content">
                                    <h3>
                                        <Link href="/team/team-details">{ceo.title}</Link>
                                    </h3>
                                    <p className="designation">{ceo.desc}</p>
                                    <ul className="social-links">
                                    <li><Link href={ceo.facebook}><i className="bi bi-facebook"></i></Link></li>
                            <li><Link href={ceo.twitter}><i className="bi bi-twitter"></i></Link></li>
                            <li><Link href={ceo.linkedin}><i className="bi bi-linkedin"></i></Link></li>
                            <li><Link href={ceo.pinterest}><i className="bi bi-pinterest"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Team Members Section */}
                    <div className="row gy-5">
                    {teamMembers.map((item, index)=>(
                        <div key={index} className="col-xl-4 col-md-6">
                            <div className="team-card style1">
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
            </div>
        </div>
    </section>

    );
};

export default Team1;