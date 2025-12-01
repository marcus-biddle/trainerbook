import { useState, useEffect } from 'react';
import type { TrainerData } from '~/types/trainer';

export const useTrainerData = () => {
  const [data, setData] = useState<TrainerData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setData({
        clientsCount: 3,
        programsCount: 5,
        sessionsCount: 2,
        clients: [
          { id: '1', name: 'Sarah Johnson', lastWorkout: 'Nov 28', nextSession: 'Dec 2' },
          { id: '2', name: 'Mike Chen', lastWorkout: 'Nov 29', nextSession: null },
          { id: '3', name: 'Emma Davis', lastWorkout: 'Nov 27', nextSession: 'Dec 5' }
        ],
        recentActivities: [
          { id: '1', type: 'workout_logged', clientName: 'Sarah J', timestamp: '2h ago', message: 'Completed chest day' },
          { id: '2', type: 'session_booked', clientName: 'Mike C', timestamp: '1d ago', message: 'Legs tomorrow 6PM' }
        ]
      });
      setLoading(false);
    }, 1500);
  }, []);

  return { data, loading, error };
};
