// App.jsx
import React from 'react';
import Navbar from './Components/Navbar/Navbar'; // Adjust the path as necessary
import Admin from './Pages/Admin/Admin'

const App = () => {
    return (
        <div>
            <Navbar />
            <Admin />
            {/* Other components */}
        </div>
    );
};

export default App;
