import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser, faStar } from '@fortawesome/free-solid-svg-icons';
import { UserData } from '../../../Profile';

const dummyUserData = {
  Activity: [
    { Activity: "Join our team meeting", Name: "Alice", Date: "2023-03-20", Point: "5" },
    { Activity: "Weekly Sync-up", Name: "Bob", Date: "2023-03-21", Point: "10" },
    { Activity: "Project Kickoff", Name: "Charlie", Date: "2023-03-22", Point: "15" },
  ],
};

interface ProfileActivityContentProps {
    userData: UserData | null;
}

const ProfileActivityContent: React.FC<ProfileActivityContentProps> = ({ userData }) => {
  const activities = dummyUserData?.Activity || [];

  return (
    <main className="flex-1 p-6 overflow-auto">
      {activities.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500 text-lg">No activities available.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300 ease-in-out p-4">
              <h3 className="text-lg font-semibold">{activity.Activity}</h3>
              <p className="text-sm text-gray-500 my-2">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                {activity.Name}
              </p>
              <p className="text-sm text-gray-500 my-2">
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                {activity.Date}
              </p>
              <p className="text-sm text-gray-500 my-2">
                <FontAwesomeIcon icon={faStar} className="mr-2" />
                {activity.Point} Points
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default ProfileActivityContent;