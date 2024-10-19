import React from 'react';

const NotificationsCTA = () => {
  return (
    <section className="py-20 bg-highlight">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-xl mb-6 text-gray-800">
          Get the latest updates and notifications to stay informed.
        </p>
        <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">
          Manage Notifications
        </button>
      </div>
    </section>
  );
}

export default NotificationsCTA;
