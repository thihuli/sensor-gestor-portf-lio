import { useState, useEffect } from 'react';

const useNotifications = () => {
  const [items, setItems] = useState([]);
  const [readable, setReadable] = useState(false); 

  useEffect(() => {
    fetch();
  }, []);

  function fetch(){
    // TODO - Fetch in backend all notifications
    const data = {
      readable: true,
      items: [
        {
          text: "Matheus Quaresma adicionou uma tarefa no projeto.",
          date: Date.now(),
          read: true
        },
        {
          text: "Matheus Quaresma adicionou uma tarefa no projeto.",
          date: Date.now(),
        },
        {
          text: "Matheus Quaresma adicionou uma tarefa no projeto.",
          date: Date.now(),
        }
      ]
    }

    setItems(data.items);
    setReadable(data.readable);
  }

  return [items, readable];
}

export default useNotifications;