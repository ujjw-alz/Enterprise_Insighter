// import React, { useState } from 'react';
// import { Dailyjob } from './dailyjob'; 
// import {Statistics} from './total_revenue'; 
// import {Due} from './due'; 
// import './after_login_style.css'
// function After_login(props) {
//     const [activeTab, setActiveTab] = useState(null);
//     const [showButtons, setShowButtons] = useState(true); 
//     const [passname,setpassname]=useState('');
//     let name = '';
//     const handleDailyJobs = () => {
//         setActiveTab('dailyJobs'); 
//         name = document.querySelector('.name').innerHTML; 
//         console.log(name); 
//         setpassname(name);
//         setShowButtons(false);
//     };

//     const handleDues = () => {
//         setActiveTab('dues'); 
//         name = document.querySelector('.name').innerHTML; 
//         console.log(name); 
//         setpassname(name);
//         setShowButtons(false);
//     };

//     const handleTotalRevenue = () => {
//         setActiveTab('totalRevenue'); 
//         name = document.querySelector('.name').innerHTML; 
//         console.log(name); 
//         setpassname(name);
//         setShowButtons(false);

//     };

//     return (
//         <div> 
       
//             {activeTab === 'dailyJobs' && (
//                 <div> 
//                     <Dailyjob name = {passname}/>
//                     {/* Daily Jobs HTML */}
//                 </div>
//             )}
            
//             {activeTab === 'dues' && (
//                 <div> 
//                     <Due name={passname} />
//                     {/* Dues HTML */}
//                 </div>
//             )}

//             {activeTab === 'totalRevenue' && (
//                 <div> 
//                     <Statistics name = {passname}/>
//                     {/* Total Revenue HTML */}
//                 </div>
//             )}

//             {showButtons && (
//                 <div>
//                     <button onClick={handleDailyJobs}>Daily jobs</button>
//                     <button onClick={handleDues}>Dues</button>
//                     <button onClick={handleTotalRevenue}>Total revenue</button>
//                 </div> 
//             )} 
//             <div className='name'>{props.name}</div>
//         </div>
//     );
// }

// export { After_login }; 
// Inside your After_login component file
// https://hackathon-project-version-2.vercel.app/
import React, { useState } from 'react';
import { Dailyjob } from './dailyjob'; 
import { Statistics } from './total_revenue'; 
import { Due } from './due'; 
import './after_login_style.css';
import {Restockform} from './restock';
function After_login(props) {
    const [activeTab, setActiveTab] = useState(null);
    const [passname, setPassname] = useState('');

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
        setPassname(props.name);
    };

    return (
        <div>
            <div className="button-container">
                <button className="button" onClick={() => handleTabChange('dailyJobs')}>Daily jobs</button>
                <button className="button" onClick={() => handleTabChange('dues')}>Dues</button>
                <button className="button" onClick={() => handleTabChange('totalRevenue')}>Total revenue</button> 
                <button className="button" onClick={()=>handleTabChange('restock')}>Restock</button>
                  
            </div>
            <div className="content">
                {activeTab === 'dailyJobs' && <Dailyjob name={passname} />}
                {activeTab === 'dues' && <Due name={passname} />}
                {activeTab === 'totalRevenue' && <Statistics name={passname} />} 
                {activeTab==='restock' && <Restockform name={props.name} />}
            </div>
        </div>
    );
}

export { After_login };

