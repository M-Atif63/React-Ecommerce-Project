import React from 'react'
import Btns from '../buttons/Btns'
import { Navigate } from 'react-router-dom'

function Dashboard() {
    return (
        <div style={{
            fontFamily: 'sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '20px',
        }}>

            <div style={{
                width: '100%',
                maxWidth: '1300px',
                height: '60px',
                borderRadius: '10px',
                background: '#007bff',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '15px',
                padding: '2.5rem 1rem',
                marginBottom: '2rem',
                boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'
            }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: '500', color: '#fff' }}>
                    AK
                </div>
                <h1 style={{ fontSize: '22px',
                     fontWeight: '500',
                      color: '#fff',
                       margin: 0,
                    }}>Aryan Khan</h1>
            </div>

            <div style={{ 
  flex: '1 1 calc(50% - 7px)',  
  boxSizing: 'border-box',
  background: '#fff', 
  border: '0.5px solid #ddd', 
  borderRadius: '12px', 
  padding: '1.25rem', 
  display: 'flex', 
  flexDirection: 'row', 
  gap: '10px' 
}}>

                <div style={{ background: '#fff', border: '0.5px solid #ddd', borderRadius: '12px', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ width: '38px', height: '38px', background: '#E6F1FB', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        📊
                    </div>
                    <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Total Projects</p>
                    <p style={{ fontSize: '26px', fontWeight: '500', color: '#111', margin: 0 }}>48</p>
                    <span style={{ fontSize: '12px', background: '#EAF3DE', color: '#3B6D11', padding: '3px 10px', borderRadius: '100px', width: 'fit-content' }}>↑ 12% this month</span>
                </div>

                <div style={{ background: '#fff', border: '0.5px solid #ddd', borderRadius: '12px', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ width: '38px', height: '38px', background: '#E1F5EE', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        👥
                    </div>
                    <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Clients</p>
                    <p style={{ fontSize: '26px', fontWeight: '500', color: '#111', margin: 0 }}>23</p>
                    <span style={{ fontSize: '12px', background: '#E1F5EE', color: '#085041', padding: '3px 10px', borderRadius: '100px', width: 'fit-content' }}>↑ 5 new</span>
                </div>

                {/* Card 3 */}
                <div style={{ background: '#fff', border: '0.5px solid #ddd', borderRadius: '12px', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ width: '38px', height: '38px', background: '#FAEEDA', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        🕐
                    </div>
                    <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Hours Logged</p>
                    <p style={{ fontSize: '26px', fontWeight: '500', color: '#111', margin: 0 }}>312</p>
                    <span style={{ fontSize: '12px', background: '#FAEEDA', color: '#633806', padding: '3px 10px', borderRadius: '100px', width: 'fit-content' }}>this quarter</span>
                </div>

                {/* Card 4 */}
                <div style={{ background: '#fff', border: '0.5px solid #ddd', borderRadius: '12px', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ width: '38px', height: '38px', background: '#FBEAF0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        ⭐
                    </div>
                    <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Rating</p>
                    <p style={{ fontSize: '26px', fontWeight: '500', color: '#111', margin: 0 }}>4.9</p>
                    <span style={{ fontSize: '12px', background: '#FBEAF0', color: '#72243E', padding: '3px 10px', borderRadius: '100px', width: 'fit-content' }}>★★★★★</span>
                </div>

            </div>
        </div>
    );
}

export default Dashboard