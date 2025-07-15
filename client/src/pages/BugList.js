import { useEffect, useState } from 'react';
import { api } from '../services/api';

function BugList() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    api.get('/bugs').then(res => setBugs(res.data));
  }, []);

  return (
    <div>
      <h2>Bug List</h2>
      <ul>
        {bugs.map(b => (
          <li key={b._id}>{b.title} - {b.status}</li>
        ))}
      </ul>
    </div>
  );
}
export default BugList;
