// import React from 'react'
// import Btns from '../buttons/Btns'
// import { Navigate } from 'react-router-dom'

// function Dashboard() {
//     return (
//         <div style={{
//             fontFamily: 'sans-serif',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             margin: '20px',
//         }}>

//             <div style={{
//                 width: '100%',
//                 maxWidth: '1300px',
//                 height: '60px',
//                 borderRadius: '10px',
//                 background: '#007bff',
//                 display: 'flex',
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 gap: '15px',
//                 padding: '2.5rem 1rem',
//                 marginBottom: '2rem',
//                 boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'
//             }}>
//                 <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: '500', color: '#fff' }}>
//                     AK
//                 </div>
//                 <h1 style={{ fontSize: '22px',
//                      fontWeight: '500',
//                       color: '#fff',
//                        margin: 0,
//                     }}>Aryan Khan</h1>
//             </div>

//             <div style={{ 
//   flex: '1 1 calc(50% - 7px)',  
//   boxSizing: 'border-box',
//   background: '#fff', 
//   border: '0.5px solid #ddd', 
//   borderRadius: '12px', 
//   padding: '1.25rem', 
//   display: 'flex', 
//   flexDirection: 'row', 
//   gap: '10px' 
// }}>

//                 <div style={{ background: '#fff', border: '0.5px solid #ddd', borderRadius: '12px', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                     <div style={{ width: '38px', height: '38px', background: '#E6F1FB', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                         📊
//                     </div>
//                     <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Total Projects</p>
//                     <p style={{ fontSize: '26px', fontWeight: '500', color: '#111', margin: 0 }}>48</p>
//                     <span style={{ fontSize: '12px', background: '#EAF3DE', color: '#3B6D11', padding: '3px 10px', borderRadius: '100px', width: 'fit-content' }}>↑ 12% this month</span>
//                 </div>

//                 <div style={{ background: '#fff', border: '0.5px solid #ddd', borderRadius: '12px', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                     <div style={{ width: '38px', height: '38px', background: '#E1F5EE', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                         👥
//                     </div>
//                     <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Clients</p>
//                     <p style={{ fontSize: '26px', fontWeight: '500', color: '#111', margin: 0 }}>23</p>
//                     <span style={{ fontSize: '12px', background: '#E1F5EE', color: '#085041', padding: '3px 10px', borderRadius: '100px', width: 'fit-content' }}>↑ 5 new</span>
//                 </div>

//                 {/* Card 3 */}
//                 <div style={{ background: '#fff', border: '0.5px solid #ddd', borderRadius: '12px', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                     <div style={{ width: '38px', height: '38px', background: '#FAEEDA', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                         🕐
//                     </div>
//                     <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Hours Logged</p>
//                     <p style={{ fontSize: '26px', fontWeight: '500', color: '#111', margin: 0 }}>312</p>
//                     <span style={{ fontSize: '12px', background: '#FAEEDA', color: '#633806', padding: '3px 10px', borderRadius: '100px', width: 'fit-content' }}>this quarter</span>
//                 </div>

//                 {/* Card 4 */}
//                 <div style={{ background: '#fff', border: '0.5px solid #ddd', borderRadius: '12px', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                     <div style={{ width: '38px', height: '38px', background: '#FBEAF0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                         ⭐
//                     </div>
//                     <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Rating</p>
//                     <p style={{ fontSize: '26px', fontWeight: '500', color: '#111', margin: 0 }}>4.9</p>
//                     <span style={{ fontSize: '12px', background: '#FBEAF0', color: '#72243E', padding: '3px 10px', borderRadius: '100px', width: 'fit-content' }}>★★★★★</span>
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default Dashboard


import React from 'react'
import { Link } from 'react-router-dom'

const heroStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  * {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .hero {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    padding: 0 16px;
    background-color: #000;
    color: #fff;
    overflow: hidden;
  }

  .hero-glow {
    position: absolute;
    top: 112px;
    left: 25%;
    width: 288px;
    height: 288px;
    background-color: #007bff;
    filter: blur(300px);
    z-index: 0;
    pointer-events: none;
  }

  .users-row {
    display: flex;
    align-items: center;
    margin-top: 105px;
    position: relative;
    z-index: 1;
  }

  .avatars {
    display: flex;
    padding-right: 12px;
  }

  .avatars img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid #fff;
    margin-left: -8px;
    transition: transform 0.2s;
    object-fit: cover;
  }

  .avatars img:first-child { margin-left: 0; z-index: 1; }
  .avatars img:nth-child(2) { z-index: 2; }
  .avatars img:nth-child(3) { z-index: 3; }
  .avatars img:nth-child(4) { z-index: 4; }

  .avatars img:hover { transform: translateY(-2px); }

  .users-info p {
    font-size: 14px;
    color: #d1d5db;
    margin-top: 2px;
  }

  .users-info span {
    font-weight: 500;
    color: #fff;
  }

  .hero h1 {
    font-size: 48px;
    line-height: 68px;
    font-weight: 500;
    max-width: 868px;
    text-align: center;
    margin-top: 24px;
    position: relative;
    z-index: 1;
  }

  .hero .subtitle {
    font-size: 14px;
    text-align: center;
    color: #e2e8f0;
    max-width: 780px;
    margin-top: 16px;
    position: relative;
    z-index: 1;
  }

  .hero-btns {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 32px;
    position: relative;
    z-index: 1;
  }

  .btn-primary {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 999px;
    padding: 0 28px;
    height: 44px;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .btn-primary:hover { opacity: 0.9; }

  .btn-outline {
    display: flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    color: #fff;
    border: 1px solid #007bff;
    border-radius: 999px;
    padding: 0 24px;
    height: 44px;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .btn-outline:hover { opacity: 0.8; }

  .hero-img {
    width: 100%;
    max-width: 896px;
    border-radius: 15px;
    margin-top: 64px;
    position: relative;
    z-index: 1;
  }

  @media (min-width: 768px) {
    .hero { padding: 0 64px; }
    .hero h1 { font-size: 60px; line-height: 84px; }
  }

  @media (min-width: 1024px) {
    .hero { padding: 0 96px; }
  }

  @media (min-width: 1280px) {
    .hero { padding: 0 128px; }
  }
`

const avatars = [
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop',
    'https://randomuser.me/api/portraits/men/75.jpg',
]

function Dashboard() {
    return (
        <>
            <style>{heroStyles}</style>

            <div className="hero">

                <div className="hero-glow" />

                <div className="users-row">
                    <div className="avatars">
                        {avatars.map((src, i) => (
                            <img key={i} src={src} alt="user" />
                        ))}
                    </div>
                    <div className="users-info">
                        <svg width="79" height="16" viewBox="0 0 79 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.06923 1.47645C7.21819 1.0143 7.87205 1.0143 8.02101 1.47645L9.12739 4.90897C9.19397 5.11555 9.38623 5.25558 9.60328 5.25558H13.1921C13.6755 5.25558 13.8775 5.87334 13.4875 6.15896L10.5772 8.29045C10.4034 8.41777 10.3307 8.64213 10.3968 8.84722L11.5068 12.291C11.6555 12.7523 11.1265 13.1342 10.7354 12.8477L7.84056 10.7275C7.66466 10.5987 7.42558 10.5987 7.24968 10.7275L4.3548 12.8477C3.96374 13.1342 3.43477 12.7523 3.58348 12.291L4.69347 8.84722C4.75958 8.64213 4.68686 8.41777 4.51302 8.29045L1.60274 6.15896C1.21276 5.87334 1.41479 5.25558 1.89818 5.25558H5.48696C5.70401 5.25558 5.89627 5.11555 5.96285 4.90897L7.06923 1.47645Z" fill="#007bff" />
                            <path d="M23.0536 1.47645C23.2026 1.0143 23.8564 1.0143 24.0054 1.47645L25.1118 4.90897C25.1783 5.11555 25.3706 5.25558 25.5877 5.25558H29.1764C29.6598 5.25558 29.8619 5.87334 29.4719 6.15896L26.5616 8.29045C26.3878 8.41777 26.315 8.64213 26.3811 8.84722L27.4911 12.291C27.6398 12.7523 27.1109 13.1342 26.7198 12.8477L23.8249 10.7275C23.649 10.5987 23.41 10.5987 23.2341 10.7275L20.3392 12.8477C19.9481 13.1342 19.4191 12.7523 19.5679 12.291L20.6778 8.84722C20.744 8.64213 20.6712 8.41777 20.4974 8.29045L17.5871 6.15896C17.1971 5.87334 17.3992 5.25558 17.8826 5.25558H21.4713C21.6884 5.25558 21.8806 5.11555 21.9472 4.90897L23.0536 1.47645Z" fill="#007bff" />
                            <path d="M39.0224 1.47645C39.1713 1.0143 39.8252 1.0143 39.9741 1.47645L41.0805 4.90897C41.1471 5.11555 41.3394 5.25558 41.5564 5.25558H45.1452C45.6286 5.25558 45.8306 5.87334 45.4406 6.15896L42.5303 8.29045C42.3565 8.41777 42.2838 8.64213 42.3499 8.84722L43.4599 12.291C43.6086 12.7523 43.0796 13.1342 42.6886 12.8477L39.7937 10.7275C39.6178 10.5987 39.3787 10.5987 39.2028 10.7275L36.3079 12.8477C35.9169 13.1342 35.3879 12.7523 35.5366 12.291L36.6466 8.84722C36.7127 8.64213 36.64 8.41777 36.4661 8.29045L33.5559 6.15896C33.1659 5.87334 33.3679 5.25558 33.8513 5.25558H37.4401C37.6571 5.25558 37.8494 5.11555 37.916 4.90897L39.0224 1.47645Z" fill="#007bff" />
                            <path d="M55.0067 1.47645C55.1557 1.0143 55.8096 1.0143 55.9585 1.47645L57.0649 4.90897C57.1315 5.11555 57.3237 5.25558 57.5408 5.25558H61.1296C61.613 5.25558 61.815 5.87334 61.425 6.15896L58.5147 8.29045C58.3409 8.41777 58.2682 8.64213 58.3343 8.84722L59.4443 12.291C59.593 12.7523 59.064 13.1342 58.6729 12.8477L55.7781 10.7275C55.6022 10.5987 55.3631 10.5987 55.1872 10.7275L52.2923 12.8477C51.9012 13.1342 51.3723 12.7523 51.521 12.291L52.631 8.84722C52.6971 8.64213 52.6244 8.41777 52.4505 8.29045L49.5402 6.15896C49.1503 5.87334 49.3523 5.25558 49.8357 5.25558H53.4245C53.6415 5.25558 53.8338 5.11555 53.9004 4.90897L55.0067 1.47645Z" fill="#007bff" />
                            <path d="M70.9794 1.47645C71.1283 1.0143 71.7822 1.0143 71.9312 1.47645L73.0375 4.90897C73.1041 5.11555 73.2964 5.25558 73.5134 5.25558H77.1022C77.5856 5.25558 77.7876 5.87334 77.3977 6.15896L74.4874 8.29045C74.3135 8.41777 74.2408 8.64213 74.3069 8.84722L75.4169 12.291C75.5656 12.7523 75.0367 13.1342 74.6456 12.8477L71.7507 10.7275C71.5748 10.5987 71.3357 10.5987 71.1598 10.7275L68.265 12.8477C67.8739 13.1342 67.3449 12.7523 67.4936 12.291L68.6036 8.84722C68.6697 8.64213 68.597 8.41777 68.4232 8.29045L65.5129 6.15896C65.1229 5.87334 65.3249 5.25558 65.8083 5.25558H69.3971C69.6142 5.25558 69.8064 5.11555 69.873 4.90897L70.9794 1.47645Z" fill="#007bff" />
                        </svg>
                        <p>Used by <span>100,000+</span> users</p>
                    </div>
                </div>

                <h1>Shop Everything, From Everyone  All in One Place</h1>

                <p className="subtitle">
                    A powerful multi-vendor marketplace where sellers create their own storefronts and customers discover
                     products from hundreds of trusted vendors — all in one place. Enjoy seamless shopping, secure payments,
                    and real-time order tracking, while vendors manage inventory, sales, and analytics from a simple dashboard.
                </p>

                <div className="hero-btns">
                    <Link to={'products'}>
                        <button className="btn-primary">Shop Now  <i class="fa-solid fa-arrow-right"></i></button>
                    </Link>
                    {/* <button className="btn-outline"> */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/>
              <rect x="2" y="6" width="14" height="12" rx="2"/>
            </svg> */}
                    {/* <span></span> */}
                    {/* </button> */}
                </div>

                {/* Image */}
                <img
                    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-2.png"
                    className="hero-img"
                    alt="hero section showcase"
                />
            </div>
        </>
    )
}

export default Dashboard