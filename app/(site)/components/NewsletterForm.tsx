'ues client';
import React, { useState } from 'react';

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('https://hook.us1.make.com/p5rhm478czc78nhrljh4rhsbnj85y4oe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ email }).toString(),
      });

      const data = await response.text();

      if (data === 'Accepted') {
        setMessage('Thank you! We\'ll be in touch!');
      } else {
        // handle error case, perhaps display a different message
      }
    } catch (error) {
      console.error('Error:', error);
      // handle error case, perhaps display a different message
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your email address"
          className="w-[300px] p-2 border rounded"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <button
          type="submit"
          className="mt-2 rounded-lg bg-cyan-900 hover:bg-red-800 text-white p-2 max-w-xs px-10"
        >Add me to the list</button>
      </form>
      {message && <div className="text-white">{message}</div>}
    </div>
  );
}

export default NewsletterForm;
