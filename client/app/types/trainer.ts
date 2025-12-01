export interface Client {
  id: string;
  name: string;
  lastWorkout: string | null;
  nextSession: string | null;
}

export interface Activity {
  id: string;
  type: 'client_joined' | 'workout_logged' | 'session_booked';
  clientName: string;
  timestamp: string;
  message: string;
}

export interface TrainerData {
  clientsCount: number;
  programsCount: number;
  sessionsCount: number;
  clients: Client[];
  recentActivities: Activity[];
}