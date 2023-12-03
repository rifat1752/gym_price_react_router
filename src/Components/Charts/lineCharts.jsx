import { LineChart, Line,CartesianGrid, XAxis, YAxis } from 'recharts';

const LineCharts = () => {
    const studentData = [
        { id: 101, name: 'Alice Smith', math: 85, physics: 78, chemistry: 92 },
  { id: 102, name: 'Bob Johnson', math: 78, physics: 85, chemistry: 90 },
  { id: 103, name: 'Charlie Lee', math: 92, physics: 88, chemistry: 94 },
  { id: 104, name: 'David Brown', math: 67, physics: 72, chemistry: 68 },
  { id: 105, name: 'Emma White', math: 89, physics: 95, chemistry: 91 },
  { id: 106, name: 'Frank Davis', math: 73, physics: 79, chemistry: 75 },
  { id: 107, name: 'Grace Wilson', math: 95, physics: 92, chemistry: 98 },
  { id: 108, name: 'Henry Moore', math: 82, physics: 84, chemistry: 87 },
  { id: 109, name: 'Isabel Reed', math: 70, physics: 68, chemistry: 72 },
  { id: 110, name: 'Jack Turner', math: 88, physics: 91, chemistry: 89 }
      ]
    return (
        
        <div className='m-24'>
            
           <LineChart width={900} height={400} data={studentData}>
           <Line type="monotone"  dataKey="math" stroke='red'></Line>
           <Line type="monotone"  dataKey="physics" stroke='green' ></Line>
           <Line type="monotone"  dataKey="chemistry" stroke='blue' ></Line>
           <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
           </LineChart>
        </div>
    );
};

export default LineCharts;